import { Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  MedicineBoxOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusCircleOutlined,
  SmileOutlined,
  MonitorOutlined,
} from "@ant-design/icons";
import ListaPacientes from "./ListaPacientes";
import SolicitarPruebas from "./SolicitarPruebas";
const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Pacientes", "sub1", <MedicineBoxOutlined />, [
    getItem("Lista Pacientes", "1", <MonitorOutlined />),
    getItem("Solicitar Pruebas", "2", <PlusCircleOutlined />),
  ]),

  // getItem("Profie", "3", <SmileOutlined />),
];

function VistaDoctor({ dbUser }) {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const cambiarComponent = e => {
    setCurrent(e.key);
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          selectedKeys={current}
          onClick={cambiarComponent}
          items={items}
        ></Menu>
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
              Hola Doctor {dbUser.dbUser.nombre}
            </p>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          {current === "1" ? (
            <div className="site-layout-background" style={{ minHeight: 100 }}>
              <ListaPacientes />
            </div>
          ) : current === "2" ? (
            <div className="site-layout-background" style={{ minHeight: 100 }}>
              <SolicitarPruebas dbUser={dbUser} />
            </div>
          ) : (
            <div></div>
          )}
          {/* ) : current === "3" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          Profile
        </div>
      ) */}
        </Content>
      </Layout>
    </Layout>
  );
}

export default VistaDoctor;
