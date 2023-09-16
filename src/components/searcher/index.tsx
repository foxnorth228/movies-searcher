import React, { useCallback, useState } from 'react';
import * as styled from './styled';
import { useSearchMovie } from '@store/moviesSlice';
import { RuleSet } from 'styled-components';

interface ISearcher {
  className: RuleSet<object>;
}

const Searcher = ({ className }: ISearcher) => {
  const [value, setValue] = useState('');
  const [, setSearchWord] = useSearchMovie();
  const submit = useCallback(() => {
    setSearchWord(value);
  }, [setSearchWord, value]);
  return (
    <styled.Searcher $class={className}>
      <styled.Searcher__Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="title_movie"
        id="search"
        placeholder="Search..."
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            submit();
          }
        }}
      />
      <styled.Searcher__Icon
        data-testid="searcher-label"
        onClick={() => submit()}
        htmlFor="search"
      ></styled.Searcher__Icon>
    </styled.Searcher>
  );
};

export default Searcher;
