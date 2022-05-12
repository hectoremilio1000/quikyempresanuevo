import { Layout } from "antd";
import React from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Admin from "../pages/Admin/index";
import NotFound from "../pages/NotFound";
import FooterComponent from "../components/FooterComponent/index";

//styles
import styles from "./styles.css";
import "antd/dist/antd.css";
import NavBar2 from "../components/NavBar2";

const { Header, Content, Footer } = Layout;

function Routing() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header>
          {/* <NavBar /> */}
          <NavBar2 />
        </Header>
        <Content className="site-layout-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <Footer>
          <FooterComponent />
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default Routing;
