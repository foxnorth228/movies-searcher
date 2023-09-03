import './style.css';
import React, { useEffect, useState } from 'react';
import Card from '@components/card';
import ButtonShowMore from '@components/button-show-more';
import { useGetMoviesQuery, IMovie } from '@src/servises/imdb-api';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

const CardList = () => {
  const [moviesIds, setMoviesIds] = useState<IMovie[]>(new Array(16).fill({ id: 'skip' }));

  const { data, error } = useGetMoviesQuery();
  useEffect(() => {
    if (data) {
      setMoviesIds(data);
    }
    if (error) {
      alert(
        'error' in error ? error.error : JSON.stringify((error as FetchBaseQueryError).data)
      );
    }
  }, [data, error]);

  return (
    <section className="cardList">
      <section className="cardList__container">
        {moviesIds.map((el, i) => (
          <Card key={i} info={el} />
        ))}
      </section>
      <ButtonShowMore />
    </section>
  );
};

export default CardList;
