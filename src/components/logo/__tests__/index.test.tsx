import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import Logo from '@components/logo';

afterEach(cleanup);

test('Logo test', () => {
  const { getByText } = render(<Logo />);
  expect(getByText(/ModsenFilms/i)).toBeTruthy();
});
