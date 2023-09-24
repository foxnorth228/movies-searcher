import '@testing-library/jest-dom';

import { expect } from '@jest/globals';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';

import DropDownTitles from '../index';

afterEach(cleanup);

test('DropDownTitles test', async () => {
  const data = ['Title 1', 'Title 2', 'Title 3', 'Title 4'];
  const { getAllByText } = renderWithStore(<DropDownTitles data={data} />);
  const elems = getAllByText(/Title/i);
  expect(elems).toHaveLength(4);
  fireEvent.mouseDown(elems[0]);
});
