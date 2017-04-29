const webpack = require('webpack')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const rootPath = path.join(__dirname, '../');
const webpackConfig = require('./webpack.config');

webpackConfig.devtool = false;

webpackConfig.stats = {
  children: false
};

webpackConfig.entry = {
  app: [
    './main.js'
  ],
  vendor: [
    'react',
    'react-dom',
    'prop-types',
    'react-redux',
    'react-router',
    'redux',
    'whatwg-fetch',
    'simplestorage.js',
    'inflection',
    'bootstrap-loader/extractStyles',
    'font-awesome-webpack!../cli/theme/font-awesome.config.prod.js'
  ]
};

webpackConfig.output = {
  filename: "[name]-[chunkhash].js",
  path: path.join(rootPath, "/publish"),
  publicPath: './'
};

webpackConfig.module.rules.push(
  {
    test: /\.(js|jsx)$/,
    include: path.join(rootPath, 'src'),
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      babelrc: false,
      presets: ["es2015", "react", "stage-0", "react-optimize"],
      plugins: [
        "transform-runtime",
        "transform-decorators-legacy"
      ]
    }
  }
);

webpackConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false
    }
  }),
  new OptimizeCssAssetsPlugin({
    cssProcessor: require('cssnano')
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
  new BundleAnalyzerPlugin({
    analyzerMode: 'static'
  })
);

module.exports = webpackConfig;
