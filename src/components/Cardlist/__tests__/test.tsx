import '@testing-library/jest-dom';

import CardList from '@components/Cardlist';
import { expect } from '@jest/globals';
import { cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';
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
