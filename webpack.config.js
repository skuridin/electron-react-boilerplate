'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: ['webpack-hot-middleware/client', './app.js'],
  externals: ['electron'],
  output: {
    path: path.join(__dirname, 'dist'),
    'filename': 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'layout.html'),
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
        include: path.join(__dirname, 'src'),
      },
    ],
  },
};
