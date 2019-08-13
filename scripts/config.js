const path = require('path')
const typescript = require('rollup-plugin-typescript2')
const babel = require('rollup-plugin-babel')
const version = process.env.VERSION || require('../package.json').version
const ENV = process.env.NODE_ENV

// prettier-ignore
const banner =
  '/*!\n' +
  ` * Ribbons.js v${version}\n` +
  ` * (c) ${new Date().getFullYear()} KuangPF\n` +
  ' * Released under the MIT License.\n' +
  ' */'

const resolve = p => path.resolve(__dirname, '../', p)

const builds = {
  'web-full-prod': {
    entry: resolve('src/index.ts'),
    dest: resolve('dist/ribbons.min.js'),
    format: 'umd',
    env: 'production',
    plugins: [typescript(), babel()],
    moduleName: 'Ribbons',
    banner
  },
  'web-full-dev': {
    entry: resolve('src/index.ts'),
    dest: resolve('dist/ribbons.js'),
    format: 'umd',
    env: 'development',
    plugins: [typescript(), babel()],
    moduleName: 'Ribbons',
    banner
  },
  'web-full-esm': {
    entry: resolve('src/index.ts'),
    dest: resolve('dist/ribbons.esm.js'),
    format: 'esm',
    plugins: [typescript(), babel()],
    banner
  }
}

function genConfig(name) {
  const opts = builds[name]
  const config = {
    input: opts.entry,
    plugins: opts.plugins || [],
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName || 'Ribbons'
    },
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    }
  }
  Object.defineProperty(config, '_name', {
    enumerable: false,
    value: name
  })

  return config
}

if (process.env.TARGET) {
  module.exports = genConfig(process.env.TARGET)
} else {
  exports.getBuild = genConfig
  exports.getAllBuilds = () => Object.keys(builds).map(genConfig)
}
