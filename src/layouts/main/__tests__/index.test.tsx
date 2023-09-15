import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import Main from '@src/layouts/main';
import { Provider } from 'react-redux';
import { store } from '@src/store';

afterEach(cleanup);

test('Logo test', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
});
