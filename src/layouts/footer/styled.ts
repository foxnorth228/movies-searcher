import { styled } from 'styled-components';

export const Footer = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.19);
  border-bottom: 1px solid rgba(0, 0, 0, 0.19);
`;

export const Footer__Container = styled.section`
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(5, minmax(max-content, 1fr));
  grid-template-rows: 1fr;
  grid-column-gap: 1.5rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, minmax(max-content, 1fr));
  }
  @media screen and (max-width: 600px) {
    padding: 0.5rem 1rem;
    grid-row-gap: 1.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr max-content;
  }
`;

export const Footer__TextBlock__First = styled.article`
  & > p {
    font-weight: 600;
    margin: 0;
  }
`;

export const Footer__TextBlock__Second = styled.article`
  & > p {
    font-weight: 600;
    margin: 0;
  }
`;

export const Footer__Icons = styled.article`
  grid-column: 5 / span 1;
  display: flex;
  & > i {
    display: block;
    width: 17px;
    height: 16px;
    margin-right: 27px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 768px) {
    justify-self: end;
    grid-column: 3 / span 1;
    & > i {
      margin-right: 1rem;
    }
  }
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-around;
    grid-column: 1 / span 1;
  }
`;

export const Footer__Title = styled.h2`
  text-align: center;
  color: var(--footer-title, #8a8a8a);
  font-size: 1.2rem;
  font-family: 'Roboto', serif;
  font-weight: 500;
`;
