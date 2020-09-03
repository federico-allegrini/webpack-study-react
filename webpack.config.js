const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "",
  },
  devtool: "cheap_module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/, //Rule that apply to every file that end in ".js"
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
