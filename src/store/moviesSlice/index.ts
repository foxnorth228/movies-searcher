import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store';
import { imdbApi } from '@src/servises/imdb-api';

export interface IMoviesSlice {
  value: object;
}
export interface IAction {
  type: string;
  payload: IAddMoviePayload;
}

interface IAddMoviePayload {
  name: string;
  value: object;
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    value: {},
  },
  reducers: {
    addMovie: (state, action: IAction) => {
      if (!(action.payload.name in state.value)) {
        return {
          ...state,
          value: {
            ...state.value,
            [action.payload.name]: action.payload.value,
          },
        };
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(imdbApi.endpoints.getInfo.matchFulfilled, (state, { payload }) => {
      const data = payload as IAddMoviePayload;
      return {
        ...state,
        value: {
          ...state.value,
          [data?.id ?? '1']: data ?? '2',
        },
      };
    });
  },
});

const { addMovie } = moviesSlice.actions;
export const useMovies = () => {
  const movies = useSelector((state: RootState) => (state.movies as IMoviesSlice).value);
  const dispatch = useDispatch();
  const setMovies = (obj: IAddMoviePayload) => dispatch(addMovie(obj));
  return [movies, setMovies] as [object, (obj: IAddMoviePayload) => unknown];
};
export default moviesSlice.reducer;
