import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import somePic from "../../../assets/images/homeContent1/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room_657921-879.jpg";
import "./styles.css";

function Content1() {
  return (
    <div style={{ marginBottom: 15, marginTop: 15 }}>
      <Grid container alignItems="center">
        <Grid item container xs={12} md={6}>
          <Grid item xs={12} md={12}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  ¿Quiénes somos?
                </Typography>
                <Typography
                  sx={{ mb: 1.5, textAlign: "center" }}
                  color="text.secondary"
                >
                  Somos la primer empresa de Laboratorios Clínicos en México
                  enfocada al servicio de Pruebas de Laboratorio a Domicilio
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Cumplimos con los estándares más altos en Calidad
                </Typography>
                <Typography
                  sx={{ mb: 1.5, textAlign: "center" }}
                  color="text.secondary"
                >
                  Nuestra misión es cuidar del paciente ofreciéndole los
                  estándares más altos en Calidad, con reconocimiento por parte
                  de INDRE, EMA, PACAL, CDC y RIQAS.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className="gridFoto">
          <CardMedia
            className="cardFoto"
            image={somePic}
            height="194"
            sx={{
              minWidth: 275,
              height: 350,
              minHeight: 300,
              borderRadius: 5,
              backgroundColor: "rgba(52, 52, 52, 0.8)",

              backgroundPosition: {
                xs: "center",
                md: "top",
              },
            }}
          ></CardMedia>
        </Grid>
      </Grid>
    </div>
  );
}

export default Content1;
