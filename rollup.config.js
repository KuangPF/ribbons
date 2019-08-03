import typescript from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel'

module.exports = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm'
  },
  plugins: [
    typescript(),
    babel({
      babelrc: false,
      presets: [['@babel/preset-env', { modules: false }]],
      plugins: [
        [
          '@babel/plugin-transform-classes',
          {
            loose: true
          }
        ]
      ]
    })
  ],
  watch: {
    exclude: ['node_modules/**']
  }
}
