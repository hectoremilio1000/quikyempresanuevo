import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Button } from "react-bootstrap";
import { Content } from "antd/lib/layout/layout";
import itemsRoutes3 from './itemsRoutes3/index';
import HeaderLayoutAdmin3 from './HeaderLayoutAdmin3/index';
import { withAuthenticator } from "@aws-amplify/ui-react";
import ListaEstudios from './Estudios/ListaEstudios/index';
import SolicitarEstudios from './Estudios/SolicitarEstudios/index';

const { Sider } = Layout;

function VistaPaciente2({ signOut, user }) {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");

  const email = user?.attributes?.email

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
            items={itemsRoutes3}
          ></Menu>
        </Sider>
        <Layout>
    <HeaderLayoutAdmin3 collapsed={collapsed} toggle={toggle} email={email}/>
    <Content style={{ margin: "24px 16px 0" }}>
      {current === "1" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaEstudios />
        </div>
      ) : current === "2" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <SolicitarEstudios />
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

export default withAuthenticator(VistaPaciente2)