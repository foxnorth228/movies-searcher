import { RootState } from '@src/store';
import { useGetInfoQuery } from '@src/servises/imdb-api';
import { setGenre, setSearchWord } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

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

export const useIdToMovies = (id: string, movies: object) => {
  const { error } = useGetInfoQuery(id, { skip: id === 'skip' || id in movies });
  useEffect(() => {
    if (error) {
      alert('error' in error ? error.error : JSON.stringify((error as FetchBaseQueryError).data));
    }
  }, [error]);
};
