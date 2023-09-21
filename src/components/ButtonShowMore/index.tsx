import { buttonTitle } from '@components/ButtonShowMore/index.config';
import { IButtonShowMore } from '@components/ButtonShowMore/types';
import React, { useCallback } from 'react';

import * as styled from './styled';

const ButtonShowMore = ({ display, moveNextPage }: IButtonShowMore) => {
  const handlerOnClick = useCallback(() => moveNextPage(), [moveNextPage]);
  return (
    <styled.buttonShowMore onClick={handlerOnClick} $display={display}>
      {buttonTitle}
    </styled.buttonShowMore>
  );
};

export default ButtonShowMore;
