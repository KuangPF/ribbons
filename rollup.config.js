import typescript from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

module.exports = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm'
  },
  plugins: [
    typescript(),
    babel(),
    terser({
      exclude: ['node_modules/**']
    })
  ],
  watch: {
    exclude: ['node_modules/**']
  }
}
