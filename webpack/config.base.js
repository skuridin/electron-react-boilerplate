'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '..', 'src'),
  entry: ['./entry'],
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'assets/bundle.js',
    publicPath: ''
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '..', 'src'),
        loader: 'babel'
      }
    ]
  }
};
