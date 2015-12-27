'use strict';

const baseConfig = require('./webpack.config.base');
const path = require('path');
const webpack = require('webpack');

const plugins = baseConfig.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
]);

const loaders = baseConfig.module.loaders.concat([
  {
    test: /\.css$/,
    loaders: ['style', 'css'],
  },
  {
    test: /\.less$/,
    loaders: ['style', 'css', 'less'],
    include: path.join(__dirname, 'src'),
  },
]);

module.exports = Object.assign({}, baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: ['webpack-hot-middleware/client', './app.js'],
  plugins,
  module: {
    loaders,
  },
});
