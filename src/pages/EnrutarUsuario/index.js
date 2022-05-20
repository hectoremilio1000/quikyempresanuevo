import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Auth, Hub } from "aws-amplify";
import { Container } from "react-bootstrap";
import FormOtro from "../../components/Admin/Form/FormOtro";
import { Navigate, useNavigate } from "react-router-dom";
import LayoutAdministrador from "../../components/EnrutarUsuarioComponents/LayoutAdministador";

function EnrutarUsuario() {
  const [user, setUser] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    checkUser();
    Hub.listen("auth", data => {
      const { payload } = data;
      if (payload.event === "signOut") {
        setUser(null);
      }
    });
  }, []);

  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  function signOut() {
    Auth.signOut()
      .then(navigate("/", { replace: true }))
      .catch(err => console.log("error signout:", err));
  }

  if (user) {
    return (
      <Container>
        <LayoutAdministrador user={user} />

        <Button
          onClick={signOut}
          style={{
            width: "100%",
            background: "#f9f102",
            fontWeight: 600,
            border: "2px",
            borderColor: "#000",
            borderStyle: "solid",
          }}
        >
          Salir
        </Button>
      </Container>
    );
  }

  return <FormOtro setUser={setUser} />;
}

export default EnrutarUsuario;
