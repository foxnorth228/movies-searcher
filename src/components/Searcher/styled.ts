import { TCssRule } from '@components/Searcher/types';
import { styled } from 'styled-components';

export const Searcher = styled.article<{ $class: TCssRule }>`
  display: flex;
  width: 80%;
  max-width: 30rem;
  height: 2rem;
  background-color: white;
  --searcher-icon-size: 3rem;
  ${(props) => props.$class}
  &:hover {
    background-color: var(--searcher-background, #e8e8e8);
  }
`;

export const Searcher__Input = styled.input`
  background-color: inherit;
  box-sizing: border-box;
  width: calc(100% - var(--searcher-icon-size));
  height: 100%;
  border: 2px solid #c4c4c4;
  padding: calc(0.25 * 1rem) calc(0.75 * 1rem);
  font-size: 0.9rem;
`;

export const Searcher__Icon = styled.label`
  display: block;
  width: var(--searcher-icon-size);
  height: 100%;
  background: url('./search.svg') no-repeat center center;
  background-color: inherit;
  background-size: 60% 60%;
  border: 2px solid #c4c4c4;
  border-left: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #6b6b6b;
  }
`;
