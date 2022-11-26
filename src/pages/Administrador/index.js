import React from "react";
import { withAuthenticator, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth, I18n } from "aws-amplify";
import { useEffect } from "react";
import { useState } from "react";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import LayoutAdministrador from "../../modules/LayoutAdministrador/index";
import LayoutAdmin2 from "../../modules/LayoutAdmin2";
I18n.putVocabularies(translations);

I18n.putVocabularies({
  es: {
    "Sign In": "Iniciar Sesión",
    "Sign Up": "Regístrate",
    "Create Account": "Regístrate",
    "Your code is on the way. To log in, enter the code we emailed to":
      "Se envió el código de confirmación al email proporcionado.",
    "It may take a minute to arrive.": "Puede tardar unos minutos en llegar.",
    "Invalid verification code provided, please try again.":
      "Código de verificación inválido, por favor intenta de nuevo.",
    "Send code": "Enviar código",
    "Cannot reset password for the user as there is no registered/verified email or phone_number":
      "No se puede reestablecer la contraseña para el usuario ya que no se encuentra registrado/ el email no está verificado o tampoco el número de teléfono.",
  },
});

function Administrador() {
  const [authUser, setAuthUser] = useState("");
  const sub = authUser?.attributes?.sub;

  const navigate = useNavigate();

  const fetchUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser();
    setAuthUser(authUser);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  if (authUser === undefined) {
    return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Spin />
      </div>
    );
  }

  const SignOut = () => {
    Auth.signOut();
    navigate("/", { replace: true });
  };

  console.log('hola user', authUser);

  let hector = authUser?.signInUserSession?.idToken?.payload["cognito:groups"];
  if (hector === undefined) {
    return (
      <Container className="mt-2 mb-2">
        <h3>
          Hola {authUser?.attributes?.email} no eres Admin, por favor si eres
          Paciente ve a Menú y da click en Paciente y si no regresa a Inicio.
        </h3>

        <Button onClick={SignOut} variant="warning">
          Cerrar Sesión
        </Button>
      </Container>
    );
  }

  if (hector[0] === "Quimicos") {
    return (
      <>
        <LayoutAdmin2 signOut={SignOut} user={authUser} sub={sub} />
      </>
    );
  }

  if (hector[0] === "Admin") {
    return (
      <>
        <LayoutAdministrador signOut={SignOut} user={authUser} sub={sub} />
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

export default withAuthenticator(Administrador);
