import React from 'react';

import { fallbackDataTestId } from './config';
import * as styled from './styled';

const MovieFallback = () => {
  return (
    <styled.Modal__Fallback data-testid={fallbackDataTestId}>
      <styled.Modal__Fallback_Image></styled.Modal__Fallback_Image>
    </styled.Modal__Fallback>
  );
};

export default MovieFallback;
