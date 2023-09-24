import { DefaultTheme, styled } from 'styled-components';

export const DropDownTitles = styled.ul<DefaultTheme & { $size: number }>`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(
    ${(props) => props.$size},
    ${({ theme }) => theme.fontSizes.searcherHeight}
  );
  align-items: center;
  margin: ${({ theme }) => theme.fontSizes.searcherHeight} 0 0 0;
  position: absolute;
  z-index: 2;
  background-color: white;
  border: 2px solid #c4c4c4;
  list-style-type: none;
  padding-left: 0;
`;

export const DropDownTitles__Element = styled.li<DefaultTheme>`
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: inherit;
  color: black;
  line-height: ${({ theme }) => theme.fontSizes.searcherHeight};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.searcherBackground};
  }
  &:active {
    background-color: #6b6b6b;
  }
`;
