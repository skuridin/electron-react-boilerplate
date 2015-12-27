'use strict';

const baseConfig = require('./webpack.config.base');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = baseConfig.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
    },
  }),
  new ExtractTextPlugin('styles.css'),
]);

const loaders = baseConfig.module.loaders.concat([
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('css'),
  },
  {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract('css!less'),
    include: path.join(__dirname, 'src'),
  },
]);

module.exports = Object.assign({}, baseConfig, {
  devtool: 'source-map',
  entry: ['./app.js'],
  plugins,
  module: {
    loaders,
  },
});
