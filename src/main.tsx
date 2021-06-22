import "./index.css";
import "antd-mobile/dist/antd-mobile.css";
import "./assets/fonts/iconfont.css";

import React from "react";
import ReactDOM from "react-dom";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import routes from "./routes/routes";
ReactDOM.render(
  <HashRouter>
    <React.StrictMode>{renderRoutes(routes)}</React.StrictMode>
  </HashRouter>,
  document.getElementById("root"),
);
