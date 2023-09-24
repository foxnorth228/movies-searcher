import '@testing-library/jest-dom';

import Searcher from '@components/Searcher';
import { expect } from '@jest/globals';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';
import { css } from 'styled-components';
import { input as dataInput, labelDataTestId } from '../config';
import { act } from 'react-test-renderer';

afterEach(cleanup);

test('Searcher test', async () => {
  const { getByTestId, getByDisplayValue, getByPlaceholderText } = renderWithStore(
    <Searcher cssRule={css``} />
  );
  const input = getByPlaceholderText(dataInput.placeholder);
  expect(input).toBeTruthy();
  fireEvent.focus(input);
  const testValue = 'TestValue';
  await act(async () => {
    fireEvent.input(input, { target: { value: testValue } });
    await new Promise((r) => setTimeout(r, 2000));
  });
  const changedInput = getByDisplayValue(testValue);
  expect(changedInput).toBeTruthy();
  act(() => {
    fireEvent.keyUp(input);
  });
  act(() => {
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter', charCode: 13 });
  });
  act(() => {
    fireEvent.focusOut(input);
  });
  const label = getByTestId(labelDataTestId);
  act(() => {
    fireEvent.click(label);
  });
});
