import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useGetMoviesTitleQuery } from '@src/servises/imdb-api';
import { useGenreMovie } from '@store/moviesSlice';
import { useEffect, useState } from 'react';

const useElasticSearch = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);
  const [moviesTitle, setMoviesTitle] = useState<string[]>([]);
  const [genre] = useGenreMovie();
  const { data, error } = useGetMoviesTitleQuery({ count: 6, title: title, genre: genre });
  useEffect(() => {
    if (data) {
      setMoviesTitle(data.titles);
    }
    if (error) {
      alert('error' in error ? error.error : JSON.stringify((error as FetchBaseQueryError).data));
    }
  }, [data, error]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitle(initialTitle);
    }, 700);
    return () => clearTimeout(timer);
  }, [initialTitle]);
  return moviesTitle;
};

export default useElasticSearch;
