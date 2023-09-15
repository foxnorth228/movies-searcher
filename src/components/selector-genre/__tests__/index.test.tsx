import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent } from '@testing-library/react';
import SelectorGenre from '@components/selector-genre';
import renderWithStore from '@utils/renderWithStore';
import { expect } from '@jest/globals';

afterEach(cleanup);

test('Logo test', () => {
  const { getByDisplayValue } = renderWithStore(<SelectorGenre />);
  const radio = getByDisplayValue(/Action/i);
  expect(radio).toBeTruthy();
  fireEvent.click(radio);
});
