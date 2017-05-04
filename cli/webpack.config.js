const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackConditionAsset = require('html-webpack-condition-assets');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const InlineChunkWebpackPlugin = require('html-webpack-inline-chunk-plugin');
const rootPath = path.join(__dirname, '../');

module.exports = {
  name: 'client',
  target: 'web',
  context: path.join(rootPath, '/src'),

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.html'],
    alias: {
      $root: path.join(rootPath, "/src")
    }
  },

  module: {
    rules: [{
      test: /\.txt$/,
      loader: 'raw-loader',
    }, {
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }, {
            loader: 'sass-loader'
          }, {
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
      use: [
        {
          loader: 'file-loader?limit=10000&mimetype=image/svg+xml'
        }, {
          loader: 'svgo-loader',
          options: {
            plugins: [
              { cleanupIDs: false }
            ]
          }
        }
      ]
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?name=[path][name].[ext]'
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      async: 'commonlazy',
      children: true,
      minChunks: 2
    }),
    new InlineChunkWebpackPlugin({
      inlineChunks: ['manifest']
    }),
    new HtmlWebpackConditionAsset({
      assets: [{
        chunkName: 'polyfills',
        condition: `!('fetch' in window && 'Promise' in window && 'assign' in Object && 'keys' in Object)`
      }]
    }),
    new ExtractTextPlugin("[name]-[contenthash].css"),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      favicon: 'static/favicon.ico',
      title: 'Redux Boilerplate',
      inject: 'body',
      minify: {
        html5: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: false,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributese: true,
        useShortDoctype: true
      }
    }),
    new PreloadWebpackPlugin({
      rel: 'prefetch',
      as: 'script',
      include: ['NotFound']
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'script',
      include: ['vendor', 'app'],
      fileBlacklist: [/\.map\./, /\.css$/]
    }),
    new CopyWebpackPlugin([
      { from: 'static' }
    ]),
    new SWPrecacheWebpackPlugin({
      cacheId: 'redux-boilerplate',
      filename: 'service-worker.js',
      navigateFallback: 'index.html',
      mergeStaticsConfig: true,
      staticFileGlobsIgnorePatterns: [/\.icns/, /\.txt/, /\.scss/, /\.gitkeep/]
    })
  ]
}
