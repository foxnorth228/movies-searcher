import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import Header from '@src/layouts/header';
import renderWithStore from '@utils/renderWithStore';

afterEach(cleanup);

test('Logo test', () => {
  renderWithStore(<Header />);
});
