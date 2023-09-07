import React from 'react';
import './style.css';

interface IButtonShowMore {
  moveNextPage: () => void;
}

const ButtonShowMore = ({ moveNextPage }: IButtonShowMore) => {
  return (
    <button
      onClick={() => {
        moveNextPage();
      }}
      className="button__showMore"
    >
      Show more
    </button>
  );
};

export default ButtonShowMore;
