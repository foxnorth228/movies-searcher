import useElementOnScreen from '@hooks/use-element-on-screen';
import { IMovie } from '@src/servises/imdb-api';
import { useIdToMovies, useMovies, useSelectedMovie } from '@store/moviesSlice';
import React, { useEffect, useState } from 'react';

import CardFallback from './fallback';
import * as styled from './styled';

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
    <styled.Card data-testid="card">
      {id === 'skip' || !isLoadedImage ? <CardFallback /> : null}
      {id !== 'skip' && (
        <styled.Card__Content
          ref={containerRef}
          $isVisible={isVisible}
          $isLoadedImage={isLoadedImage}
          onClick={() => setSelectedMovie(id)}
        >
          <styled.Card__Image
            src={cardInfo.image}
            alt="movie-image"
            onLoad={() => {
              setIsLoadImage(true);
            }}
          />
          <styled.Card__DescriptionBlock>
            <styled.Card__Title>{cardInfo.title}</styled.Card__Title>
            <styled.Card__Description>{cardInfo.directors}</styled.Card__Description>
            <styled.Card__Description>•</styled.Card__Description>
            <styled.Card__Description>{cardInfo.year}</styled.Card__Description>
          </styled.Card__DescriptionBlock>
        </styled.Card__Content>
      )}
    </styled.Card>
  );
};

export default Card;
