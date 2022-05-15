import React from "react";
import "./styles.css";
import Banner from "../../components/Banner";
import Content1 from "../../components/HomeComponent/Content1";

import Content2 from "../../components/HomeComponent/Content2";
function Home() {
  return (
    <>
      <Banner />
      <Content1 />
      <Content2 />
    </>
  );
}

export default Home;
