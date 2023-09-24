import React from 'react';

import * as styled from './styled';
import { fallbackDataTestId } from './config';

const MovieFallback = () => {
  return (
    <styled.Modal__Fallback data-testid={fallbackDataTestId}>
      <styled.Modal__Fallback_Image></styled.Modal__Fallback_Image>
    </styled.Modal__Fallback>
  );
};

export default MovieFallback;
