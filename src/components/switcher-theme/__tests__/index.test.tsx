import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import switcherTheme from '@components/switcher-theme';
import SwitcherTheme from '@components/switcher-theme';
import { Provider } from 'react-redux';
import { store } from '@src/store';

afterEach(cleanup);

test('Logo test', () => {
  const { getByText } = render(
    <Provider store={store}>
      <SwitcherTheme />
    </Provider>
  );
});
