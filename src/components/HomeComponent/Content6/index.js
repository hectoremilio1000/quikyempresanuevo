import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Timeline } from "antd";
import { Container } from "@mui/material";

function Content6() {
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
      <div className="d-flex justify-content-center">
        <a href="https://wa.me/+5219511028474">
          <button className="btn btn-success rounded">¡Reserva ya!</button>
        </a>
      </div>
    </Container>
  );
}

export default Content6;
