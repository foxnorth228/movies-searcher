import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import ButtonShowMore from '@components/button-show-more';

afterEach(cleanup);

test('ButtonShowMore test', () => {
  const { getByText } = render(
    <ButtonShowMore
      style={{}}
      moveNextPage={() => {
        return;
      }}
    />
  );
});
