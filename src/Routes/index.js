import { Layout } from "antd";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin/index";
import NotFound from "../pages/NotFound";
import FooterComponent from "../components/FooterComponent/index";

//styles
import styles from "./styles.css";
import "antd/dist/antd.min.css";
import NavBar2 from "../components/NavBar2";
import Profile from "../pages/Profile";
import Privacidad from "../pages/Privacidad";
import Copyright from "../components/Copyright";
import BolsaTrabajo from "../pages/BolsaTrabajo/index";
import OtrasPruebas from "../pages/OtrasPruebas/index";

const { Header, Content, Footer } = Layout;

function Routing() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header>
          <NavBar2 />
        </Header>
        <Content className="site-layout-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="admin" element={<Admin />} />

            <Route path="profile" element={<Profile />} />
            <Route path="privacidad" element={<Privacidad />} />
            <Route path="bolsatrabajo" element={<BolsaTrabajo />} />
            <Route path="otraspruebas" element={<OtrasPruebas />} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
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
