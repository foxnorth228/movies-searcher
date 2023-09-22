import globalConfig from '@constants/global.config';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useGetMoviesQuery } from '@src/servises/imdb-api';
import { IMovie } from '@src/servises/imdb-api/types';
import { useGenreMovie, useSearchMovie } from '@store/moviesSlice';
import { useEffect, useState } from 'react';

export const useMoviesIds = (
  numMovies: number,
  updateNumMovies: () => void
): [IMovie[], boolean] => {
  const [moviesIds, setMoviesIds] = useState<IMovie[]>(
    new Array(numMovies).fill({ id: globalConfig.DEFAULT_CARD_ID })
  );
  const [isButtonDisplayed, setIsButtonDisplayed] = useState(true);
  const [searchWord] = useSearchMovie();
  const [genre] = useGenreMovie();

  const { data, error } = useGetMoviesQuery({ count: numMovies, title: searchWord, genre: genre });

  useEffect(() => {
    if (data) {
      setMoviesIds(data.movies);
      setIsButtonDisplayed(!data.isLastData);
    }
    if (error) {
      alert('error' in error ? error.error : JSON.stringify((error as FetchBaseQueryError).data));
    }
  }, [data, error]);

  useEffect(() => {
    updateNumMovies();
  }, [updateNumMovies, searchWord, genre]);

  return [moviesIds, Boolean(isButtonDisplayed)];
};

export default useMoviesIds;
