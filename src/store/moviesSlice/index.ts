// @ts-ignore

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store';
import { imdbApi, IMovie, useGetInfoQuery } from '@src/servises/imdb-api';
import { useEffect } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    value: {},
    searchWord: '',
  },
  reducers: {
    setSearchWord: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        searchWord: action.payload,
      };
    },
  },
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

export const { setSearchWord } = moviesSlice.actions;
export const useSearchMovie = () => {
  const dispatch = useDispatch();
  return [
    useSelector((state: RootState) => state.movies.searchWord),
    (str: string) => dispatch(setSearchWord(str)),
  ] as [string, (str: string) => void];
};

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
