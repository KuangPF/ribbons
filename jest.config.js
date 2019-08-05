module.exports = {
  verbose: true,
  roots: ['<rootDir>'],
  cache: false,
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./__setups__/canvas.ts', 'jest-canvas-mock']
}
