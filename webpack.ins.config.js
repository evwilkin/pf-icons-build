const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './bundles'),
    filename:"webpack-ins.js",
  },
  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [{
      test: /src\/.*\.js$/,
      exclude: /node_modules/,
      use: [{ loader: 'source-map-loader' }, { loader: 'babel-loader' }]
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
    }]
  }
};

module.exports = webpackConfig;
