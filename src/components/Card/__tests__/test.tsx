import '@testing-library/jest-dom';

import Card from '@components/Card';
import { expect } from '@jest/globals';
import { cleanup, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithStore, { wrapProvider } from '@utils/renderWithStore';
import React from 'react';
import { act } from 'react-test-renderer';

import globalConfig from '../../../constants/global.config';
import { fallbackText, imageAlt } from '../config';

afterEach(cleanup);

test('Card test', async () => {
  const { rerender, getByText, getByAltText, queryAllByText } = renderWithStore(
    <Card id={globalConfig.DEFAULT_CARD_ID} />
  );
  const skeleton = queryAllByText(fallbackText);
  expect(skeleton.length).toBeTruthy();
  rerender(wrapProvider(<Card id={'test'} />));
  const image = getByAltText(imageAlt) as HTMLImageElement;
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
