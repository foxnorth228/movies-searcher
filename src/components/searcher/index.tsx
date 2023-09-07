import React from 'react';
import './style.css';
import { useSearchMovie } from '@store/moviesSlice';

interface ISearcher {
  className: string;
}

const Searcher = ({ className }: ISearcher) => {
  const [searchWord, setSearchWord] = useSearchMovie();
  return (
    <article className={`searcher ${className}`}>
      <input
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        name="title_movie"
        id="search"
        placeholder="Search..."
        className="searcher__input"
      />
      <label htmlFor="search" className="searcher__icon"></label>
    </article>
  );
};

export default Searcher;
