import { styled } from 'styled-components';

export const DropDownTitles = styled.ul<{ $size: number }>`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(${(props) => props.$size}, var(--searcher-height, 2rem));
  align-items: center;
  margin: var(--searcher-height, 2rem) 0 0 0;
  position: absolute;
  z-index: 2;
  background-color: white;
  border: 2px solid #c4c4c4;
  list-style-type: none;
  padding-left: 0;
`;

export const DropDownTitles__Element = styled.li`
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: inherit;
  line-height: var(--searcher-height, 2rem);
  &:hover {
    cursor: pointer;
    background-color: var(--searcher-background, #e8e8e8);
  }
  &:active {
    background-color: #6b6b6b;
  }
`;
