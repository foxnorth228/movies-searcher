import DropDownTitles from '@components/DropDownTitles';
import * as config from '@components/Searcher/config';
import { ISearcher } from '@components/Searcher/types';
import useElasticSearch from '@hooks/useElasticSearch';
import { useSearchMovie } from '@store/moviesSlice';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import * as styled from './styled';

const Searcher = ({ cssRule }: ISearcher) => {
  const [inputValue, setInputValue] = useState('');
  const [searchWord, setSearchWord] = useSearchMovie();
  const moviesTitle = useElasticSearch(inputValue);
  const [isOnFocus, setIsOnFocus] = useState(false);

  const dataInput = useMemo(() => config.input, []);

  useEffect(() => {
    setInputValue(searchWord);
  }, [searchWord]);

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
        {isOnFocus && <DropDownTitles data={moviesTitle} />}
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
