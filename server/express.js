const express = require("express");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config");

const webpackCompiler = webpack(webpackConfig);
const webpackHotMiddleware = require("webpack-hot-middleware")(webpackCompiler);
const webpackDevMiddleware = require("webpack-dev-middleware")(
  webpackCompiler,
  {
    methods: ["GET", "HEAD", "POST", "PUT", "DELETE"],
  }
);

const app = express();

const PORT = 9000;

const staticMiddleware = express.static("dist");

app.use([webpackDevMiddleware, webpackHotMiddleware, staticMiddleware]);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
