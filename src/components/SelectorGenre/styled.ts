import { DefaultTheme, styled } from 'styled-components';

export const SelectorGenre = styled.section<DefaultTheme>`
  width: 100%;
  padding: 0.6rem 0;
  border-top: 1px solid ${(props) => props.theme.colors.selectorGenreBorder};
  border-bottom: 1px solid ${(props) => props.theme.colors.selectorGenreBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const SelectorGenre__Element = styled.div`
  display: inline-flex;
`;

export const SelectorGenre__Radio = styled.input`
  display: none;
`;

export const SelectorGenre__Label = styled.label<DefaultTheme>`
  color: ${(props) => props.theme.colors.selectorGenreText};
  padding: 0.33rem 1rem;
  background-color: ${(props) => props.theme.colors.selectorGenre};
  border: 1px solid #d8d8d8;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  margin: 0.25rem;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.selectorGenreHover};
  }
  ${SelectorGenre__Radio}:checked + & {
    background-color: ${(props) => props.theme.colors.selectorGenreSelected};
    color: ${(props) => props.theme.colors.selectorGenreSelectedText};
  }
`;
