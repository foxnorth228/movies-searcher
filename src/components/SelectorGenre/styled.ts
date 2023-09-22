import { styled } from 'styled-components';

export const SelectorGenre = styled.section`
  width: 100%;
  padding: 0.6rem 0;
  border-top: 1px solid var(--selector-genre-border, #cfcfcf);
  border-bottom: 1px solid var(--selector-genre-border, #cfcfcf);
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

export const SelectorGenre__Label = styled.label`
  color: var(--selector-genre-text, black);
  padding: 0.33rem 1rem;
  background-color: var(--selector-genre, #f0f0f0);
  border: 1px solid #d8d8d8;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  margin: 0.25rem;
  &:hover {
    cursor: pointer;
    background-color: var(--selector-genre-hover, #d8d8d8);
  }
  ${SelectorGenre__Radio}:checked + & {
    background-color: var(--selector-genre-selected, black);
    color: var(--selector-genre-selected-text, white);
  }
`;
