import '@testing-library/jest-dom';

import globalConfig from '@constants/global.config';
import { jest } from '@jest/globals';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  rest.get(globalConfig.DOMAIN_URL, () => {
    console.log('xxx');
  }),
  rest.get(`${globalConfig.DOMAIN_URL}/AdvancedSearch/*`, (req, res, ctx) => {
    const count = req.url.searchParams.get('count');
    const num = parseInt(count ?? '') ?? 250;
    if (num === 3 * 16) {
      return res(
        ctx.json({
          errorMessage: 'test error',
        })
      );
    }
    return res(
      ctx.json({
        results: Array(num)
          .fill(0)
          .map((_, i) => {
            return { id: `test${i}` };
          }),
      })
    );
  }),
  rest.get(`${globalConfig.DOMAIN_URL}/Title/:key/:movieId/*`, (req, res, ctx) => {
    const { movieId } = req.params;
    const num = movieId.slice(4);
    return res(
      ctx.json({
        id: movieId,
        title: `Title${num}`,
        year: 'year',
        image: './test-image.webp',
        directors: 'Director',
        trailer: '',
      })
    );
  }),
  rest.get(globalConfig.DOMAIN_URL, (_req, res, ctx) => {
    return res(ctx.json('{}'));
  }),
];

export const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

class IntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.spyOn(window, 'alert').mockImplementation(() => {});
