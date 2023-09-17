import React from 'react';
import * as styled from './styled';

const MovieFallback = () => {
  return (
    <styled.Modal__Fallback data-testid="movie-fallback">
      <styled.Modal__Fallback_Image></styled.Modal__Fallback_Image>
    </styled.Modal__Fallback>
  );
};

export default MovieFallback;
