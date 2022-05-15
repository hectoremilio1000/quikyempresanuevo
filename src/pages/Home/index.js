import React, { useState } from "react";
import "./styles.css";
import Banner from "../../components/Banner";
import Content1 from "../../components/HomeComponent/Content1";

import Content2 from "../../components/HomeComponent/Content2";
import Content3 from "../../components/HomeComponent/Content3";
import Content4 from "../../components/HomeComponent/Content4";
import Cookies from "../../components/HomeComponent/Cookies";

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
      <Content3 />
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
