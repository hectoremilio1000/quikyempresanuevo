import React from "react";
import { withAuthenticator, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth, I18n } from "aws-amplify";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import LayoutAdmin2 from '../../modules/LayoutAdmin2/index';
I18n.putVocabularies(translations);
I18n.setLanguage("es");
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

function Administrador({ signOut, user }) {
  const [authUser, setAuthUser] = useState("");
  const sub = authUser?.attributes?.sub;

  const fetchUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser();
    setAuthUser(authUser);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  if (sub && sub === "dd2c420b-1088-41b1-8712-98e02ea5911b") {
    return <LayoutAdmin2 signOut={signOut} user={user} sub={sub}/>;
  } else {
    return (
      <Container className="mt-2 mb-2">
        <h3>
          Hola {user.attributes.email} no eres Admin por favor si eres
          Paciente ve a Menú y da click en Paciente y si no regresa a Inicio.
        </h3>

        <Button onClick={signOut} variant="warning">
          Cerrar Sesión
        </Button>
      </Container>
    );
  }
}

export default withAuthenticator(Administrador);
