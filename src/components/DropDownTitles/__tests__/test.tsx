import '@testing-library/jest-dom';

import { expect } from '@jest/globals';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';

import DropDownTitles from '../index';
import { testCount, testValue } from './config';

afterEach(cleanup);

test('DropDownTitles test', async () => {
  const data = new Array(testCount).fill(testValue);
  const { getAllByText } = renderWithStore(<DropDownTitles data={data} />);
  const elems = getAllByText(testValue);
  expect(elems).toHaveLength(testCount);
  fireEvent.mouseDown(elems[testCount - testCount]);
});
