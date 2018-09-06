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
