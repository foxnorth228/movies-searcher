import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Searcher from '@components/searcher';
import { Provider } from 'react-redux';
import { store } from '@src/store';
import { server } from '@src/setupTests';

afterEach(cleanup);

test('Logo test', () => {
  const { getByDisplayValue, getByPlaceholderText } = render(
    <Provider store={store}>
      <Searcher className={''} />
    </Provider>
  );
  const input = getByPlaceholderText(/Search.../i);
  expect(input).toBeTruthy();
  const testValue = 'TestValue';
  fireEvent.input(input, { target: { value: testValue } });
  const changedInput = getByDisplayValue(testValue);
  expect(changedInput).toBeTruthy();
});
