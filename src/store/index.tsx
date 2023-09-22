import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { imdbApi } from '@src/servises/imdb-api';
import moviesReducer, { moviesSlice } from '@store/moviesSlice';
import themeReducer, { themeSlice } from '@store/themeSlice';

export const store = configureStore({
  reducer: {
    [imdbApi.reducerPath]: imdbApi.reducer,
    [moviesSlice.name]: moviesReducer,
    [themeSlice.name]: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(imdbApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
