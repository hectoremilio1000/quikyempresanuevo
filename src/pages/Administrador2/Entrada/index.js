import React, { useState, useEffect } from "react";
import LayoutAdmin2 from "../../../modules/LayoutAdmin2/index";
import { Button, Container } from "react-bootstrap";

import { Auth } from "aws-amplify";

function Entrada({ signOut, user }) {
  console.log(user);
  const sub = user?.attributes?.sub;

  if (sub === "15a4d559-2e6a-43fd-87e5-6df76a46a16c") {
    return <LayoutAdmin2 signOut={Auth.signOut} user={user} sub={sub} />;
  } else {
    return (
      <Container className="mt-2 mb-2">
        <h3>
          Hola {user.attributes.email} no eres Admin por favor si eres Paciente
          ve a Menú y da click en Paciente y si no regresa a Inicio.
        </h3>

        <Button onClick={Auth.signOut} variant="warning">
          Cerrar Sesión
        </Button>
      </Container>
    );
  }
}
export default Entrada;
