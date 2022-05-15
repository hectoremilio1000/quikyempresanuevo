import React from "react";
import "./styles.css";
import Banner from "../../components/Banner";
import Content1 from "../../components/HomeComponent/Content1";

import Content2 from "../../components/HomeComponent/Content2";
import Content3 from "../../components/HomeComponent/Content3";
function Home() {
  return (
    <>
      <Banner />
      <Content1 />
      <Content2 />
      <Content3 />
    </>
  );
}

export default Home;
