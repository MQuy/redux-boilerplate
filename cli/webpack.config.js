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
    extensions: ['.js', '.jsx', '.json', '.scss', '.html'],
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
      'prop-types',
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
      'font-awesome-webpack!../cli/theme/font-awesome.config.js'
    ]
  },

  output: {
    filename: "[name].js",
    path: path.join(rootPath, "/dist"),
    publicPath: '/'
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['react-hot-loader', 'babel-loader'],
    }, {
      test: /\.txt$/,
      loader: 'raw-loader',
    }, {
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?modules!sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')({ browsers: 'last 2 versions' })
                ];
              }
            }
          },
        ]
      })
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?name=[path][name].[ext]'
    }]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
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
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
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
