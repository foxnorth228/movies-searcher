import React from 'react';
import './style.css';

interface ICard {
  info: {
    title: string;
    imageSrc: string;
    year: number;
    director: string;
  };
}

const Card = ({ info: { title, imageSrc, year, director } }: ICard) => {
  return (
    <article>
      <img className="card__image" src={imageSrc} alt="movie-image" />
      <h3 className="card__title">{title}</h3>
      <span className="card__description">{director}</span>
      <span className="card__description">•</span>
      <span className="card__description">{year}</span>
    </article>
  );
};

export default Card;
