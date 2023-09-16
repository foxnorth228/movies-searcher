import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent } from '@testing-library/react';
import Searcher from '@components/searcher';
import { expect } from '@jest/globals';
import renderWithStore from '@utils/renderWithStore';
import { css } from 'styled-components';

afterEach(cleanup);

test('Logo test', () => {
  const { getByTestId, getByDisplayValue, getByPlaceholderText } = renderWithStore(
    <Searcher className={css``} />
  );
  const input = getByPlaceholderText(/Search.../i);
  expect(input).toBeTruthy();
  const testValue = 'TestValue';
  fireEvent.input(input, { target: { value: testValue } });
  const changedInput = getByDisplayValue(testValue);
  expect(changedInput).toBeTruthy();
  fireEvent.keyUp(input);
  fireEvent.keyUp(input, { key: 'Enter', code: 'Enter', charCode: 13 });
  const label = getByTestId(/searcher-label/i);
  fireEvent.click(label);
});
