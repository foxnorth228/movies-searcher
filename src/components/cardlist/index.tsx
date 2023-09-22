import ButtonShowMore from '@components/ButtonShowMore';
import Card from '@components/Card';
import useMatchMedia from '@hooks/useMatchMedia';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { IMovie, useGetMoviesQuery } from '@src/servises/imdb-api';
import { useGenreMovie, useSearchMovie } from '@store/moviesSlice';
import React, { useCallback, useEffect, useState } from 'react';

import * as styled from './styled';

const CardList = () => {
  const mediaMatch = useMatchMedia('(max-width: 768px)');
  const [numPerPageMovies, setNumPerPageMovies] = useState(mediaMatch ? 4 : 16);
  const [pageMovies, setPageMovies] = useState(1);
  const [numMovies, setNumMovies] = useState(numPerPageMovies * pageMovies);
  const [moviesIds, setMoviesIds] = useState<IMovie[]>(
    new Array(numPerPageMovies * pageMovies).fill({ id: 'skip' })
  );

  const [searchWord] = useSearchMovie();
  const [genre] = useGenreMovie();
  useEffect(() => {
    setPageMovies(1);
    setNumMovies(numPerPageMovies);
  }, [numPerPageMovies, searchWord, genre]);

  useEffect(() => {
    setNumPerPageMovies(mediaMatch ? 4 : 16);
  }, [mediaMatch]);

  const { data, error } = useGetMoviesQuery({ count: numMovies, title: searchWord, genre: genre });
  const { data: testData } = useGetMoviesQuery({
    count: numMovies + 1,
    title: searchWord,
    genre: genre,
  });

  useEffect(() => {
    if (data) {
      setMoviesIds(data);
    }
    if (error) {
      alert('error' in error ? error.error : JSON.stringify((error as FetchBaseQueryError).data));
    }
  }, [data, error]);

  const moveNextPage = useCallback(() => {
    if (numPerPageMovies * (pageMovies + 1) > 250) {
      setNumMovies(250);
      return;
    }
    if (moviesIds.length < numMovies) {
      return;
    }
    setNumMovies(numPerPageMovies * (pageMovies + 1));
    setPageMovies(pageMovies + 1);
  }, [moviesIds.length, numMovies, numPerPageMovies, pageMovies]);
  const buttonDisplay =
    moviesIds.length === 0 ||
    numMovies === 250 ||
    (testData && moviesIds.length === testData.length)
      ? 'none'
      : '';

  return (
    <styled.CardList>
      <styled.CardList__Container>
        {moviesIds.length !== 0 ? (
          moviesIds.map((el) => <Card key={el.id} id={el.id} />)
        ) : (
          <styled.CardList__Fallback>
            There are no movies suitable for your needs
          </styled.CardList__Fallback>
        )}
      </styled.CardList__Container>
      <ButtonShowMore display={buttonDisplay} moveNextPage={moveNextPage} />
    </styled.CardList>
  );
};

export default CardList;
