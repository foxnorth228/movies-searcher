export const errorMessage = 'test error';
export const TestComponent = () => {
  throw new Error(errorMessage);
};
