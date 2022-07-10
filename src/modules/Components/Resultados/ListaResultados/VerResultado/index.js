import React, { useState, useEffect } from "react";
import pdf from "../../../../../assets/estudios/resultadoPCRCOVIDGUILLERMO.pdf";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Layout } from "antd";

import { Button, Container } from "react-bootstrap";
import { DataStore, Storage } from "aws-amplify";
import { Paciente } from "../../../../../models";

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

function VerResultado() {
  const [collapsed, setCollapsed] = useState(false);
  // const [pdf, setPDF] = useState("");
  const [resultado, setResultado] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    DataStore.query(Paciente).then(pacientes => setPacientes(pacientes));
  }, []);

  useEffect(() => {
    DataStore.query(Paciente, id).then(setResultado);
  }, [id]);

  // console.log(resultado)

  let pdf = resultado?.url;
  let pdf2 = resultado?.url2;
  console.log(resultado);

  // useEffect(() => {
  //   if(!resultados){
  //     return
  //   }
  //   Storage.get(resultados.image).then(imagen=>setPDF(imagen))
  // }, [resultados])

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
        <div style={{ width: "100%" }}>
          {pdf ? (
            <div>
              <iframe
                src={pdf}
                title={resultado?.id}
                style={{ width: "100%", height: "35vh" }}
              />
            </div>
          ) : (
            <></>
          )}
          {pdf2 ? (
            <div>
              <iframe
                src={pdf2}
                title={resultado?.id}
                style={{ width: "100%", height: "35vh" }}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </Header>
    </Container>
  );
}

export default VerResultado;
