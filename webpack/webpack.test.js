import webpackConfig from './webpack.config'

const karmaConfig = {
  basePath: '../',
  frameworks: ['mocha', 'chai', 'sinon'],
  files: [
    'tests/**/*.spec.js'
  ],
  preprocessors: {
    'tests/**/*.spec.js': ['webpack', 'coverage']
  },
  browsers: ['PhantomJS'],
  webpack: {
    devtool: webpackConfig.devtool,
    resolve: webpackConfig.resolve,
    module:  webpackConfig.module
  },
  webpackMiddleware: {
    noInfo: true,
    stats: {
      colors: true
    }
  },
  reporters: ['mocha', 'coverage'],
  singleRun: false,
  plugins: [
    require("karma-mocha"),
    require("karma-phantomjs-launcher"),
    require("karma-webpack"),
    require("karma-chai"),
    require("karma-coverage"),
    require("karma-mocha-reporter"),
    require("karma-sinon"),
    require("karma-sinon-chai")
  ]
}

module.exports = (config) => config.set(karmaConfig)
