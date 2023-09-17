import { styled } from 'styled-components';

export const ButtonShowMore = styled.button<{ $display: string }>`
  display: ${(props) => (props.$display !== '' ? props.$display : 'block')};
  margin: 0 auto;
  padding: 0.75rem 1.8rem;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  background-color: #ff8a00;
  color: #fff;
  font-family: Roboto, serif;
  font-size: 1.1rem;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    background-color: var(--button-show-more-hover, #dc7700);
  }
  &:active {
    cursor: pointer;
    background-color: #5b2e00;
  }
`;