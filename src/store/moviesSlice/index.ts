import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { imdbApi } from '@src/servises/imdb-api';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    value: {},
    searchWord: '',
    genre: '',
    selectedMovie: {},
  },
  reducers: {
    setSearchWord: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        searchWord: action.payload,
      };
    },
    setGenre: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        genre: action.payload,
      };
    },
    setSelectedMovie: (state, action: PayloadAction<string>) => {
      let obj = {};
      if (action.payload in state.value) {
        obj = state.value[action.payload as keyof typeof state.value];
      }
      return {
        ...state,
        selectedMovie: obj,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(imdbApi.endpoints.getInfo.matchFulfilled, (state, { payload }) => {
      const data = payload as { id: string; errorMessage: string };
      if (data.errorMessage && data.errorMessage !== '') {
        return state;
      }
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

export const { setSearchWord, setGenre, setSelectedMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
export * from './hooks';
