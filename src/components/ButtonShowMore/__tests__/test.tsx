import '@testing-library/jest-dom';

import { expect } from '@jest/globals';
import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import ButtonShowMore from 'src/components/ButtonShowMore';

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
