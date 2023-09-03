import React, { useState } from 'react';
import './style.css';
import { useGetInfoQuery } from '@src/servises/imdb-api';
import { useMovies } from '@store/moviesSlice';
import CardFallback from './fallback';

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
  const [isLoaded, setIsLoad] = useState(false);
  const [movies] = useMovies();
  useGetInfoQuery(info.id, { skip: info.id === 'skip' || info.id in movies });
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
    <article className="card">
      {isLoaded ? null : <CardFallback />}
      {info.id !== 'skip' && (
        <div className="card__content" style={{ display: isLoaded ? '' : 'none' }}>
          <img
            className="card__image"
            src={cardInfo.image}
            alt="movie-image"
            onLoad={() => {
              setIsLoad(true);
            }}
          />
          <h3 className="card__title">{cardInfo.title}</h3>
          <span className="card__description">{cardInfo.directors}</span>
          <span className="card__description">•</span>
          <span className="card__description">{cardInfo.year}</span>
        </div>
      )}
    </article>
  );
};

export default Card;
