import '@testing-library/jest-dom';

import ButtonShowMore from '@components/ButtonShowMore';
import { expect } from '@jest/globals';
import { cleanup, fireEvent } from '@testing-library/react';
import React from 'react';

import renderWithStore from '../../../utils/renderWithStore';

afterEach(cleanup);

test('ButtonShowMore test', () => {
  let count = 0;
  const { getByText } = renderWithStore(
    <ButtonShowMore
      isDisplayed={true}
      moveNextPage={() => {
        count += 1;
      }}
    />
  );
  const button = getByText(/Show more/i);
  expect(button).toBeTruthy();
  fireEvent.click(button);
  expect(count).toEqual(1);
});
