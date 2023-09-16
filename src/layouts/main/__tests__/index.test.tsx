import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import Main from '@src/layouts/main';
import renderWithStore from '@utils/renderWithStore';

afterEach(cleanup);

test('Logo test', () => {
  renderWithStore(<Main />);
});
