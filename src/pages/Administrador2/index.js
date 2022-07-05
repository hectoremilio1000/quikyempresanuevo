import React from "react";
import {
  translations,
  withAuthenticator,
  Authenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth, I18n } from "aws-amplify";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import LayoutAdmin2 from "../../modules/LayoutAdmin2/index";
I18n.putVocabularies(translations);
I18n.setLanguage("es");
I18n.putVocabularies({
  es: {
    "Sign In": "Iniciar Sesión",
    "Nombre de usuario": "Email",
    Username: "Email",
    Password: "Contraseña hacerla",
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

  console.log(sub);

  if (sub && sub === "dc26378c-8d39-4138-9af4-ee6dc37d6c4f") {
    return <LayoutAdmin2 signOut={signOut} user={user} sub={sub} />;
  } else {
    return (
      <Container className="mt-2 mb-2">
        <h3>
          Hola {user.attributes.email} no eres Admin por favor si eres Paciente
          ve a Menú y da click en Paciente y si no regresa a Inicio.
        </h3>

        <Button onClick={signOut} variant="warning">
          Cerrar Sesión
        </Button>
      </Container>
    );
  }
}

const formfields = {
  signIn: {
    username: {
      labelHidden: true,
      placeholder: "Correo Electrónico",
    },
    email: {
      labelHidden: true,
      placeholder: "Correo Electrónico",
    },
    password: {
      labbelHiden: true,
      placeholder: "Contraseña1",
    },
  },
  signUp: {
    password: {
      labelHidden: false,
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      labelHidden: false,
      label: "Confirm Password:",
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      labelHidden: false,
      placeholder: "Enter your Password:",
    },
  },
  resetPassword: {
    username: {
      labelHidden: false,
      placeholder: "Enter your email:",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      labelHidden: false,
      placeholder: "Enter your Confirmation Code:",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      labelHidden: false,
      placeholder: "Enter your Password Please:",
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amplify_qr_test_user",
    },
    confirmation_code: {
      labelHidden: false,
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      labelHidden: false,
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
};

export default withAuthenticator(Administrador);
