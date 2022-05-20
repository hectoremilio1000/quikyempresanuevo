import React, { useState } from "react";
import { Layout, Menu, Typography } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ExceptionOutlined,
  ExperimentOutlined,
  ForkOutlined,
  NodeIndexOutlined,
  MedicineBoxOutlined,
  ProfileOutlined,
  IdcardOutlined,
  FileAddOutlined,
} from "@ant-design/icons";

import "./styles.css";
import CrearPruebas from "../CrearPruebas";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

function LayoutAdministrador({ user }) {
  const [current, setCurrent] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const cambiarComponent = e => {
    setCurrent(e.key);
  };

  if (user) {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={current}
            onClick={cambiarComponent}
          >
            <Menu.Item key="1" icon={<UserOutlined />} style={{ fontSize: 12 }}>
              Prueba
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{
              padding: 0,
              height: 100,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger hamburguesaMenu",
                  onClick: toggle,
                }
              )}
            </div>
            <div>
              <p style={{ textAlign: "center" }} className="textAdminHeader">
                Administrador, hola {user.email}
              </p>
            </div>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            {current === "1" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <CrearPruebas />
              </div>
            ) : (
              <div></div>
            )}
          </Content>
        </Layout>
      </Layout>
    );
  } else {
    return;
  }
}

export default LayoutAdministrador;
