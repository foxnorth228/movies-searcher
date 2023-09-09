import React from 'react';
import './style.css';
import { useSelectedMovie } from '@store/moviesSlice';

const ModalDialogMovie = () => {
  const [selectedMovie, setSelectedMovie] = useSelectedMovie();
  let trailer;
  if ('trailer' in selectedMovie) {
    trailer = selectedMovie['trailer'];
  }
  const urlParams = new URLSearchParams();
  urlParams.append('autoplay', 'false');
  urlParams.append('width', '640');
  return (
    <section onClick={() => setSelectedMovie('')} className="modalDialogMovie">
      <iframe
        className="modalDialogMovie__video"
        src={String(
          trailer && typeof trailer === 'object' && 'linkEmbed' in trailer && trailer['linkEmbed']
        ) + '?' + urlParams.toString()}
        width="640"
        height="480"
        allowFullScreen={true}
        frameBorder="no"
        scrolling="no"
      ></iframe>
    </section>
  );
};

export default ModalDialogMovie;
