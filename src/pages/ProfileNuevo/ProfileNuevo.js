import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Button } from "antd";
import { Auth, Hub } from "aws-amplify";
import { Navigate } from "react-router-dom";

function ProfileNuevo() {
  // console.log(signOut);
  // const [authUser, setAuthUser] = useState(null);

  // async function checkUser() {
  //   try {
  //     const data = await Auth.currentUserPoolUser();
  //     const userInfo = { username: data.username, ...data.attributes };
  //     setAuthUser(userInfo);
  //   } catch (err) {
  //     console.log("error: ", err);
  //   }
  // }

  // useEffect(() => {
  //   checkUser();
  //   Hub.listen("auth", data => {
  //     const { payload } = data;
  //     if (payload.event === "signOut") {
  //       setAuthUser(null);
  //     }
  //   });
  // }, []);

  // if (authUser) {
  //   return (
  //     <Container>
  //       <h1>profile nuevo</h1>
  //       <Button onClick={signOut}>Salir</Button>
  //     </Container>
  //   );
  // }

  async function signOut() {
    try {
      await Auth.signOut();
      <Navigate to="/" />;
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <Container>
      No hay usuario
      <Button onClick={signOut}>Salir</Button>
    </Container>
  );
}

export default ProfileNuevo;
