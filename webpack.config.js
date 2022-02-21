const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("path");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: "./index.js",
  devtool: isDevelopment && "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
  cache: {
      type: 'filesystem'
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Code Editor Workshop",
      filename: "index.html",
      template: path.resolve(__dirname, "index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./styles.css", to: "./styles.css" }],
    }),
    new MonacoWebpackPlugin({ languages: ['typescript'] }),
  ],
  devServer: {
    open: true,
    hot: true,
    static: "./dist",
  },
};
