import React from 'react';
import './style.css';

interface IButtonShowMore {
  style: object;
  moveNextPage: () => void;
}

const ButtonShowMore = ({ style, moveNextPage }: IButtonShowMore) => {
  return (
    <button
      onClick={() => {
        moveNextPage();
      }}
      style={style}
      className="button__showMore"
    >
      Show more
    </button>
  );
};

export default ButtonShowMore;
