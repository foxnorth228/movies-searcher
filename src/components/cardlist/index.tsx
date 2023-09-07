import './style.css';
import React, { useCallback, useEffect, useState } from 'react';
import Card from '@components/card';
import ButtonShowMore from '@components/button-show-more';
import { useGetMoviesQuery, IMovie } from '@src/servises/imdb-api';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

const CardList = () => {
  const [numMovies] = useState(16);
  const [pageMovies, setPageMovies] = useState(1);
  const [moviesIds, setMoviesIds] = useState<IMovie[]>(
    new Array(numMovies * pageMovies).fill({ id: 'skip' })
  );
  const moveNextPage = useCallback(() => {
    if (numMovies * pageMovies > 250) {
      return;
    }
    setPageMovies(pageMovies + 1);
    setMoviesIds([...moviesIds, ...new Array(numMovies).fill({ id: 'skip' })]);
  }, [numMovies, pageMovies, moviesIds]);

  const { data, error } = useGetMoviesQuery(numMovies * pageMovies);
  useEffect(() => {
    if (data) {
      setMoviesIds(data);
    }
    if (error) {
      alert('error' in error ? error.error : JSON.stringify((error as FetchBaseQueryError).data));
    }
  }, [data, error]);

  return (
    <section className="cardList">
      <section className="cardList__container">
        {moviesIds.map((el, i) => (
          <Card key={i} info={el} />
        ))}
      </section>
      <ButtonShowMore moveNextPage={moveNextPage} />
    </section>
  );
};

export default CardList;
