const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "./build",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: {
          presets: [
            "@babel/preset-react",
            [
              "@babel/preset-env",
              {
                useBuiltIns: "entry",
                corejs: "3.0.0",
              },
            ],
          ],
        },
      },
    ],
  },
  externals: [webpackNodeExternals()],
};
