import React, { useEffect, useState } from 'react';
import './style.css';
import { useSelectedMovie } from '@store/moviesSlice';
import MovieFallback from '@src/layouts/modal-dialog-movie/fallback';
import useMatchMedia from '@hooks/use-match-media';

const ModalDialogMovie = () => {
  const [selectedMovie, setSelectedMovie] = useSelectedMovie();
  const [isLoadedFrame, setIsLoadedFrame] = useState(false);

  const mediaMatch1280 = useMatchMedia('(min-width: 992px) and (max-width: 1280px)');
  const mediaMatch991 = useMatchMedia('(min-width: 601px) and (max-width: 991px)');
  const mediaMatch600 = useMatchMedia('(min-width: 481px) and (max-width: 600px)');
  const mediaMatch480 = useMatchMedia('(max-width: 480px)');
  const [width, setWidth] = useState(640);
  useEffect(() => {
    switch (true) {
      case mediaMatch1280:
        setWidth(564);
        break;
      case mediaMatch991:
        setWidth(480);
        break;
      case mediaMatch600:
        setWidth(360);
        break;
      case mediaMatch480:
        setWidth(240);
        break;
      default:
        setWidth(640);
        break;
    }
  }, [mediaMatch1280, mediaMatch480, mediaMatch600, mediaMatch991]);

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
      <article
        style={{ width: width, height: (width / 4) * 3 }}
        className="modalDialogMovie__content"
      >
        {!isLoadedFrame && typeof movie === 'string' && <MovieFallback />}
        {typeof movie === 'string' ? (
          <iframe
            style={{ width: width, height: (width / 4) * 3 }}
            className="modalDialogMovie__video"
            src={String(movie) + '?' + urlParams.toString()}
            width="640"
            height="480"
            allowFullScreen={true}
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
