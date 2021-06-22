import "./App.css";

import React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import { NavLink } from "react-router-dom";
function App(props: RouteConfig) {
  console.log(props);

  return (
    <div>
      <NavLink to="/home">home</NavLink>
      <NavLink to="/citylist">citylist</NavLink>
      {renderRoutes(props.route.routes)}
    </div>
  );
}

export default App;
