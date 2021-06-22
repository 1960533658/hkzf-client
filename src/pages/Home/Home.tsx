import { Carousel } from "antd-mobile";
import React from "react";
export default function Home() {
  return (
    <div id="home">
      <Carousel autoplay infinite>
        <img
          src="https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png"
          alt=""
        />
        <img
          src="https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png"
          alt=""
        />
      </Carousel>
    </div>
  );
}
