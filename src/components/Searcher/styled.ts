import { TCssRule } from '@components/Searcher/types';
import { DefaultTheme, styled } from 'styled-components';

export const Searcher = styled.article<DefaultTheme & { $class: TCssRule }>`
  display: flex;
  width: 80%;
  max-width: 30rem;
  height: ${({ theme }) => theme.fontSizes.searcherHeight};
  background-color: white;
  ${(props) => props.$class};
  &:hover {
    background-color: ${(props) => props.theme.colors.searcherBackground};
  }
`;

export const Searcher__InputContainer = styled.div`
  display: flex;
  width: calc(100% - ${({ theme }) => theme.fontSizes.searcherIconSize});
  position: relative;
`;

export const Searcher__Input = styled.input`
  background-color: inherit;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 2px solid #c4c4c4;
  padding: calc(0.25 * 1rem) calc(0.75 * 1rem);
  font-size: 0.9rem;
`;

export const Searcher__Icon = styled.label`
  display: block;
  width: ${({ theme }) => theme.fontSizes.searcherIconSize};
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
