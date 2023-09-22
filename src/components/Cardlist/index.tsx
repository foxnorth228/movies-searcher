import ButtonShowMore from '@components/ButtonShowMore';
import Card from '@components/Card';
import useMoviesIds from '@hooks/useMoviesIds';
import useNumPerPage from '@hooks/useNumPerPage';
import React, { useCallback, useEffect, useState } from 'react';

import * as styled from './styled';

const CardList = () => {
  const numPerPageMovies = useNumPerPage();
  const [numMovies, setNumMovies] = useState(numPerPageMovies);
  const updateNumMovies = useCallback(() => {
    setNumMovies(numPerPageMovies);
  }, [numPerPageMovies]);
  const [moviesIds, isButtonDisplayed] = useMoviesIds(numMovies, updateNumMovies);

  useEffect(() => {
    updateNumMovies();
  }, [numPerPageMovies, updateNumMovies]);

  const moveNextPage = useCallback(() => {
    if (moviesIds.length < numMovies) {
      return;
    }
    setNumMovies(numMovies + numPerPageMovies);
  }, [moviesIds.length, numMovies, numPerPageMovies]);

  return (
    <styled.CardList>
      <styled.CardList__Container>
        {moviesIds.length !== 0 ? (
          moviesIds.map((el, i) => <Card key={el.id + i} id={el.id} />)
        ) : (
          <styled.CardList__Fallback>
            There are no movies suitable for your needs
          </styled.CardList__Fallback>
        )}
      </styled.CardList__Container>
      <ButtonShowMore isDisplayed={Boolean(isButtonDisplayed)} moveNextPage={moveNextPage} />
    </styled.CardList>
  );
};

export default CardList;
