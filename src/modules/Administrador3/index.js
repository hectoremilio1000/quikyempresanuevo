import React, { useState, useEffect } from "react";
import {
  Card,
  Image,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  useTheme,
  Tabs,
  TabItem,
} from "@aws-amplify/ui-react";

import { Auth, Hub } from "aws-amplify";
import { Button, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import LayoutAdmin2 from "../LayoutAdmin2";
import { Container } from "react-bootstrap";

function Administrador3() {
  const [authUser, setAuthUser] = useState(undefined);

  const sub = authUser?.attributes?.sub;

  const { tokens } = useTheme();

  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      setAuthUser(authUser);
    } catch (error) {
      setAuthUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const SignOut = () => {
    Auth.signOut();
    navigate("/admin/signin", { replace: true });
  };

  if (authUser === undefined) {
    return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Spin />
      </div>
    );
  }

  let hector = authUser?.signInUserSession?.idToken?.payload["cognito:groups"];
  console.log(hector);
  if (hector === undefined) {
    return (
      <Container className="mt-2 mb-2">
        <h3>
          Hola {authUser.attributes.email} no eres Admin, por favor si eres
          Paciente ve a Menú y da click en Paciente y si no regresa a Inicio.
        </h3>

        <Button onClick={SignOut} variant="warning">
          Cerrar Sesión
        </Button>
      </Container>
    );
  }

  if (hector[0] === "Admin") {
    return (
      <>
        <LayoutAdmin2 signOut={SignOut} user={authUser} sub={sub} />
      </>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: 600,
    maxWidth: 500,
  },
  subcontainer: {},
};

export default Administrador3;
