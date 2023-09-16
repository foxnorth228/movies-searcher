import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent } from '@testing-library/react';
import CardList from '@components/cardlist';
import renderWithStore from '@utils/renderWithStore';
import { expect } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import { act } from 'react-test-renderer';

afterEach(cleanup);

test('Logo test', async () => {
  const { getByText } = renderWithStore(<CardList />);
  let button = getByText(/show more/i);
  expect(button).toBeTruthy();
  fireEvent.click(button);
  button = getByText(/show more/i);
  await act(async () => {
    await userEvent.click(button);
  });
  await act(async () => {
    await userEvent.click(button);
  });
});
