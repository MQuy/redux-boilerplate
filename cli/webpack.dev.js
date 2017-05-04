var webpack = require('webpack');
var path = require('path');
var rootPath = path.join(__dirname, '../');
var webpackConfig = require('./webpack.config');

webpackConfig.devtool = 'eval';

webpackConfig.entry = {
  app: [
    'webpack-hot-middleware/client',
    './main.js'
  ],
  vendor: [
    'react',
    'react-dom',
    'prop-types',
    'react-redux',
    'react-router',
    'redux',
    'simplestorage.js',
    'inflection',
    'bootstrap-loader/extractStyles',
    'font-awesome-webpack!../cli/theme/font-awesome.config.js'
  ],
  polyfills: [
    'babel-polyfill',
    'whatwg-fetch'
  ]
};

webpackConfig.output = {
  filename: "[name].js",
  path: path.join(rootPath, "/web"),
  publicPath: '/'
};

webpackConfig.module.rules.push(
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loaders: ['react-hot-loader', 'babel-loader']
  }
);

webpackConfig.plugins.push(
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    __DEV__: false,
    __DEBUG__: false,
    __PROD__: true,
    __INITIAL_STATE__: {},
    'process.env': {
      'NODE_ENV': JSON.stringify('development'),
    },
  })
);

module.exports = webpackConfig;
