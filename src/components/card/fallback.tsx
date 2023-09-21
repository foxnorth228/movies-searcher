import React from 'react';

import * as styled from './styled';

const CardFallback = () => {
  return (
    <styled.Card__Fallback data-testid="card-fallback">
      <styled.Card__Fallback_Image></styled.Card__Fallback_Image>
      <styled.Card__Fallback_Text>skeleton loader</styled.Card__Fallback_Text>
      <styled.Card__Fallback_Text>skeleton loader</styled.Card__Fallback_Text>
    </styled.Card__Fallback>
  );
};

export default CardFallback;
