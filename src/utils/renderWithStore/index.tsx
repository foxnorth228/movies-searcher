import { store } from '@src/store';
import { render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

export const wrapProvider = (node: ReactNode) => <Provider store={store}>{node}</Provider>;
const renderWithStore = (node: ReactNode) => {
  return render(wrapProvider(node));
};

export default renderWithStore;
