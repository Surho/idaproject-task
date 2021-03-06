const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSASS = new ExtractTextPlugin("./css/style.css");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/bundle.js',
  },
  devtool: "source-map",
  module: {
    exprContextCritical: false,
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'env'
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractSASS.extract({ 
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sourceMapContents: false
              }
            }
          ]
        })
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '../fonts'
            },
          },
        ]
      }
    ]
  },
  plugins: [
    extractSASS,
    new CopyPlugin([
      { from: 'src/img', to: 'img' },
      { from: 'src/fonts', to: 'fonts' },
    ]),
  ]
};