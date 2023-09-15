import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@src/store';
import { render } from '@testing-library/react';

export const wrapProvider = (node: ReactNode) => <Provider store={store}>{node}</Provider>;
const renderWithStore = (node: ReactNode) => {
  return render(wrapProvider(node));
};

export default renderWithStore;
