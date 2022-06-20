import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Button } from "react-bootstrap";

import itemsRoutes from "../../assets/RoutesMenuSider/items";
import HeaderLayoutAdmin from "../HeaderLayoutAdmin";

import ContentLayoutAdmin from "../ContentLayoutAdmin";

const { Sider } = Layout;
function LayoutAdministrador({ signOut }) {
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
            items={itemsRoutes}
          ></Menu>
        </Sider>
        <Layout>
          <HeaderLayoutAdmin collapsed={collapsed} toggle={toggle} />
          <ContentLayoutAdmin current={current} />
        </Layout>
      </Layout>
      <Button onClick={signOut} variant="warning" style={{ width: "100%" }}>
        Cerrar Sesión
      </Button>
    </>
  );
}

export default LayoutAdministrador;
