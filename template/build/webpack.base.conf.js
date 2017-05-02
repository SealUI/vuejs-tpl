var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require("webpack");
const pkg = require('../package.json')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var publicPath;
if(process.env.NODE_ENV === 'production'){
  publicPath = config.build.assetsPublicPath
}else if(process.env.NODE_ENV === 'demo'){
  publicPath = config.demo.assetsPublicPath
}else if(process.env.NODE_ENV === 'qa'){
  publicPath = config.qa.assetsPublicPath
}else{
  publicPath = config.dev.assetsPublicPath
}
var banner = [
  pkg.name + ' v'+pkg.version,
  ' Author    : '+pkg.author,
  ' Copyright : '+new Date().getFullYear()+' Speiyou'
  ].join('\n');

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: publicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      {{#if_eq build "standalone"}}
      'vue$': 'vue/dist/vue.esm.js',
      {{/if_eq}}
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {{#lint}}
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {{/lint}}
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
      new webpack.BannerPlugin(banner)
  ]
}
