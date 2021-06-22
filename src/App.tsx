import "./App.css";

import { TabBar } from "antd-mobile";
import React, { useState } from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
function App(props: RouteConfig) {
  // console.log(props);
  // 被选中的值
  let [selectedTab, setselectedTab] = useState("home");
  // 要渲染的数据
  let [tabBarList] = useState([
    {
      title: "首页",
      // 同时也代表路由地址
      key: "home",
      icon: <i className="iconfont icon-ind"></i>,
    },
    {
      title: "找房",
      key: "findhouse",
      icon: <i className="iconfont icon-findHouse"></i>,
    },
    {
      title: "资讯",
      key: "news",
      icon: <i className="iconfont icon-infom"></i>,
    },
    {
      title: "我的",
      key: "profile",
      icon: <i className="iconfont icon-my"></i>,
    },
  ]);

  return (
    <div id="App">
      {renderRoutes(props.route.routes)}
      <div id="App-tabbar">
        <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
          {tabBarList.map((item) => (
            <TabBar.Item
              title={item.title}
              key={item.key}
              icon={item.icon}
              selectedIcon={item.icon}
              selected={selectedTab === item.key}
              onPress={() => {
                // 路由跳转
                props.history.push(item.key);
                // 设置选中的值
                setselectedTab(item.key);
              }}></TabBar.Item>
          ))}
          {/* <TabBar.Item
          title="找房"
          key="findHost"
          icon={<i className="iconfont icon-findHouse"></i>}
          selectedIcon={
            <i className="iconfont icon-findHouse" style={{ color: "red" }}></i>
          }
          selected={selectedTab === "findHost"}
          onPress={() => {
            props.history.push("/findhouse");
            setselectedTab("findHost");
          }}></TabBar.Item> */}
        </TabBar>
        {/* <NavLink to="/home">home</NavLink>
      <NavLink to="/citylist">citylist</NavLink> */}
      </div>
    </div>
  );
}

export default App;
