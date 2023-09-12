import './style.css';
import React, { useEffect, useState } from 'react';
import { useIdToMovies, useMovies, useSelectedMovie } from '@store/moviesSlice';
import CardFallback from './fallback';
import { IMovie } from '@src/servises/imdb-api';
import useElementOnScreen from '@hooks/use-element-on-screen';

interface ICard {
  info: IMovie;
}

const Card = ({ info: { id } }: ICard) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: 0.0,
  });
  const [, setSelectedMovie] = useSelectedMovie();
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
    if (!(id in movies)) {
      setIsLoadImage(false);
    }
  }, [id, movies]);

  return (
    <article
      ref={containerRef}
      style={{ opacity: isVisible ? 1 : 0 }}
      className="card render-animation"
    >
      {id === 'skip' || !isLoadedImage ? <CardFallback /> : null}
      {id !== 'skip' && (
        <div
          className="card__content"
          style={{ display: isLoadedImage ? '' : 'none' }}
          onClick={() => setSelectedMovie(id)}
        >
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
