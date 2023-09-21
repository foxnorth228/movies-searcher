import { styled } from 'styled-components';

export const errorBoundary = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--background, white);
  color: var(--text, black);
`;
