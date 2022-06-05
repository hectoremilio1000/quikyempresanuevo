import React, { useState } from "react";
import pdf from "../../../../../../assets/estudios/resultadoPCRCOVIDGUILLERMO.pdf";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useParams } from "react-router-dom";

import { Layout, Menu } from "antd";
import ListaPruebas from "../../../ListaPruebas/index";
import SolicitarPruebas from "../../../SolicitarPruebas/index";

import {
  MedicineBoxOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusCircleOutlined,
  SmileOutlined,
  MonitorOutlined,
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

function VerPrueba() {
  const { id } = useParams();
  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        height: "750px",
      }}
    >
      <p className="fs-5">Estudio {id}</p>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
        <Viewer fileUrl={pdf} />;
      </Worker>
    </div>
  );
}

export default VerPrueba;
