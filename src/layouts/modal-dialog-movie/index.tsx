import React, { useState } from 'react';
import './style.css';
import { useSelectedMovie } from '@store/moviesSlice';
import MovieFallback from '@src/layouts/modal-dialog-movie/fallback';

const ModalDialogMovie = () => {
  const [selectedMovie, setSelectedMovie] = useSelectedMovie();
  const [isLoadedFrame, setIsLoadedFrame] = useState(false);

  let trailer;
  if ('trailer' in selectedMovie) {
    trailer = selectedMovie['trailer'];
  }
  const notNullTrailer = typeof trailer === 'object' && trailer;
  const movie = notNullTrailer && 'linkEmbed' in notNullTrailer && notNullTrailer['linkEmbed'];

  const urlParams = new URLSearchParams();
  urlParams.append('autoplay', 'false');
  urlParams.append('width', '640');
  return (
    <section onClick={() => setSelectedMovie('')} className="modalDialogMovie">
      <article className="modalDialogMovie__content">
        {!isLoadedFrame && typeof movie === 'string' && <MovieFallback />}
        {typeof movie === 'string' ? (
          <iframe
            className="modalDialogMovie__video"
            src={String(movie) + '?' + urlParams.toString()}
            width="640"
            height="480"
            allowFullScreen={true}
            frameBorder="no"
            scrolling="no"
            onLoad={() => setIsLoadedFrame(true)}
          ></iframe>
        ) : (
          <h1 className="modalDialogMovie__errorMessage">
            {'Video is not available: '}
            {notNullTrailer &&
              'errorMessage' in notNullTrailer &&
              (notNullTrailer['errorMessage'] as string)}
          </h1>
        )}
      </article>
    </section>
  );
};

export default ModalDialogMovie;
