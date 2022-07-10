import React, { useState } from "react";
import "./styles.css";
import Banner from "../../components/HomeComponent/Banner";
import Content1 from "../../components/HomeComponent/Content1";

import Content2 from "../../components/HomeComponent/Content2";
import Content3 from "../../components/HomeComponent/Content3";
import Content4 from "../../components/HomeComponent/Content4";
import Cookies from "../../components/HomeComponent/Cookies";
import Content5 from "../../components/HomeComponent/Content5";
import Content6 from "../../components/HomeComponent/Content6";
import Content7 from "../../components/HomeComponent/Content7";

//cookies

function Home() {
  const [cookies, setCookies] = useState(true);
  const handlecookies = () => {
    setCookies(false);
  };
  return (
    <>
      <Banner />
      <Content1 />
      <Content2 />
      <Content7 />
      <Content3 />
      <Content5 />
      <Content6 />
      <Content4 />

      {cookies ? (
        <Cookies cookies={cookies} handlecookies={handlecookies} />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Home;
