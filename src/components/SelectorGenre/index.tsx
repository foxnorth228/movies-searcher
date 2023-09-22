import { useGenreMovie } from '@store/moviesSlice';
import React, { useCallback, useMemo } from 'react';

import * as config from './config';
import * as styled from './styled';

const SelectorGenre = () => {
  const [genre, setGenre] = useGenreMovie();
  const dataInput = useMemo(() => config.input, []);

  const handleInputOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setGenre(e.target.value),
    [setGenre]
  );

  return (
    <styled.SelectorGenre data-testid={config.selectorGenreDataTestid}>
      {Object.entries(config.genres).map((el) => (
        <styled.SelectorGenre__Element key={el[0]}>
          <styled.SelectorGenre__Radio
            type={dataInput.type}
            name={dataInput.name}
            value={el[1]}
            checked={genre === el[1]}
            id={dataInput.idPrefix + el[0]}
            onChange={handleInputOnChange}
          />
          <styled.SelectorGenre__Label htmlFor={dataInput.idPrefix + el[0]}>
            {el[0]}
          </styled.SelectorGenre__Label>
        </styled.SelectorGenre__Element>
      ))}
    </styled.SelectorGenre>
  );
};

export default SelectorGenre;
