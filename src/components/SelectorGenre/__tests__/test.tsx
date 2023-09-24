import '@testing-library/jest-dom';

import SelectorGenre from '@components/SelectorGenre';
import { expect } from '@jest/globals';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';
import { genres } from '../config';

afterEach(cleanup);

test('SelectorGenre test', () => {
  const { getByDisplayValue } = renderWithStore(<SelectorGenre />);
  const radio = getByDisplayValue(genres.action);
  expect(radio).toBeTruthy();
  fireEvent.click(radio);
});
