'use strict';

const config = require('./config.base');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

config.devtool = 'eval';

config.plugins.push(
  new webpack.NoErrorsPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new HtmlPlugin({
    template: path.join(__dirname, '..', 'src', 'template.html')
  })
);

config.module.loaders.push(
  {
    test: /\.css$/,
    loader: 'style!css'
  },
  {
    test: /\.scss$/,
    loader: 'style!css!sass'
  }
);

config.devServer = {
  hot: true,
  inline: true,
  historyApiFallback: true,
  noInfo: true,
  host: '0.0.0.0',
  port: '3000'
};

module.exports = config;
