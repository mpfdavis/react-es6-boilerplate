const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const viewtags = require('./webpack.viewtags.js');

module.exports = {
  devtool: 'eval',
  entry: [
    path.join(__dirname, '../../app/main')
  ],
  output: {
    path: path.join(__dirname, '../../../build'),
    filename: 'assets/scripts-dev.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ExtractTextPlugin('assets/styles-dev.css'),
    function () { this.plugin('done', viewtags); }
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/i,
        exclude: [/node_modules/],
        loaders: ['babel'],
        include: path.join(__dirname, '../../app')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'postcss'])
      },
      {
        test: /\.json$/i,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        loader: 'file?name=assets/images/[name]-[hash:8].[ext]!image?optimizationLevel=7&bypassOnDebug'
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/i,
        loader: 'file?name=assets/fonts/[name]-[hash:8].[ext]'
      }
    ]
  },
  postcss: function () {
    return [
      require('precss'),
      require("postcss-cssnext")(),
      require("postcss-reporter")()
    ]
  }
};



