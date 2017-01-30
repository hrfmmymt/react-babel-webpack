// require("babel-core/register");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// require("babel-polyfill");

const webpack = require("webpack");

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

const PROD = !process.argv.includes("--hot");

const plugins = [
  new HtmlWebpackPlugin({
    template: src + "/index.html",
    filename: "index.html"
  }),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": "'" + (process.env.NODE_ENV || (PROD ? "production" : "development")) + "'"
  }),
  new ExtractTextPlugin({
    filename: "css/style.css",
    disable: false,
    allChunks: true
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        require("autoprefixer")({
          browsers: ["last 2 versions"]
        }),
        require("postcss-custom-properties")(),
        require("postcss-nested")()
      ]
    }
  })
];

if (PROD) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  );
}

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

    devtool: PROD ? false : "cheap-module-eval-source-map",

    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loaders: [
            "react-hot-loader",
            "babel-loader"
          ]
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: [
              "css-loader",
              "postcss-loader"
            ],
            publicPath: "/css"
          })
        }
      ]
    },

    resolve: {
      extensions: ["*", ".js", ".css"]
    },

    plugins: plugins
  }
];
