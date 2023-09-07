import './style.css';
import React, { useEffect, useState } from 'react';
import { useIdToMovies, useMovies } from '@store/moviesSlice';
import CardFallback from './fallback';
import { IMovie } from '@src/servises/imdb-api';

interface ICard {
  info: IMovie;
}

const Card = ({ info: { id } }: ICard) => {
  const [isLoadedImage, setIsLoadImage] = useState(false);
  const movies = useMovies();
  useIdToMovies(id, movies);

  let cardInfo = {
    title: '',
    year: '',
    image: '',
    directors: '',
  };
  if (id in movies) {
    cardInfo = movies[id as keyof typeof movies];
  }

  useEffect(() => {
    setIsLoadImage(false);
  }, [id]);

  return (
    <article className="card">
      {id === 'skip' || !isLoadedImage ? <CardFallback /> : null}
      {id !== 'skip' && (
        <div className="card__content" style={{ display: isLoadedImage ? '' : 'none' }}>
          <img
            className="card__image"
            src={cardInfo.image}
            alt="movie-image"
            onLoad={() => {
              setIsLoadImage(true);
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
