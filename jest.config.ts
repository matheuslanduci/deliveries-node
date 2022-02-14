/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,

  coverageProvider: 'v8',

  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },

  moduleNameMapper: {    
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@auth/(.*)$': '<rootDir>/src/modules/auth/$1',
    '^@restaurants/(.*)$': '<rootDir>/src/modules/restaurants/$1',
    '^@clients/(.*)$': '<rootDir>/src/modules/clients/$1',
    '^@deliverymans/(.*)$': '<rootDir>/src/modules/deliverymans/$1',
  },
}
