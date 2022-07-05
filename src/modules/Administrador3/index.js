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

  // useEffect(() => {
  //   const listener = data => {
  //     if (data.payload.event === "signIn" || data.payload.event === "signOut") {
  //       checkUser();
  //     }
  //   };
  //   Hub.listen("auth", listener);
  //   return () => Hub.remove("auth", listener);
  // }, []);

  if (authUser === undefined) {
    return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Spin />
      </div>
    );
  }

  if (sub && sub === "dcd1e81a-2919-4359-a851-987f926932b1") {
    return <LayoutAdmin2 signOut={SignOut} user={authUser} sub={sub} />;
  } else {
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
}

//   authUser ? (<View backgroundColor={tokens.colors.background.secondary} padding={tokens.space.medium} style={styles.root}>
//   <Card style={styles.container}>
//     <h2>Hola Admin</h2>
//     <div style={styles.subcontainer}></div>
//   </Card>
// </View>) : <></>

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
