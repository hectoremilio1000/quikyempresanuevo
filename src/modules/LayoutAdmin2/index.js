import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Button } from "react-bootstrap";
import itemsRoutes2 from "./itemRoutes2";
import HeaderLayoutAdmin from "../HeaderLayoutAdmin";
import HeaderLayoutAdmin2 from "./ContentLayout2/HeaderLayoutAdmin2";
import CrearResultado from './ContentLayout2/CrearResultado';

import { Content } from "antd/lib/layout/layout";
import ListaResultados from '../Components/Resultados/ListaResultados/index';

const { Sider } = Layout;

function LayoutAdmin2({ signOut }) {
    const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const cambiarComponent = e => {
    setCurrent(e.key);
  };
  return (
    <>
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={current}
            onClick={cambiarComponent}
            items={itemsRoutes2}
          ></Menu>
        </Sider>
    
    <Layout>
    <HeaderLayoutAdmin2 collapsed={collapsed} toggle={toggle} />
    <Content style={{ margin: "24px 16px 0" }}>
      {current === "1" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearResultado />
        </div>
      ) : current === "2" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaResultados />
        </div>
      ) : <div></div>}
      </Content>
    </Layout>
    </Layout>
    <Button onClick={signOut} variant="warning" style={{ width: "100%" }}>
        Cerrar Sesión
      </Button>

    </>
  )
}

export default LayoutAdmin2