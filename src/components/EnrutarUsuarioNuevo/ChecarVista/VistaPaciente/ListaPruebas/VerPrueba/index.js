import React, { useState } from "react";
// import pdf from "../../../../../assets/estudios/resultadoPCRCOVIDGUILLERMO.pdf";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Layout } from "antd";

import {
  MedicineBoxOutlined,
  PlusCircleOutlined,
  SmileOutlined,
  MonitorOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Button, Container } from "react-bootstrap";

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

function VerPrueba() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const { id } = useParams();

  return (
    <Container>
      <Header
        className="site-layout-sub-header-background"
        style={{
          padding: 0,
          height: "80vh",
          justifyContent: "space-around",
        }}
      >
        <Button variant="info" onClick={() => navigate(-1)}>
          Regresar
        </Button>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p
            style={{ textAlign: "center", lineHeight: "0", marginBottom: "0" }}
            className="textAdminHeader"
          >
            Estudio {id}
          </p>
        </div>
        <div>
          <h2>ver estudio</h2>
        </div>
      </Header>
    </Container>
  );
}

export default VerPrueba;
