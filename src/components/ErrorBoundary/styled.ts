import { DefaultTheme, styled } from 'styled-components';

export const ErrorBoundary = styled.div<DefaultTheme>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;
