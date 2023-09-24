import '@testing-library/jest-dom';

import { expect, jest } from '@jest/globals';
import { cleanup, fireEvent, render } from '@testing-library/react';
import renderWithStore, { wrapProvider } from '../../../utils/renderWithStore';
import React from 'react';
import ErrorBoundary from '../index';

afterEach(cleanup);

const TestComponent = () => {
  throw new Error('test error');
};

test('ErrorBoundary test', async () => {
  jest.spyOn(console, 'error').mockImplementation(() => null);
  jest.spyOn(console, 'log').mockImplementation(() => null);
  const { rerender } = renderWithStore(<ErrorBoundary>null</ErrorBoundary>);
  rerender(
    wrapProvider(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    )
  );
});
