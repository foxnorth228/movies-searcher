import React, { useCallback, useState } from 'react';
import './style.css';
import { useSearchMovie } from '@store/moviesSlice';

interface ISearcher {
  className: string;
}

const Searcher = ({ className }: ISearcher) => {
  const [value, setValue] = useState('');
  const [, setSearchWord] = useSearchMovie();
  const submit = useCallback(() => {
    setSearchWord(value);
  }, [setSearchWord, value]);
  return (
    <article className={`searcher ${className}`}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="title_movie"
        id="search"
        placeholder="Search..."
        className="searcher__input"
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            submit();
          }
        }}
      />
      <label onClick={() => submit()} htmlFor="search" className="searcher__icon"></label>
    </article>
  );
};

export default Searcher;
