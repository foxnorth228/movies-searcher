module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "\\.[jt]sx?$": "babel-jest"
  },
  extensionsToTreatAsEsm: ['.jsx', '.ts', '.tsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    '\\.(css|scss)$': 'identity-obj-proxy'
  }
};
