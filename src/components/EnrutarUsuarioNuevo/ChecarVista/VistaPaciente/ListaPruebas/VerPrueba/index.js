import React, { useState } from "react";
import pdf from "../../../../../../assets/estudios/resultadoPCRCOVIDGUILLERMO.pdf";
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
          marginBottom: 100,
        }}
      >
        <Button variant="info" onClick={() => navigate(-1)}>
          Regresar
        </Button>
        <div style={{ marginBottom: 20 }}>
          <p
            style={{ textAlign: "center", lineHeight: "0", marginBottom: "0" }}
            className="textAdminHeader"
          >
            Estudio {id}
          </p>
        </div>
        {/* <div>
          <embed src={pdf} width="100%" height="80vh" />
        </div> */}

        <div>
          <iframe src={pdf} style={{ width: "100%", height: "80vh" }}></iframe>
        </div>
      </Header>
    </Container>
  );
}

export default VerPrueba;
