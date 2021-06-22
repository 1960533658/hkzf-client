import React from "react";
import { RouteConfig } from "react-router-config";
import { Redirect } from "react-router-dom";

import App from "../App";
import CityList from "../pages/CityList/CityList";
import FindHouse from "../pages/FindHouse/FindHouse";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Profile from "../pages/Profile/Profile";
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
      // 首页
      {
        path: "/home",
        component: Home,
      },
      // 找房
      {
        path: "/findhouse",
        component: FindHouse,
      },
      // 资讯
      {
        path: "/news",
        component: News,
      },
      // 我的
      {
        path: "/profile",
        component: Profile,
      },
      {
        path: "/citylist",
        component: CityList,
      },
    ],
  },
];

export default routes;
