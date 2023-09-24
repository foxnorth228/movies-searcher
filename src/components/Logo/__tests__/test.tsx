import '@testing-library/jest-dom';

import { expect } from '@jest/globals';
import Logo from '@components/Logo';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { logoTitle } from '../config';

afterEach(cleanup);

test('Logo test', () => {
  const { getByText } = render(<Logo />);
  expect(getByText(logoTitle)).toBeTruthy();
});
