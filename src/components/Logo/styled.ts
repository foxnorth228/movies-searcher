import { styled } from 'styled-components';

export const logo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: start;
`;

export const logoIcon = styled.i`
  display: block;
  width: calc(1.5rem * 29 / 21);
  height: 1.5rem;
  background: url('./logo.svg');
  margin-right: 0.2rem;
`;
