module.exports = {
  testEnvironment: 'jest-environment-jsdom',

  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  moduleFileExtensions: ['js', 'jsx'],

  testMatch: ['**/src/tests/**/*.test.js', '**/src/tests/**/*.test.jsx'],

  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};