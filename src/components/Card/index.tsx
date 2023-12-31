import { cardDataTestId, imageAlt, threshold } from '@components/Card/config';
import useElementOnScreen from '@hooks/useElementOnScreen';
import { IMovie } from '@src/servises/imdb-api/types';
import { useIdToMovies, useSelectedMovie } from '@store/moviesSlice';
import React, { useCallback, useEffect, useState } from 'react';

import globalConfig from '../../constants/global.config';
import CardFallback from './fallback';
import * as styled from './styled';

const Card = ({ id }: IMovie) => {
  const [refVisibleObject, isVisible] = useElementOnScreen({ threshold: threshold });
  const [, setSelectedMovie] = useSelectedMovie();
  const [cardInfo, isMovieStored] = useIdToMovies(id);
  const [isLoadedImage, setIsLoadImage] = useState(false);

  useEffect(() => {
    if (!isMovieStored) {
      setIsLoadImage(false);
    }
  }, [isMovieStored]);

  const handleCardOnClick = useCallback(() => setSelectedMovie(id), [id, setSelectedMovie]);
  const handleImageOnLoad = useCallback(() => setIsLoadImage(true), []);

  return (
    <styled.Card data-testid={cardDataTestId}>
      {(id === globalConfig.DEFAULT_CARD_ID || !isLoadedImage) && <CardFallback />}
      {id !== globalConfig.DEFAULT_CARD_ID && (
        <styled.Card__Content
          ref={refVisibleObject}
          $isVisible={isVisible}
          $isLoadedImage={isLoadedImage}
          onClick={handleCardOnClick}
        >
          <styled.Card__Image src={cardInfo.image} alt={imageAlt} onLoad={handleImageOnLoad} />
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
