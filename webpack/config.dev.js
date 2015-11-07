'use strict';

const config = require('./config.base');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

config.devtool = 'eval';

config.plugins.push(
  new webpack.NoErrorsPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new HtmlPlugin()
);

config.module.loaders.push({
  test: /\.css$/,
  loader: 'style!css'
});

config.devServer = {
  hot: true,
  inline: true,
  historyApiFallback: true,
  noInfo: true,
  host: '0.0.0.0',
  port: '3000'
};

module.exports = config;
