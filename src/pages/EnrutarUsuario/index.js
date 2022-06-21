import React from "react";
import { withAuthenticator, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth, I18n, DataStore } from "aws-amplify";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { User } from "../../models";
import ProfileNuevo from "../../components/EnrutarUsuarioNuevo/ProfileNuevo";
import ChecarVista from "../../components/EnrutarUsuarioNuevo/ChecarVista";

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

function EnrutarUsuario({ signOut, user }) {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const sub = authUser?.attributes?.sub;

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(setAuthUser);
  }, []);

  useEffect(() => {
    if (sub) {
      DataStore.query(User, user => user.sub("eq", sub)).then(users =>
        setDbUser(users[0])
      );
    }
    return;
  }, [sub]);

  console.log(dbUser);

  const role = dbUser?.role;

  if (dbUser && role) {
    return (
      <>
        <ChecarVista role={role} dbUser={dbUser} />
        <Button onClick={signOut} variant="warning" style={{ width: "100%" }}>
          Cerrar Sesión
        </Button>
      </>
    );
  } else {
    return (
      <>
        <ProfileNuevo sub={sub} setDbUser={setDbUser} dbUser={dbUser} />
        <Button onClick={signOut} variant="warning" style={{ width: "100%" }}>
          Cerrar Sesión
        </Button>
      </>
    );
  }
}

export default withAuthenticator(EnrutarUsuario);
