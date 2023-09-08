import React from 'react';
import './style.css';
import { useSelectedMovie } from '@store/moviesSlice';

const ModalDialogMovie = () => {
  const [selectedMovie, setSelectedMovie] = useSelectedMovie();
  return (
    <section onClick={() => setSelectedMovie('')} className="modalDialogMovie">
      <video></video>
    </section>
  );
};

export default ModalDialogMovie;
