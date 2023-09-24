import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';
import React from 'react';

import renderWithStore from '../../../utils/renderWithStore';
import IconLink from '../index';

afterEach(cleanup);

test('IconLink test', async () => {
  renderWithStore(<IconLink iconPath="./__tests__/test-logo.svg" linkUrl={'/'} />);
});
