var ExtractTextPlugin = require("extract-text-webpack-plugin");
import webpackConfig from "./webpack.dev"

const karmaConfig = {
  basePath: "../",
  frameworks: ["mocha", "chai", "sinon"],
  files: [
    "node_modules/whatwg-fetch/fetch.js",
    "node_modules/babel-polyfill/dist/polyfill.js",
    "tests/testHelper.js",
    "tests/**/*.spec.js"
  ],
  preprocessors: {
    "tests/testHelper.js": ["webpack"],
    "tests/**/*.spec.js": ["webpack", "coverage"]
  },
  browsers: ["PhantomJS"],
  webpack: {
    devtool: webpackConfig.devtool,
    resolve: webpackConfig.resolve,
    module:  webpackConfig.module,
    plugins: [
      new ExtractTextPlugin("[name].css", { allChunks: true })
    ],
    node : { fs: "empty" },
    externals: {
      "react/addons": true,
      "react/lib/ExecutionEnvironment": true,
      "react/lib/ReactContext": true
    }
  },
  webpackMiddleware: {
    noInfo: true,
    stats: {
      colors: true
    }
  },
  reporters: ["mocha", "coverage"],
  singleRun: false,
  plugins: [
    require("karma-mocha"),
    require("karma-phantomjs-launcher"),
    require("karma-chrome-launcher"),
    require("karma-webpack"),
    require("karma-chai"),
    require("karma-coverage"),
    require("karma-mocha-reporter"),
    require("karma-sinon")
  ]
}

module.exports = (config) => config.set(karmaConfig)
