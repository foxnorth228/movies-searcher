import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent } from '@testing-library/react';
import SwitcherTheme from '@components/switcher-theme';
import renderWithStore from '@utils/renderWithStore';

afterEach(cleanup);

test('Logo test', () => {
  const { getByDisplayValue } = renderWithStore(<SwitcherTheme />);
  const switcher = getByDisplayValue('theme');
  fireEvent.click(switcher);
});
