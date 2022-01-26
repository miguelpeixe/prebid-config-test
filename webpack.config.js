const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    prebid: "./src/prebid.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /.js$/,
        include: new RegExp(`\\${path.sep}prebid\\.js`),
        use: {
          loader: "babel-loader",
          options: {
            ...require("prebid.js/.babelrc.js"),
            configFile: false,
          },
        },
      },
    ],
  },
};
