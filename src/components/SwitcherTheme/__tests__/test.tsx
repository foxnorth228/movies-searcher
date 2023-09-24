import '@testing-library/jest-dom';

import SwitcherTheme from '@components/SwitcherTheme';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';
import { input } from '../config';

afterEach(cleanup);

test('SwitcherTheme test', () => {
  const { getByDisplayValue } = renderWithStore(<SwitcherTheme />);
  const switcher = getByDisplayValue(input.value);
  fireEvent.click(switcher);
});
