import "./App.css";

import { TabBar } from "antd-mobile";
import React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import { NavLink } from "react-router-dom";
function App(props: RouteConfig) {
  console.log(props);

  return (
    <div>
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
        <TabBar.Item title="Life" key="Life"></TabBar.Item>
      </TabBar>
      {/* <NavLink to="/home">home</NavLink>
      <NavLink to="/citylist">citylist</NavLink> */}
      {renderRoutes(props.route.routes)}
    </div>
  );
}

export default App;
