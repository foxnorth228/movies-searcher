import React from 'react';
import * as styled from './styled';

interface IButtonShowMore {
  display: string;
  moveNextPage: () => void;
}

const ButtonShowMore = ({ display, moveNextPage }: IButtonShowMore) => {
  return (
    <styled.ButtonShowMore
      onClick={() => {
        moveNextPage();
      }}
      $display={display}
    >
      Show more
    </styled.ButtonShowMore>
  );
};

export default ButtonShowMore;
