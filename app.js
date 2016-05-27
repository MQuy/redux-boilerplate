var webpack = require('webpack');
var historyApiFallback = require('connect-history-api-fallback')
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpackConfig = require('./webpack/webpack.config');
var express = require("express");
var path = require("path");

var app = express();
var compiler = webpack(webpackConfig);

app.set('port', (process.env.PORT || 3005));

app.use(historyApiFallback());

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    children: false,
  },
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, '/src/static')));

app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
})
