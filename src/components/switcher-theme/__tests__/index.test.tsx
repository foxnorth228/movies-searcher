import '@testing-library/jest-dom';

import SwitcherTheme from '@components/switcher-theme';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';

afterEach(cleanup);

test('Logo test', () => {
  const { getByDisplayValue } = renderWithStore(<SwitcherTheme />);
  const switcher = getByDisplayValue('theme');
  fireEvent.click(switcher);
});
