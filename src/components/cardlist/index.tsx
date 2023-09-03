import React, { useEffect, useState } from 'react';
import './style.css';
import Card from '@components/card';
import ButtonShowMore from '@components/button-show-more';
import { useGetMoviesQuery, IMovie } from '@src/servises/imdb-api';

const CardList = () => {
  const [moviesIds, setMoviesIds] = useState<IMovie[]>([]);
  const { data, error } = useGetMoviesQuery();
  useEffect(() => {
    if (data) {
      setMoviesIds(data);
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);
  const arr = moviesIds.length === 0 ? new Array(16).fill({ id: 'skip' }) : moviesIds.slice(0, 16);
  return (
    <section className="cardList">
      <section className="cardList__container">
        {arr.map((el, i) => (
          <Card key={i} info={el} />
        ))}
      </section>
      <ButtonShowMore />
    </section>
  );
};

export default CardList;
