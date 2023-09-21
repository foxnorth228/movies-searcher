import * as config from '@components/Searcher/index.config';
import { ISearcher } from '@components/Searcher/types';
import { useSearchMovie } from '@store/moviesSlice';
import React, { useCallback, useState } from 'react';

import * as styled from './styled';

const Searcher = ({ className }: ISearcher) => {
  const [value, setValue] = useState('');
  const [, setSearchWord] = useSearchMovie();

  const submit = useCallback(() => {
    setSearchWord(value);
  }, [setSearchWord, value]);
  const inputOnKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        submit();
      }
    },
    [submit]
  );
  const inputOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );
  return (
    <styled.Searcher $class={className}>
      <styled.Searcher__Input
        value={value}
        onChange={inputOnChange}
        name={config.input__name}
        id={config.input__id}
        placeholder={config.input__placeholder}
        onKeyUp={inputOnKeyUp}
      />
      <styled.Searcher__Icon
        data-testid={config.label__data_testid}
        onClick={submit}
        htmlFor={config.input__id}
      ></styled.Searcher__Icon>
    </styled.Searcher>
  );
};

export default Searcher;
