'use strict';

const config = require('./config.base');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

config.plugins.push(
  new HtmlPlugin({
    minify: { collapseWhitespace: true }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.UglifyJsPlugin({ warnings: false }),
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
