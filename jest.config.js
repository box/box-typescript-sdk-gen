/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  name: 'jest',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/(src|scripts)/**/?(*.)+(spec|test).ts?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  clearMocks: true,
};
        