import '@testing-library/jest-dom';

import Card from 'src/components/Card';
import { expect } from '@jest/globals';
import { cleanup, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithStore, { wrapProvider } from '@utils/renderWithStore';
import React from 'react';
import { act } from 'react-test-renderer';

afterEach(cleanup);

test('Logo test', async () => {
  const { rerender, getByText, getByAltText, queryAllByText } = renderWithStore(
    <Card id={'skip'} />
  );
  const skeleton = queryAllByText(/skeleton loader/i);
  expect(skeleton.length).toBeTruthy();
  rerender(wrapProvider(<Card id={'test'} />));
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
