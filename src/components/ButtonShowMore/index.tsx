import { buttonTitle } from '@components/ButtonShowMore/config';
import { IButtonShowMore } from '@components/ButtonShowMore/types';
import React, { useCallback } from 'react';

import * as styled from './styled';

const ButtonShowMore = ({ display, moveNextPage }: IButtonShowMore) => {
  const handleButtonOnClick = useCallback(() => moveNextPage(), [moveNextPage]);
  return (
    <styled.ButtonShowMore onClick={handleButtonOnClick} $display={display}>
      {buttonTitle}
    </styled.ButtonShowMore>
  );
};

export default ButtonShowMore;
