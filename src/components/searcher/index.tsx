import React from 'react';
import './style.css';

interface ISearcher {
  className: string;
}

const Searcher = ({ className }: ISearcher) => {
  return (
    <article className={className}>
      <input className="searcher" />
    </article>
  );
};

export default Searcher;
