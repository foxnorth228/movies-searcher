import { useSearchMovie } from '@store/moviesSlice';
import React, { useCallback } from 'react';

import * as styled from './styled';

interface IDropDownTitles {
  data: string[];
}

const DropDownTitles = ({ data }: IDropDownTitles) => {
  const [, setSearchWord] = useSearchMovie();

  const handleElementOnClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      setSearchWord(String(e.currentTarget.dataset['value']));
    },
    [setSearchWord]
  );

  return (
    <styled.DropDownTitles $size={data.length}>
      {data.map((el) => (
        <styled.DropDownTitles__Element onMouseDown={handleElementOnClick} data-value={el} key={el}>
          {el}
        </styled.DropDownTitles__Element>
      ))}
    </styled.DropDownTitles>
  );
};

export default DropDownTitles;
