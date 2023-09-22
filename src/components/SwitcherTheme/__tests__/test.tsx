import '@testing-library/jest-dom';

import { cleanup, fireEvent } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';
import SwitcherTheme from '@components/SwitcherTheme';

afterEach(cleanup);

test('Logo test', () => {
  const { getByDisplayValue } = renderWithStore(<SwitcherTheme />);
  const switcher = getByDisplayValue('theme');
  fireEvent.click(switcher);
});
