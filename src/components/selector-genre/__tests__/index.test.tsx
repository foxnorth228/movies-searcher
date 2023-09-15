import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import SelectorGenre from '@components/selector-genre';
import { Provider } from 'react-redux';
import { store } from '@src/store';

afterEach(cleanup);

test('Logo test', () => {
  const { getByText } = render(
    <Provider store={store}>
      <SelectorGenre />
    </Provider>
  );
});
