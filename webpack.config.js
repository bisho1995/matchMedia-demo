const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "index.js"),
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    /**
     * Allow hot reloads
     */
    hot: true,
    port: 9000,
    /**
     * Show a black overlay if there are errors
     * todo: create a situation for this
     */
    overlay: true,
  },
  output: {
    /**
    todo: if I have filename as [name]-xyz.js 
    name resolves to main. Why is that?
     */
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        /**
         * This is needed for loading .css files in our project
         * todo: currently this is injecting styles in head section we need
         * todo: a separate file for css
         */
        test: /\.css$/i,
        // todo: purpose of each of the loaders
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.worker\.(c|m)?js$/i,
        use: [
          {
            loader: "worker-loader",
          },
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
