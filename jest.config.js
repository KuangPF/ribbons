module.exports = {
  verbose: true,
  roots: ['<rootDir>'],
  cache: false,
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./__setups__/canvas.ts', 'jest-canvas-mock'],
  coverageDirectory: '<rootDir>/__test__/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/test/', '/__tests__/'],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  collectCoverageFrom: ['src/**/*.{ts,js}']
}