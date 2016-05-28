var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');
var rootPath = path.join(__dirname, '../');

module.exports = {
  name: 'client',
  target: 'web',
  devtool: null,
  context: path.join(rootPath, "/src"),

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.html'],
    alias: {
      $root: path.join(rootPath, "/src")
    }
  },

  stats: { children: false },

  entry: {
    app: [
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
    filename: "[name]-[chunkhash].js",
    path: path.join(rootPath, "/dist"),
    publicPath: '/'
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      include: path.join(rootPath, 'src'),
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        babelrc: false,
        presets: ["es2015", "react", "stage-0"],
        plugins: [
          "transform-runtime",
          "transform-decorators-legacy",
          "transform-react-remove-prop-types",
          "transform-react-constant-elements",
          "transform-react-inline-elements"
        ]
      }
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.txt$/,
      include: path.join(rootPath, 'src'),
      loader: 'raw-loader',
    }, {
      test: /\.(css|scss)$/,
      include: path.join(rootPath, 'src'),
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

  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      __DEV__: false,
      __DEBUG__: false,
      __PROD__: true,
      __INITIAL_STATE__: {},
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor'] }),
    new ExtractTextPlugin("[name]-[contenthash].css"),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      favicon: 'static/favicon.ico',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin([
      { from: 'static' }
    ])
  ]
}
