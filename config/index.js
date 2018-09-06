const path =  require('path')

module.exports = {
  entry: path.resolve(__dirname, '../client/main'),
  output: path.resolve(__dirname, '../dist')
}
