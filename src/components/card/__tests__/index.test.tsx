import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent, waitFor } from '@testing-library/react';
import Card from '@components/card';
import renderWithStore, { wrapProvider } from '@utils/renderWithStore';
import { expect } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import { act } from 'react-test-renderer';

afterEach(cleanup);

test('Logo test', async () => {
  const { rerender, getByText, getByAltText, queryAllByText } = renderWithStore(<Card info={{ id: 'skip' }} />);
  const skeleton = queryAllByText(/skeleton loader/i);
  expect(skeleton.length).toBeTruthy();
  rerender(wrapProvider(<Card info={{ id: 'test' }} />));
  const image = getByAltText('movie-image') as HTMLImageElement;
  expect(image).toBeTruthy();
  await act(() => {
    fireEvent.load(image);
  });
  expect(image.src).toBeTruthy();
  await waitFor(() => expect(getByText(/Title/i)).toBeTruthy());
  const title = getByText(/Title/i);
  expect(title).toBeTruthy();
  await act(async () => {
    await userEvent.click(image);
  });
});
