import { DefaultTheme, styled } from 'styled-components';

export const ButtonShowMore = styled.button<DefaultTheme & { $isDisplayed: boolean }>`
  display: ${(props) => (props.$isDisplayed ? 'block' : 'none')};
  margin: 0 auto;
  padding: 0.75rem 1.8rem;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  background-color: #ff8a00;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 1.1rem;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.buttonShowMoreHover};
  }
  &:active {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.buttonShowMoreActive};
  }
`;
