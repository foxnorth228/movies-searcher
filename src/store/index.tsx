import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { imdbApi } from '@src/servises/imdb-api';
import moviesReducer from '@store/moviesSlice';
export const store = configureStore({
  reducer: {
    [imdbApi.reducerPath]: imdbApi.reducer,
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(imdbApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
