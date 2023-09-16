import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';
import ButtonShowMore from '@components/button-show-more';
import { expect } from '@jest/globals';

afterEach(cleanup);

test('ButtonShowMore test', () => {
  let count = 0;
  const { getByText } = render(
    <ButtonShowMore
      display="block"
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
