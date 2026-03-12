module.exports = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  moduleFileExtensions: ['js', 'jsx'],

  testMatch: ['**/src/tests/**/*.test.js', '**/src/tests/**/*.test.jsx'],

  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};
