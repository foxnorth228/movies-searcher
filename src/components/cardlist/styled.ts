import { styled } from 'styled-components';

export const CardList = styled.section`
  margin: 1.5rem;
`;

export const CardList__Container = styled.section`
  display: grid;
  margin: 1.2rem 0.7rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 1.5rem 1rem;
  justify-items: center;
  @media screen and (min-width: 1281px) and (max-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 992px) and (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 531px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 530px) {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem 0;
  }
`;

export const CardList__Fallback = styled.p`
  font-size: 1.4rem;
  grid-area: 1 / 1 / span 1 / span 4;
`;
