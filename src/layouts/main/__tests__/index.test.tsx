import '@testing-library/jest-dom';

import Main from '@src/layouts/main';
import { cleanup } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';

afterEach(cleanup);

test('Logo test', () => {
  renderWithStore(<Main />);
});
