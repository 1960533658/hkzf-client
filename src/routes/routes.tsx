import React from "react";
import { RouteConfig } from "react-router-config";
import { Redirect } from "react-router-dom";

import App from "../App";
import CityList from "../pages/CityList/CityList";
import Home from "../pages/Home/Home";
const routes: RouteConfig[] = [
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        // eslint-disable-next-line react/display-name
        render: () => <Redirect to={"/home"} />,
      },
      {
        path: "/home",
        component: Home,
      },
      {
        path: "/citylist",
        component: CityList,
      },
    ],
  },
];

export default routes;
