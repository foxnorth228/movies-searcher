import '@testing-library/jest-dom';

import Main from '@layouts/Main';
import { cleanup } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';

afterEach(cleanup);

test('Main test', () => {
  renderWithStore(<Main />);
});
