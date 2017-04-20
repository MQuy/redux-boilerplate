const extractStyleLoader = require('./extract-style-loader');
const fontAwesomeConfig = require('./font-awesome.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
fontAwesomeConfig.styleLoader = extractStyleLoader(ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader!less-loader'
}))
module.exports = fontAwesomeConfig;
