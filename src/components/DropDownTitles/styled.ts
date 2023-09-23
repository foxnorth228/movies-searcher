import { styled } from 'styled-components';

export const DropDownTitles = styled.ul<{ $size: number }>`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(${(props) => props.$size}, var(--searcher-height, 2rem));
  margin: var(--searcher-height, 2rem) 0 0 0;
  position: absolute;
  z-index: 2;
  background: white;
`;
