const path = require('path')

const resolve = {
  extensions: ['.ts', '.tsx', '.js']
}
const publicPath = '/dist/'
const outputPath = path.resolve('./dist')

const babelOptions = {
  plugins: ['syntax-dynamic-import'],
  presets: ['@babel/preset-env']
}

const tsLoader = {
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: babelOptions
    },
    {
      loader: 'ts-loader'
    }
  ]
}

const clientConfig = {
  mode: 'development',
  entry: './src/client/index.ts',
  output: {
    path: outputPath,
    filename: 'client.bundle.js',
    publicPath
  },
  module: {
    rules: [tsLoader]
  },
  resolve
}

const serverConfig = {
  mode: 'development',
  entry: './src/server/index.ts',
  output: {
    path: outputPath,
    filename: 'server.bundle.js',
    publicPath
  },
  module: {
    rules: [tsLoader]
  },
  resolve
}

module.exports = [clientConfig, serverConfig]
