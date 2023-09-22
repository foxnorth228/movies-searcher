import React from 'react';

import * as styled from './styled';
import { fallbackDataTestId, fallbackText } from '@components/Card/config';

const CardFallback = () => {
  return (
    <styled.Card__Fallback data-testid={fallbackDataTestId}>
      <styled.Card__Fallback_Image></styled.Card__Fallback_Image>
      <styled.Card__Fallback_Text>{fallbackText}</styled.Card__Fallback_Text>
      <styled.Card__Fallback_Text>{fallbackText}</styled.Card__Fallback_Text>
    </styled.Card__Fallback>
  );
};

export default CardFallback;
