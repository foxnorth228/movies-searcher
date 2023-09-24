import '@testing-library/jest-dom';

import ButtonShowMore from '@components/ButtonShowMore';
import { expect } from '@jest/globals';
import { cleanup, fireEvent } from '@testing-library/react';
import React from 'react';

import renderWithStore, { wrapProvider } from '../../../utils/renderWithStore';
import { buttonTitle } from '../config';

afterEach(cleanup);

test('ButtonShowMore test', () => {
  let count = 0;
  const { getByText, rerender } = renderWithStore(
    <ButtonShowMore
      isDisplayed={true}
      moveNextPage={() => {
        count += 1;
      }}
    />
  );
  const button = getByText(buttonTitle);
  expect(button).toBeTruthy();

  fireEvent.click(button);
  expect(count).toEqual(1);
  rerender(
    wrapProvider(
      <ButtonShowMore
        isDisplayed={false}
        moveNextPage={() => {
          count += 1;
        }}
      />
    )
  );
});
