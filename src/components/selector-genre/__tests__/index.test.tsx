import '@testing-library/jest-dom';

import SelectorGenre from '@components/selector-genre';
import { expect } from '@jest/globals';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';

afterEach(cleanup);

test('Logo test', () => {
  const { getByDisplayValue } = renderWithStore(<SelectorGenre />);
  const radio = getByDisplayValue(/Action/i);
  expect(radio).toBeTruthy();
  fireEvent.click(radio);
});
