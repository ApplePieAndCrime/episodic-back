'use strict';

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: '../coverage',
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/$1',
    '^@src(.*)$': '<rootDir>/src/$1',
    '^@lib(.*)$': '<rootDir>/src/lib/$1',
  },
};
