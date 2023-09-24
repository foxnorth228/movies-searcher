import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useGetInfoQuery } from '@src/servises/imdb-api';
import { RootState } from '@src/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import globalConfig from '../../constants/global.config';
import { setGenre, setSearchWord, setSelectedMovie } from './index';

export const useSearchMovie = () => {
  const dispatch = useDispatch();
  return [
    useSelector((state: RootState) => state.movies.searchWord),
    (str: string) => dispatch(setSearchWord(str)),
  ] as [string, (str: string) => void];
};

export const useGenreMovie = () => {
  const dispatch = useDispatch();
  return [
    useSelector((state: RootState) => state.movies.genre),
    (str: string) => dispatch(setGenre(str)),
  ] as [string, (str: string) => void];
};

export const useMovies = () => {
  return useSelector((state: RootState) => state.movies.value);
};

function createEmptyMovie() {
  return {
    title: '',
    year: '',
    image: '',
    directors: '',
  };
}

export const useIdToMovies = (id: string): [ReturnType<typeof createEmptyMovie>, boolean] => {
  const movies = useMovies();
  const isMovieStored = id in movies;
  const { error } = useGetInfoQuery(id, {
    skip: id === globalConfig.DEFAULT_CARD_ID || isMovieStored,
  });
  useEffect(() => {
    if (error) {
      alert('error' in error ? error.error : JSON.stringify((error as FetchBaseQueryError).data));
    }
  }, [error]);
  return [isMovieStored ? movies[id as keyof typeof movies] : createEmptyMovie(), isMovieStored];
};

export const useSelectedMovie = () => {
  const dispatch = useDispatch();
  return [
    useSelector((state: RootState) => state.movies.selectedMovie),
    (str: string) => dispatch(setSelectedMovie(str)),
  ] as [object, (str: string) => void];
};
