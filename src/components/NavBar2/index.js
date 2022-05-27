import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./styles.css";
import { Link, useNavigate } from "react-router-dom";

import { Menu } from "antd";
import {
  SmileOutlined,
  GlobalOutlined,
  FileSearchOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

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
  getItem("Menú", "sub1", null, [
    getItem("Usuario", "enrutarUsuario", <SmileOutlined />),
    getItem("Buscador de pruebas", "otraspruebas", <FileSearchOutlined />),
    getItem("Bolsa de Trabajo", "bolsatrabajo", <DollarCircleOutlined />),
    getItem("Blog", "blog", <GlobalOutlined />),
  ]),
];

function NavBar2() {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();

  const cambiarComponent = e => {
    setCurrent(e.key);
    navigate(`${e.key}`);
  };
  return (
    <>
      <div className="logoPrincipal">
        <Link to="/">
          <img
            alt="Quikyempresa"
            src={
              "https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo+nuevo/SAN-MATEO.png"
            }
            width="140px"
            height="50px"
          />
        </Link>
      </div>
      <Menu
        selectedKeys={current}
        onClick={cambiarComponent}
        mode="horizontal"
        items={items}
        className="menuPrincipal"
        style={{ minWidth: 100 }}
      />
    </>
  );
}

export default NavBar2;
