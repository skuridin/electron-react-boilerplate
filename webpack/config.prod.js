'use strict';

const config = require('./config.base');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

config.plugins.push(
  new HtmlPlugin({
    minify: { collapseWhitespace: true },
    template: path.join(__dirname, '..', 'src', 'template.html')
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
  new ExtractTextPlugin('assets/style.css')
);

config.module.loaders.push(
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('css')
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css!sass')
  }
);

module.exports = config;
