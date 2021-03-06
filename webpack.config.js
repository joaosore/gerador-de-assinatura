const path = require("path");
const webpack = require("webpack");
const glob = require("glob-all");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/js/index.js", "./src/scss/index.scss"],
  output: {
    path: path.resolve("dist/"),
    filename: "./main.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader", options: { minimize: true } },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(png|jpg|otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: "file-loader?name=./assets/[name].[ext]"
      },
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "./[name].css"
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new HtmlWebpackPlugin({
      title: "Custom template",
      template: "index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: "src/imgs/*",
        to: "",
        flatten: true
      }
    ])
  ],
  optimization: {
    minimize: true
  }
};
