import React from 'react';
import './style.css';
import { useGetInfoQuery } from '@src/servises/imdb-api';
import { useMovies } from '@store/moviesSlice';

interface ICard {
  info: {
    id: string;
  };
}

interface ICardInfo {
  title: string;
  year: string;
  image: string;
  directors: string;
}

const Card = ({ info }: ICard) => {
  const [movies] = useMovies();
  useGetInfoQuery(info.id, { skip: info.id === 'skip' });
  let cardInfo: ICardInfo = {
    title: 'title',
    year: '',
    image: '',
    directors: '',
  };
  if (info.id in movies) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cardInfo = movies[info.id];
  }
  return (
    <article>
      <img className="card__image" src={cardInfo.image} alt="movie-image" />
      <h3 className="card__title">{cardInfo.title}</h3>
      <span className="card__description">{cardInfo.directors}</span>
      <span className="card__description">•</span>
      <span className="card__description">{cardInfo.year}</span>
    </article>
  );
};

export default Card;
