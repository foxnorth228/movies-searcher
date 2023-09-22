import '@testing-library/jest-dom';

import Logo from '@components/Logo';
import { cleanup, render } from '@testing-library/react';
import React from 'react';

afterEach(cleanup);

test('Logo test', () => {
  const { getByText } = render(<Logo />);
  expect(getByText(/ModsenFilms/i)).toBeTruthy();
});
