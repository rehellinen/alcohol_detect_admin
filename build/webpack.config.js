const config = require('../config')

module.exports = {
  mode: 'development',
  entry: {
    client: config.entry
  },
  output: {
    filename: '[name].js',
    path: config.output
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'all',
          minSize: 1,
          priority:  0
        },
        vendor: {
          name:  'vendor',
          test: /node_modules/,
          chunks: 'all',
          priority: 10
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
