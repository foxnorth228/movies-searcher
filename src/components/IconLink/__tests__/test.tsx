import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';
import renderWithStore from '../../../utils/renderWithStore';
import React from 'react';
import IconLink from '../index';

afterEach(cleanup);

test('IconLink test', async () => {
  const {} = renderWithStore(<IconLink iconPath="./__tests__/test-logo.svg" linkUrl={'/'} />);
});
