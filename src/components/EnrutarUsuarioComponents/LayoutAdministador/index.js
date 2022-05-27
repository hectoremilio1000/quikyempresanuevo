import React, { useState } from "react";
import { Layout, Menu, Typography } from "antd";
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
} from "@ant-design/icons";

import "./styles.css";
import CrearPruebas from "../Components/Pruebas/CrearPruebas";
import ListaPruebas from "../Components/Pruebas/ListaPruebas";
import CrearDoctor from "../Components/Doctor/CrearDoctor";
import ListaDoctores from "../Components/Doctor/ListaDoctores";
import CrearOrden from "../Components/Orden/CrearOrden/index";
import ListaOrdenes from "../Components/Orden/ListaOrdenes/index";
import CrearPaciente from "../Components/Pacientes/CrearPaciente";
import ListaPacientes from "../Components/Pacientes/ListaPacientes/index";
import CrearResultado from "../Components/Resultados/CrearResultado/index";
import ListaResultados from "../Components/Resultados/ListaResultados/index";
import CrearBlog from "../Components/Blog/CrearBlog/index";
import ListaBlog from "../Components/Blog/ListaBlogs/index";
import Cortes from "../Components/Administrador/Cortes";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

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
  getItem("Pruebas", "sub1", <AppstoreOutlined />, [
    getItem("Crear Pruebas", "1", <HighlightOutlined />),
    getItem("Lista Pruebas", "2", <UnorderedListOutlined />),
  ]),
  getItem("Doctores", "sub2", <MedicineBoxOutlined />, [
    getItem("Crear Doctor", "3", <BranchesOutlined />),
    getItem("Lista Doctores", "4", <ContactsOutlined />),
  ]),
  getItem("Ordenes", "sub3", <ContainerOutlined />, [
    getItem("Crear Orden", "5", <FolderAddOutlined />),
    getItem("Lista de Ordenes", "6", <ReadOutlined />),
  ]),

  getItem("Pacientes", "sub4", <SmileOutlined />, [
    getItem("Crear Paciente", "7", <PlusCircleOutlined />),
    getItem("Lista de Pacientes", "8", <TeamOutlined />),
  ]),
  getItem("Resultados", "sub5", <FilePdfOutlined />, [
    getItem("Crear Resultado", "9", <FileDoneOutlined />),
    getItem("Lista de Resultados", "10", <FileSearchOutlined />),
  ]),

  getItem("Blog", "sub6", <HddOutlined />, [
    getItem("Crear Blog", "11", <LaptopOutlined />),
    getItem("Editar Blog", "12", <GroupOutlined />),
  ]),
  getItem("Administrador", "sub7", <HddOutlined />, [
    getItem("Cortes", "13", <LaptopOutlined />),
  ]),
];

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
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            selectedKeys={current}
            onClick={cambiarComponent}
            items={items}
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
            ) : current === "2" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <ListaPruebas />
              </div>
            ) : current === "3" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <CrearDoctor />
              </div>
            ) : current === "4" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <ListaDoctores />
              </div>
            ) : current === "5" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <CrearOrden />
              </div>
            ) : current === "6" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <ListaOrdenes />
              </div>
            ) : current === "7" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <CrearPaciente />
              </div>
            ) : current === "8" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <ListaPacientes />
              </div>
            ) : current === "9" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <CrearResultado />
              </div>
            ) : current === "10" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <ListaResultados />
              </div>
            ) : current === "11" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <CrearBlog />
              </div>
            ) : current === "12" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <ListaBlog />
              </div>
            ) : current === "13" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <Cortes />
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
