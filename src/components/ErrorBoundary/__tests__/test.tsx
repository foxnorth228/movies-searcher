import '@testing-library/jest-dom';

import { expect, jest } from '@jest/globals';
import { cleanup } from '@testing-library/react';
import React from 'react';

import renderWithStore, { wrapProvider } from '../../../utils/renderWithStore';
import ErrorBoundary from '../index';
import { errorMessage, TestComponent } from '../TestComponent';

afterEach(cleanup);

test('ErrorBoundary test', async () => {
  jest.spyOn(console, 'error').mockImplementation(() => null);
  jest.spyOn(console, 'log').mockImplementation(() => null);
  const { getByText, rerender } = renderWithStore(<ErrorBoundary>null</ErrorBoundary>);
  rerender(
    wrapProvider(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    )
  );
  const error = getByText(errorMessage);
  expect(error).toBeInTheDocument();
});
