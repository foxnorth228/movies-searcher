import '@testing-library/jest-dom';

import { expect } from '@jest/globals';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';
import SelectorGenre from '@components/SelectorGenre';

afterEach(cleanup);

test('Logo test', () => {
  const { getByDisplayValue } = renderWithStore(<SelectorGenre />);
  const radio = getByDisplayValue(/Action/i);
  expect(radio).toBeTruthy();
  fireEvent.click(radio);
});
