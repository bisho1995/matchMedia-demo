import React from "react";
import App from "./src/App";
import ReactDom from "react-dom";
/**
 * This is used with server/express.js to enable HMR
 */
require("webpack-hot-middleware/client");

ReactDom.render(<App />, document.getElementById("root"));
