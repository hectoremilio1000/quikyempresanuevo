import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import somePic from "../../../assets/images/body_2_serviciosSanMateo.jpg";
function Content1() {
  return (
    <div className="container" style={{ marginBottom: 15, marginTop: 15 }}>
      <Grid
        item
        xs={11}
        // spacing={3}
        alignItems="center"
        sx={{ mx: "auto" }}
      >
        <Grid item xs={12} lg={7} sx={{ ml: "auto", mb: 3 }}>
          <Grid container spacing={3} sx={{ mt: { xs: 0, pd: 3 } }}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: 200,
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
                    Somos una empresa de laboratorios de Test Clínicos
                    comprometida a ofrecer servicios de Primer Mundo a precios
                    accesibles para toda la población.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: 200,
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
                    ¿Cómo podemos dar estos precios?
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, textAlign: "center" }}
                    color="text.secondary"
                  >
                    Nuestra misión es cuidar del paciente y sus ingresos sobre
                    todo en esta etapa de pandemia, ofreciendo la mayor
                    confidencialidad y confiabilidad en cada test clínico.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
          <CardMedia
            image={somePic}
            height="194"
            sx={{
              minWidth: 275,
              height: 350,
              minHeight: 300,
              borderRadius: 5,
              backgroundColor: "rgba(52, 52, 52, 0.8)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></CardMedia>
        </Grid>
      </Grid>
    </div>
  );
}

export default Content1;
