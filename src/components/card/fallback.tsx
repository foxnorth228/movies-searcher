import React from 'react';

const CardFallback = () => {
  return (
    <article className="card__fallback">
      <div className="card__fallback_image skeleton"></div>
      <p className="card__fallback_text skeleton">skeleton loader</p>
      <p className="card__fallback_text skeleton">skeleton loader</p>
    </article>
  );
};

export default CardFallback;
