import '@testing-library/jest-dom';

import Footer from '@src/layouts/footer';
import { cleanup, render } from '@testing-library/react';
import React from 'react';

afterEach(cleanup);

test('Logo test', () => {
  render(<Footer />);
});
