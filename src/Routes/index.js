import { Layout } from "antd";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "../pages/NotFound";
import FooterComponent from "../components/FooterComponent/index";

//styles
import styles from "./styles.css";
import "antd/dist/antd.min.css";
import NavBar2 from "../components/NavBar2";

import Copyright from "../components/Copyright";
import AppRoutes from "../components/AppRoutes";

const { Header, Content, Footer } = Layout;

function Routing() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header className="header">
          <NavBar2 />
        </Header>
        <Content className="site-layout-content">
          <AppRoutes />
        </Content>
        <Footer className="FooterIndex">
          <FooterComponent />
          <Copyright />
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default Routing;
