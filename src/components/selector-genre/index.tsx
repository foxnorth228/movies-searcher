import React from 'react';
import './style.css';
import { useGenreMovie } from '@store/moviesSlice';

const SelectorGenre = () => {
  const [, setGenre] = useGenreMovie();
  const genres = {
    All: '',
    action: 'Action',
    drama: 'Drama',
    crime: 'Crime',
    romantic: 'Romance',
    horror: 'Horror',
    documentary: 'Documentary',
  };
  return (
    <section className="selectorGenre">
      {Object.entries(genres).map((el, i) => (
        <div className="selectorGenre__element" key={i}>
          <input
            type="radio"
            name="selectorGenre"
            value={el[1]}
            defaultChecked={i === 0}
            id={`selectorGenre__radio_${el[0]}`}
            className="selectorGenre__radio"
            onChange={(e) => setGenre(e.target.value)}
          />
          <label htmlFor={`selectorGenre__radio_${el[0]}`} className="selectorGenre__label">
            {el[0]}
          </label>
        </div>
      ))}
    </section>
  );
};

export default SelectorGenre;
