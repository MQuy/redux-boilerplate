var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var rootPath = path.join(__dirname, '../');

module.exports = {
  name: 'client',
  target: 'web',
  devtool: 'eval',
  context: path.join(rootPath, '/src'),

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.html'],
    alias: { $root: path.join(rootPath, "/src") }
  },

  entry: {
    app: [
      'webpack-hot-middleware/client',
      './main.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'history',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'whatwg-fetch',
      'lodash',
      'simplestorage.js',
      'inflection',
      'bootstrap-loader/extractStyles',
    ]
  },

  output: {
    filename: "[name].js",
    path: path.join(rootPath, "/dist"),
    publicPath: '/'
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.txt$/,
      loader: 'raw-loader',
    }, {
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules!sass-loader!postcss-loader')
    }, {
      test: /\.woff(\?.*)?$/,
      loader: 'url?name=[path][name].[ext]&mimetype=application/font-woff'
    }, {
      test: /\.woff2(\?.*)?$/,
      loader: 'url?name=[path][name].[ext]&mimetype=application/font-woff2'
    }, {
      test: /\.otf(\?.*)?$/,
      loader: 'file?&name=[path][name].[ext]&mimetype=font/opentype'
    }, {
      test: /\.ttf(\?.*)?$/,
      loader: 'url?&name=[path][name].[ext]&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?.*)?$/,
      loader: 'file?&name=[path][name].[ext]'
    }, {
      test: /\.svg(\?.*)?$/,
      loader: 'url?&name=[path][name].[ext]&mimetype=image/svg+xml'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?name=[path][name].[ext]'
    }]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: false,
      __DEBUG__: false,
      __PROD__: true,
      __INITIAL_STATE__: {},
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor'] }),
    new ExtractTextPlugin("[name].css", { allChunks: true }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      favicon: 'static/favicon.ico',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  ]
}
