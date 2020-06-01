const path = require("path");

module.exports = {
  target: "node",
  entry: "./src/client.js",
  output: {
    filename: "client-bundle.js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "./build/public",
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
};
