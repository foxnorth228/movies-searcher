import { useGenreMovie } from '@store/moviesSlice';
import React, { useCallback } from 'react';

import * as config from './index.config';
import * as styled from './styled';

const SelectorGenre = () => {
  const [genre, setGenre] = useGenreMovie();

  const radioOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setGenre(e.target.value),
    [setGenre]
  );

  return (
    <styled.SelectorGenre data-testid={config.selectorGenre__data_testid}>
      {Object.entries(config.genres).map((el) => (
        <styled.SelectorGenre__element key={el[0]}>
          <styled.SelectorGenre__radio
            type={config.radio__type}
            name={config.radio__name}
            value={el[1]}
            checked={genre === el[1]}
            id={config.radio__id_prefix + el[0]}
            onChange={radioOnChange}
          />
          <styled.SelectorGenre__label htmlFor={config.radio__id_prefix + el[0]}>
            {el[0]}
          </styled.SelectorGenre__label>
        </styled.SelectorGenre__element>
      ))}
    </styled.SelectorGenre>
  );
};

export default SelectorGenre;
