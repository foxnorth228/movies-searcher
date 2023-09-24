import '@testing-library/jest-dom';

import Logo from '@components/Logo';
import { expect } from '@jest/globals';
import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { logoTitle } from '../config';

afterEach(cleanup);

test('Logo test', () => {
  const { getByText } = render(<Logo />);
  expect(getByText(logoTitle)).toBeTruthy();
});
