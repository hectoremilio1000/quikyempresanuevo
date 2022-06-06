import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Auth, Hub } from "aws-amplify";
import { Container } from "react-bootstrap";
import FormOtro from "../../components/Admin/Form/FormOtro";
import { Navigate, useNavigate } from "react-router-dom";
import LayoutAdministrador from "../../components/EnrutarUsuarioComponents/LayoutAdministador";

function EnrutarUsuario() {
  const [user, setUser] = useState(null);
  const [datosUsuario, setDatosUsuario] = useState({
    sub: "",
    email: "",
    grupo: "",
  });

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
      const data = await Auth.currentAuthenticatedUser({ bypassCache: true });
      setUser(data);
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
      <>
        <LayoutAdministrador />

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
          Cerrar Sesión
        </Button>
      </>
    );
  }

  return <FormOtro setUser={setUser} />;

  // if (user && tipo?.includes("Doctor")) {
  //   <>hola doctor</>;
  // }
  // if (user && tipo?.includes("Paciente")) {
  //   <>hola paciente</>;
  // }
  // if (user && tipo?.includes("Ninguno")) {
  //   <>hola ninguno</>;
  // }
}

export default EnrutarUsuario;
