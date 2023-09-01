import React from 'react';
import './style.css';
import Card from '@components/card';
import ButtonShowMore from '@components/button-show-more';

const CardList = () => {
  const arr = new Array(16).fill({
    title: 'Title',
    imageSrc: 'image',
    year: 2000,
    director: 'Director',
  });
  return (
    <section className="cardList">
      <section className="cardList__container">
        {arr.map((el, i) => (
          <Card key={i} info={el} />
        ))}
      </section>
      <ButtonShowMore />
    </section>
  );
};

export default CardList;
