import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import Footer from '@src/layouts/footer';

afterEach(cleanup);

test('Logo test', () => {
  render(<Footer />);
});
