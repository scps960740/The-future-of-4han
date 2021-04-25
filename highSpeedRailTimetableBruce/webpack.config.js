const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

const name = './js/index.js'

module.exports = {
  // development production
  mode: "development",
  entry: name,
  output: {
    filename: 'main_bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },


  // 篩選器，統一，讓IE看得懂
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  // 插件，有點像chrome插件，做一些小事
  plugins: [
    // 每次幫你複製一個HTML到dist底下，不用在手動引入把包的JS
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    // 每次重新打包前，清空dist資料夾
    new CleanWebpackPlugin(),
    // 把images/跟css加入dist資料夾
    new CopyPlugin({
      patterns: [
        { from: "./images", to: "images/" },
        { from: "./index.css", to: "index.css" },
      ],
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js'],
    })
  ]
};