import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Layout } from "antd";

import { Button, Container } from "react-bootstrap";
import { DataStore, Storage } from "aws-amplify";
import {Paciente} from '../../../../../../models'

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
  const [resultado, setResultado] = useState([])
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    DataStore.query(Paciente, id).then(setResultado)
  }, [id]);
let pdf = resultado?.url

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
        {/* <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
{pdf ?  <iframe src={pdf} title={resultado?.id} style={{width:"100%", height:"80vh"}}/> : <></>}
</div> */}

<div style={{display:"flex", justifyContent:"center", width:"100%"}}>
{pdf ?  <iframe src={pdf} title={resultado?.id} style={{width:"100%", height:"80vh"}}/> : <></>}
</div>

      </Header>
    </Container>
  );
}

export default VerPrueba;
