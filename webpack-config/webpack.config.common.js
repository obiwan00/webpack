const fs = require('fs')
const path = require('path');
const {
  getFileNamesFromDirWithExtension,
  generateHtmlWebpackPlugins,
} = require('./utils')

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

const rootDirPath = path.resolve(__dirname, '..')

const viewPagesPath = path.resolve(rootDirPath, './src/views')
const viewPages = getFileNamesFromDirWithExtension({sourceDirPath: viewPagesPath, extensions: ['pug', 'html']})
const viewPagesWrappedWithHtmlPlugins = generateHtmlWebpackPlugins({pages: viewPages, sourceDirPath: viewPagesPath})


module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new PrettierPlugin(),
    new ESLintPlugin(),
    ...viewPagesWrappedWithHtmlPlugins,
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  output: {
    path: path.resolve(rootDirPath, 'dist'),
  },
};