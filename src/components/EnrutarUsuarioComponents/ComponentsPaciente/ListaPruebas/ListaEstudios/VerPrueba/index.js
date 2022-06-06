import React, { useState } from "react";
import pdf from "../../../../../../assets/estudios/resultadoPCRCOVIDGUILLERMO.pdf";
import { useParams } from "react-router-dom";

import { Layout } from "antd";

import {
  MedicineBoxOutlined,
  PlusCircleOutlined,
  SmileOutlined,
  MonitorOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
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

function VerPrueba() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const { id } = useParams();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
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
              Estudio {id}
            </p>
          </div>
        </Header>
      </Layout>
    </Layout>
  );
}

export default VerPrueba;
