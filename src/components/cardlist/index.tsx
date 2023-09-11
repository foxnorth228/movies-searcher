import './style.css';
import React, { useCallback, useEffect, useState } from 'react';
import Card from '@components/card';
import ButtonShowMore from '@components/button-show-more';
import { useGetMoviesQuery, IMovie } from '@src/servises/imdb-api';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useGenreMovie, useSearchMovie } from '@store/moviesSlice';

const CardList = () => {
  const mediaWatcher = window.matchMedia('(max-width: 768px)');
  const [numPerPageMovies, setNumPerPageMovies] = useState(mediaWatcher.matches ? 4 : 16);
  const [pageMovies, setPageMovies] = useState(1);
  const [numMovies, setNumMovies] = useState(numPerPageMovies * pageMovies);
  const [moviesIds, setMoviesIds] = useState<IMovie[]>(
    new Array(numPerPageMovies * pageMovies).fill({ id: 'skip' })
  );

  const [searchWord] = useSearchMovie();
  const [genre] = useGenreMovie();
  useEffect(() => {
    setPageMovies(1);
    setNumMovies(numPerPageMovies);
  }, [numPerPageMovies, searchWord, genre]);

  useEffect(() => {
    const mediaWatcher = window.matchMedia('(max-width: 768px)');
    setNumPerPageMovies(mediaWatcher.matches ? 4 : 16);
    function updateNumPerPageMovies(e: MediaQueryListEvent) {
      setNumPerPageMovies(e.matches ? 4 : 16);
    }
    mediaWatcher.addEventListener('change', updateNumPerPageMovies);
    return () => mediaWatcher.removeEventListener('change', updateNumPerPageMovies);
  }, [numPerPageMovies]);
  const { data, error } = useGetMoviesQuery({ count: numMovies, title: searchWord, genre: genre });
  const { data: testData } = useGetMoviesQuery({
    count: numMovies + 1,
    title: searchWord,
    genre: genre,
  });

  useEffect(() => {
    if (data) {
      setMoviesIds(data);
    }
    if (error) {
      alert('error' in error ? error.error : JSON.stringify((error as FetchBaseQueryError).data));
    }
  }, [data, error]);

  const moveNextPage = useCallback(() => {
    if (numPerPageMovies * (pageMovies + 1) > 250) {
      setNumMovies(250);
      return;
    }
    if (moviesIds.length < numMovies) {
      return;
    }
    setNumMovies(numPerPageMovies * (pageMovies + 1));
    setPageMovies(pageMovies + 1);
  }, [moviesIds.length, numMovies, numPerPageMovies, pageMovies]);
  const buttonDisplay =
    moviesIds.length === 0 ||
    numMovies === 250 ||
    (testData && moviesIds.length === testData.length)
      ? 'none'
      : '';

  return (
    <section className="cardList">
      <section className="cardList__container">
        {moviesIds.length !== 0 ? (
          moviesIds.map((el, i) => <Card key={i} info={el} />)
        ) : (
          <p className="cardList__fallback">There are no movies suitable for your needs</p>
        )}
      </section>
      <ButtonShowMore style={{ display: buttonDisplay }} moveNextPage={moveNextPage} />
    </section>
  );
};

export default CardList;
