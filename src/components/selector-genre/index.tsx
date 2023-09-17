import React from 'react';
import * as styled from './styled';
import { useGenreMovie } from '@store/moviesSlice';

const SelectorGenre = () => {
  const [genre, setGenre] = useGenreMovie();
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
    <styled.SelectorGenre data-testid="selector-genre">
      {Object.entries(genres).map((el, i) => (
        <styled.SelectorGenre__element key={i}>
          <styled.SelectorGenre__radio
            type="radio"
            name="selectorGenre"
            value={el[1]}
            checked={genre === el[1]}
            id={`selectorGenre__radio_${el[0]}`}
            onChange={(e) => setGenre(e.target.value)}
          />
          <styled.SelectorGenre__label htmlFor={`selectorGenre__radio_${el[0]}`}>
            {el[0]}
          </styled.SelectorGenre__label>
        </styled.SelectorGenre__element>
      ))}
    </styled.SelectorGenre>
  );
};

export default SelectorGenre;
