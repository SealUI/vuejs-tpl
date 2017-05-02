require('./check-versions')()

process.env.NODE_ENV = 'demo'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.demo.conf')

var spinner = ora('开始构建 [演示环境]...')
spinner.start()

rm(path.join(config.demo.assetsRoot, config.demo.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  演示环境构建完成.\n'))
    console.log(chalk.yellow(
      '  提示: 非开发环境，请发布到线上环境进行测试.\n'
    ))
  })
})
