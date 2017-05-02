// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var localIP = require('my-local-ip')()
var viewSVN = __dirname;
var resSVN = __dirname;

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(viewSVN, '../dist/index.html'),
    assetsRoot: path.resolve(resSVN, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  qa: {
    env: require('./qa.env'),
    index: path.resolve(viewSVN, '../dist/index.html'),
    assetsRoot: path.resolve(resSVN, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  demo: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    hostname: localIP,
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
