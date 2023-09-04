import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store';
import { imdbApi, IMovie, useGetInfoQuery } from '@src/servises/imdb-api';
import { useEffect } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    value: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(imdbApi.endpoints.getInfo.matchFulfilled, (state, { payload }) => {
      const data = payload as IMovie;
      return {
        ...state,
        value: {
          ...state.value,
          [data.id]: data,
        },
      };
    });
  },
});

export const useMovies = () => {
  return useSelector((state: RootState) => state.movies.value);
};

export const useIdToMovies = (id: string, movies: object) => {
  const { error } = useGetInfoQuery(id, { skip: id === 'skip' || id in movies });
  useEffect(() => {
    if (error) {
      alert('error' in error ? error.error : JSON.stringify((error as FetchBaseQueryError).data));
    }
  }, [error]);
};

export default moviesSlice.reducer;
