import React from 'react';
import './style.css';
import Card from '@components/card';
import ButtonShowMore from '@components/button-show-more';

const CardList = () => {
  const arr = new Array(16).fill(0);
  return (
    <section>
      <section>
        {arr.map((_, i) => (
          <Card key={i} />
        ))}
      </section>
      <ButtonShowMore />
    </section>
  );
};

export default CardList;
