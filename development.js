import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
require("babel-polyfill");

const webpack = require("webpack");

const src  = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");
const DEBUG = !process.argv.includes("--release");

const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "../index.html"
  }),
  new webpack.optimize.OccurenceOrderPlugin()
];

if(!DEBUG){
  plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ compress: { screw_ie8: true, warnings: false } }),
    new webpack.optimize.AggressiveMergingPlugin()
  );
}

export default {
  entry: src + "/js/index.jsx",

  output: {
    path: dist,
    filename: "js/bundle.js"
  },

  devServer: {
    contentBase: "dist"
  },

  devtool: DEBUG ? "cheap-module-eval-source-map" : false,

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: [
          "react-hot",
          "babel"
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          "style",
          "css?modules",
          "postcss"
        ]
      }
    ]
  },

  resolve: {
    extensions: ["", ".js"]
  },

  plugins: plugins,

  postcss: [
    require("autoprefixer")(),
    require("postcss-custom-properties")(),
    require("postcss-nested")()
  ]
}