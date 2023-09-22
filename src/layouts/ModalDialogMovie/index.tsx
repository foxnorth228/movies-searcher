import MovieFallback from '@layouts/ModalDialogMovie/fallback';
import useModalDialogMovieWidth from '@layouts/ModalDialogMovie/useModalDialogMovieWidth';
import { useSelectedMovie } from '@store/moviesSlice';
import React, { useState } from 'react';

import * as styled from './styled';

const ModalDialogMovie = () => {
  const [selectedMovie, setSelectedMovie] = useSelectedMovie();
  const [isLoadedFrame, setIsLoadedFrame] = useState(false);
  const width = useModalDialogMovieWidth();

  let trailer;
  if ('trailer' in selectedMovie) {
    trailer = selectedMovie['trailer'];
  }
  const notNullTrailer = typeof trailer === 'object' && trailer;
  const movie = notNullTrailer && 'linkEmbed' in notNullTrailer && notNullTrailer['linkEmbed'];

  const urlParams = new URLSearchParams();
  urlParams.append('autoplay', 'false');
  urlParams.append('width', String(width));
  return (
    <styled.ModalDialogMovie data-testid="modal-dialog-movie" onClick={() => setSelectedMovie('')}>
      <styled.ModalDialogMovie__Content $width={width}>
        {!isLoadedFrame && typeof movie === 'string' && <MovieFallback />}
        {typeof movie === 'string' ? (
          <styled.ModalDialogMovie__Video
            $width={width}
            src={String(movie) + '?' + urlParams.toString()}
            width="640"
            height="480"
            allowFullScreen={true}
            scrolling="no"
            onLoad={() => setIsLoadedFrame(true)}
          ></styled.ModalDialogMovie__Video>
        ) : (
          <styled.ModalDialogMovie__ErrorMessage>
            {'Video is not available: '}
            {notNullTrailer &&
              'errorMessage' in notNullTrailer &&
              (notNullTrailer['errorMessage'] as string)}
          </styled.ModalDialogMovie__ErrorMessage>
        )}
      </styled.ModalDialogMovie__Content>
    </styled.ModalDialogMovie>
  );
};

export default ModalDialogMovie;
