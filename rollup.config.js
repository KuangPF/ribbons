import typescript from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
const version = process.env.VERSION || require('./package.json').version

const banner =
  '/*!\n' +
  ` * Ribbons.js v${version}\n` +
  ` * (c) ${new Date().getFullYear()} KuangPF\n` +
  ' * Released under the MIT License.\n' +
  ' * @license MIT'
  ' */'
const ENV = process.env.NODE_ENV

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      banner,
      name: 'Ribbons',
      file: 'dist/ribbons.js',
      format: 'umd'
    },
    { 
      banner,
      file: 'dist/ribbons.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    typescript(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    ENV === 'production' &&
      terser({
        output: {
          comments: function(node, comment) {
            var text = comment.value;
            var type = comment.type;
            console.log(type)
            if (type == "comment2") {
              // multiline comment
              return /@preserve|@license|@cc_on/i.test(text);
            }
          }
        },
        exclude: ['node_modules/**']
      })
  ],
  watch: {
    exclude: ['node_modules/**']
  }
}
