const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './bundles'),
    filename:"webpack-basic.js",
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  module: {
  rules: [{
      test: /src\/.*\.js$/,
      exclude: /(node_modules|bower_components)/i,
      use: [{ loader: 'source-map-loader' }, { loader: 'babel-loader' }, { loader: 'eslint-loader' }]
  }, {
      test: /\.s?[ac]ss$/,
      use: [
          'style-loader',
          {
              loader: 'css-loader'
          },
          {
              loader: 'sass-loader'
          }
      ]
  }, {
      test: /\.(woff(2)?|ttf|jpg|png|eot|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
          }
      }]
  },
  {
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
  }]
},
};
