module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "\\.[jt]sx?$": "babel-jest"
  },
  extensionsToTreatAsEsm: ['.jsx', '.ts', '.tsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    "^@src(.*)$": "<rootDir>/src$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@store(.*)$": "<rootDir>/src/store$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts",
  ]
};
