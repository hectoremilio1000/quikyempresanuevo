import React, { useState } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { Header } = Layout;

function HeaderLayoutAdmin3({ collapsed, toggle, email }) {
  return (
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
        Hola {email}
      </p>
    </div>
  </Header>
  )
}

export default HeaderLayoutAdmin3