import * as React from "react";

import { Timeline } from "antd";
import { Container } from "@mui/material";

import "./styles.css";

function OtrasPruebasContent1() {
  return (
    <Container>
      <div className="pt-4 text-center ps-2 pe-2">
        <h1 className="fw-bold fs-2">
          Recuerda cómo funciona el servicio a domicilio
        </h1>
      </div>
      <div className="pt-4">
        <Timeline>
          <Timeline.Item>Selecciona el Test</Timeline.Item>
          <Timeline.Item>Reserva y manda tu ubicación</Timeline.Item>
          <Timeline.Item>Recibe al Laboratorista</Timeline.Item>
          <Timeline.Item>Checa el resultado</Timeline.Item>
        </Timeline>
      </div>
      <div className="d-flex justify-content-center divButton">
        <a href="https://wa.me/+5219511028474">
          <button className="btn btn-success rounded">¡Pide información ahora!</button>
        </a>
      </div>
    </Container>
  );
}

export default OtrasPruebasContent1;
