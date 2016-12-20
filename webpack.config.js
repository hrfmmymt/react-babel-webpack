require("babel-core/register");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
require("babel-polyfill");

const webpack = require("webpack");

const src  = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

const DEBUG = !process.argv.includes("--release");

const plugins = [
  new HtmlWebpackPlugin({
    template: src + "/index.html",
    filename: "index.html"
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.AggressiveMergingPlugin()
];

module.exports = [
  {
    context: src + "/js",
    entry: "./index.jsx",

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
        }
      ]
    },

    resolve: {
      extensions: ["", ".js"]
    },

    plugins: plugins,
  },
  {
    context: src + "/css",
    entry: "./style.css",
    output: {
      path: dist + "/css",
      filename: "[name].css"
    },
    devServer: {
      contentBase: "dist"
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract(
            "css?modules=true!postcss"
          )
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("[name].css")
    ],
    postcss: [
      require("autoprefixer")(),
      require("postcss-custom-properties")(),
      require("postcss-nested")()
    ]
  }
];