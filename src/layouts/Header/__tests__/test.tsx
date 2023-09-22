import '@testing-library/jest-dom';

import Header from '@layouts/Header';
import { cleanup } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';

afterEach(cleanup);

test('Logo test', () => {
  renderWithStore(<Header />);
});
