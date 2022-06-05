import { Layout, Menu } from "antd";
import React, { useState } from "react";
import ListaPruebas from "../ComponentsPaciente/ListaPruebas/index";
import SolicitarPruebas from "../ComponentsPaciente/SolicitarPruebas/index";
import {
  UserOutlined,
  MedicineBoxOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UnorderedListOutlined,
  ContactsOutlined,
  ReadOutlined,
  BranchesOutlined,
  ContainerOutlined,
  HighlightOutlined,
  AppstoreOutlined,
  FolderAddOutlined,
  PlusCircleOutlined,
  SmileOutlined,
  TeamOutlined,
  FilePdfOutlined,
  FileSearchOutlined,
  FileDoneOutlined,
  HddOutlined,
  GroupOutlined,
  LaptopOutlined,
  MonitorOutlined,
  ReconciliationOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";

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
  getItem("Pruebas", "sub1", <MedicineBoxOutlined />, [
    getItem("Lista Pruebas", "1", <MonitorOutlined />),
    getItem("Solicitar Pruebas", "2", <PlusCircleOutlined />),
  ]),

  getItem("Profie", "3", <SmileOutlined />),
];

function LayoutPaciente({ dbUser }) {
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
              Hola Paciente {dbUser ? <h1>{dbUser.nombre}</h1> : <></>}
            </p>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          {current === "1" ? (
            <div className="site-layout-background" style={{ minHeight: 100 }}>
              <ListaPruebas />
            </div>
          ) : current === "2" ? (
            <div className="site-layout-background" style={{ minHeight: 100 }}>
              <SolicitarPruebas />
            </div>
          ) : current === "3" ? (
            <div className="site-layout-background" style={{ minHeight: 100 }}>
              Profile
            </div>
          ) : (
            <div></div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutPaciente;
