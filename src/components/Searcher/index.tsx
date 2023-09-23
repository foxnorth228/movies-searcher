import * as config from '@components/Searcher/config';
import { ISearcher } from '@components/Searcher/types';
import { useSearchMovie } from '@store/moviesSlice';
import React, { useCallback, useMemo, useState } from 'react';
import DropDownTitles from '@components/DropDownTitles';

import * as styled from './styled';
import useElasticSearch from '@hooks/useElasticSearch';

const Searcher = ({ cssRule }: ISearcher) => {
  const [inputValue, setInputValue] = useState('');
  const [, setSearchWord] = useSearchMovie();
  const moviesTitle = useElasticSearch(inputValue);
  const [isOnFocus, setIsOnFocus] = useState(false);

  const dataInput = useMemo(() => config.input, []);
  console.log(moviesTitle);

  const processInputValue = useCallback(() => {
    setSearchWord(inputValue);
  }, [setSearchWord, inputValue]);

  const handleInputOnKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        processInputValue();
      }
    },
    [processInputValue]
  );

  const handleInputOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <styled.Searcher $class={cssRule}>
      <styled.Searcher__InputContainer>
        <styled.Searcher__Input
          value={inputValue}
          onChange={handleInputOnChange}
          name={dataInput.name}
          id={dataInput.id}
          placeholder={dataInput.placeholder}
          onKeyUp={handleInputOnKeyUp}
          onFocus={() => setIsOnFocus(true)}
          onBlur={() => setIsOnFocus(false)}
        />
        {isOnFocus && <DropDownTitles />}
      </styled.Searcher__InputContainer>
      <styled.Searcher__Icon
        data-testid={config.labelDataTestId}
        onClick={processInputValue}
        htmlFor={dataInput.id}
      ></styled.Searcher__Icon>
    </styled.Searcher>
  );
};

export default Searcher;
