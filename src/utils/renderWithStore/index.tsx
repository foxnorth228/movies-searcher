import { store } from '@src/store';
import { render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import themeLight from '../themes/themeLight';

export const wrapProvider = (node: ReactNode) => (
  <ThemeProvider theme={themeLight}>
    <Provider store={store}>{node}</Provider>
  </ThemeProvider>
);
const renderWithStore = (node: ReactNode) => {
  return render(wrapProvider(node));
};

export default renderWithStore;
