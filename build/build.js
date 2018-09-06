process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const webpack  =  require('webpack')
const {promisify} = require('util')
const config = require('../config/index')
const webpackConfig = require('./webpack.config')

const rmPromise = promisify(rm)
const webpackPromise = promisify(webpack)
const spinner  = ora('building ...')
spinner.start()

rmPromise(config.output).then(() => {
  return webpackPromise(webpackConfig)
}).then((stats) => {
  spinner.succeed('Build complete.\n')
}).catch(ex => {
  throw ex
})
