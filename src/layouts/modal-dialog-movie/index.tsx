import React, { useEffect, useState } from 'react';
import './style.css';
import { useSelectedMovie } from '@store/moviesSlice';
import MovieFallback from '@src/layouts/modal-dialog-movie/fallback';

const ModalDialogMovie = () => {
  const [selectedMovie, setSelectedMovie] = useSelectedMovie();
  const [isLoadedFrame, setIsLoadedFrame] = useState(false);

  const [width, setWidth] = useState(640);
  useEffect(() => {
    const mediaWatcher1280 = window.matchMedia('(max-width: 1280px)');
    setWidth(mediaWatcher1280.matches ? 564 : 640);
    function updateWidth(e: MediaQueryListEvent) {
      setWidth(e.matches ? 564 : 640);
    }
    mediaWatcher1280.addEventListener('change', updateWidth);
    return function cleanup() {
      mediaWatcher1280.removeEventListener('change', updateWidth);
    };
  }, [width]);
  console.log(width);

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
