const config = require('../config')

module.exports = {
  mode: 'development',
  entry: {
    client: config.entry
  },
  output: {
    path: config.output,
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '',
              outputPath: 'dist/',
              useRelativePath: true
            }
          }
        ]
      }
    ]
  }
}
