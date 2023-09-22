import '@testing-library/jest-dom';

import Header from '@src/layouts/header';
import { cleanup } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';

afterEach(cleanup);

test('Logo test', () => {
  renderWithStore(<Header />);
});
