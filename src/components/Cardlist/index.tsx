import ButtonShowMore from '@components/ButtonShowMore';
import Card from '@components/Card';
import useMoviesIds from '@hooks/useMoviesIds';
import useWidthDependNum from '@hooks/useWidthDependNum';
import React, { useCallback, useEffect, useState } from 'react';

import * as styled from './styled';
import { alternativeText } from './config';

const CardList = () => {
  const numPerPageMovies = useWidthDependNum();
  const [numMovies, setNumMovies] = useState(numPerPageMovies);
  const updateNumMovies = useCallback(() => {
    setNumMovies(numPerPageMovies);
  }, [numPerPageMovies]);
  const [moviesIds, isLastData] = useMoviesIds(numMovies, updateNumMovies);

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
          <styled.CardList__Fallback>{alternativeText}</styled.CardList__Fallback>
        )}
      </styled.CardList__Container>
      <ButtonShowMore isDisplayed={!isLastData} moveNextPage={moveNextPage} />
    </styled.CardList>
  );
};

export default CardList;
