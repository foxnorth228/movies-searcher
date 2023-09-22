import { css, styled } from 'styled-components';

export const Header = styled.header`
  padding: 0 1rem;
`;

export const Header__Content = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  column-gap: 1rem;
  @media screen and (max-width: 600px) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }
`;

export const Header__Mobile_Down = css`
  @media screen and (max-width: 600px) {
    grid-area: 2 / 1 / span 1 / span 2;
  }
`;
