import React from 'react';
import './style.css';

const SelectorGenre = () => {
  const genres = ['all', 'action', 'drama', 'crime', 'romantic', 'horror', 'documentary'];
  return (
    <section className="selectorGenre">
      {genres.map((el, i) => (
        <div className="selectorGenre__element" key={i}>
          <input
            type="radio"
            name="selectorGenre"
            defaultChecked={i === 0}
            id={`selectorGenre__radio_${el}`}
            className="selectorGenre__radio"
          />
          <label htmlFor={`selectorGenre__radio_${el}`} className="selectorGenre__label">
            {el}
          </label>
        </div>
      ))}
    </section>
  );
};

export default SelectorGenre;
