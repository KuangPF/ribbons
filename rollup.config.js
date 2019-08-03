import typescript from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

const ENV = process.env.NODE_ENV
module.exports = {
  input: 'src/index.ts',
  output: {
    name: 'Ribbons',
    file: 'dist/index.js',
    format: 'umd'
  },
  plugins: [
    typescript(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    ENV === 'production' &&
      terser({
        exclude: ['node_modules/**']
      })
  ],
  watch: {
    exclude: ['node_modules/**']
  }
}
