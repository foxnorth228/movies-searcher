import '@testing-library/jest-dom';

import Footer from '@layouts/Footer';
import { cleanup } from '@testing-library/react';
import React from 'react';

import renderWithStore from '../../../utils/renderWithStore';

afterEach(cleanup);

test('Footer test', () => {
  renderWithStore(<Footer />);
});
