import React, { useState } from "react";
import { Auth } from "aws-amplify";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ConfirmSignUp from "./ConfirmSignUp";
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordSubmit from "./ForgotPasswordSubmit";
import { message } from "antd";

async function signIn({ username, password }, setUser) {
  try {
    const user = await Auth.signIn(username, password);
    const userInfo = { username: user.username, ...user.attributes };
    setUser(userInfo);
    message.success(
      {
        content: "Hola",
        duration: 4,
      },
      4000
    );
  } catch (err) {
    setTimeout(() => {
      message.error({ content: "No existe el usuario", duration: 4 }, 4000);
    });
  }
}

async function signUp({ username, password, email }, updateFormType) {
  try {
    await Auth.signUp({
      username,
      password,
      attributes: { email },
    });
    message.success(
      {
        content:
          "Se ha creado tu cuenta correctamente, revisa tu correo e ingresa el número de confirmación",
        duration: 4,
      },
      4000
    );

    updateFormType("confirmSignUp");
  } catch (err) {
    setTimeout(() => {
      message.error(
        {
          content: "Cumple con los requisitos de usuario y contraseña",
          duration: 4,
        },
        4000
      );
    });
  }
}

async function confirmSignUp({ username, confirmationCode }, updateFormType) {
  try {
    await Auth.confirmSignUp(username, confirmationCode);
    updateFormType("signIn");
    message.success(
      {
        content: "Usuario registrado correctamente, inicia sesión",
        duration: 4,
      },
      4000
    );
  } catch (err) {
    message.error(
      {
        content:
          "Ingresa el código de confirmación que mandamos a tu correo, si tienes dudas escríbenos por whats",
        duration: 4,
      },
      4000
    );
  }
}

async function forgotPassword({ username }, updateFormType) {
  try {
    await Auth.forgotPassword(username);
    updateFormType("forgotPasswordSubmit");
    message.success(
      {
        content: "Se ha enviado un código de confirmación a tu correo",
        duration: 4,
      },
      4000
    );
  } catch (err) {
    message.error(
      {
        content: "error al reestablecer la constraseña",
        duration: 4,
      },
      4000
    );
  }
}

async function forgotPasswordSubmit(
  { username, confirmationCode, password },
  updateFormType
) {
  try {
    await Auth.forgotPasswordSubmit(username, confirmationCode, password);
    updateFormType("signIn");
    message.success(
      {
        content:
          "La contraseña se ha creado correctamente, por favor inicia sesión",
        duration: 4,
      },
      4000
    );
  } catch (err) {
    message.error("error al reestablecer la contraseña", err);
  }
}

const initialFormState = {
  username: "",
  password: "",
  email: "",
  confirmationCode: "",
};

function Form(props) {
  const [formType, updateFormType] = useState("signIn");
  const [formState, updateFormState] = useState(initialFormState);

  function updateForm(event) {
    const newFormState = {
      ...formState,
      [event.target.name]: event.target.value,
    };
    updateFormState(newFormState);
  }

  function renderForm() {
    switch (formType) {
      case "signUp":
        return (
          <SignUp
            signUp={() => signUp(formState, updateFormType)}
            updateFormState={e => updateForm(e)}
          />
        );
      case "confirmSignUp":
        return (
          <ConfirmSignUp
            confirmSignUp={() => confirmSignUp(formState, updateFormType)}
            updateFormState={e => updateForm(e)}
          />
        );
      case "signIn":
        return (
          <SignIn
            signIn={() => signIn(formState, props.setUser)}
            updateFormState={e => updateForm(e)}
          />
        );
      case "forgotPassword":
        return (
          <ForgotPassword
            forgotPassword={() => forgotPassword(formState, updateFormType)}
            updateFormState={e => updateForm(e)}
          />
        );
      case "forgotPasswordSubmit":
        return (
          <ForgotPasswordSubmit
            forgotPasswordSubmit={() =>
              forgotPasswordSubmit(formState, updateFormType)
            }
            updateFormState={e => updateForm(e)}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div>
      {renderForm()}
      {formType === "signUp" && (
        <p style={styles.toggleForm}>
          Ya tienes cuenta?{" "}
          <span style={styles.anchor} onClick={() => updateFormType("signIn")}>
            Iniciar sesión
          </span>
        </p>
      )}
      {formType === "signIn" && (
        <>
          <p style={styles.toggleForm}>
            Regístrate{" "}
            <span
              style={styles.anchor}
              onClick={() => updateFormType("signUp")}
            >
              Da click para registrarte
            </span>
          </p>
          <p style={{ ...styles.toggleForm, ...styles.resetPassword }}>
            Has olvidado tu contraseña?{" "}
            <span
              style={styles.anchor}
              onClick={() => updateFormType("forgotPassword")}
            >
              Reestablecer contraseña
            </span>
          </p>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 45,
    marginTop: 8,
    width: 300,
    maxWidth: 300,
    padding: "0px 8px",
    fontSize: 16,
    outline: "none",
    border: "none",
    borderBottom: "2px solid rgba(0, 0, 0, .3)",
  },
  toggleForm: {
    fontWeight: "600",
    padding: "0px 25px",
    marginTop: "15px",
    marginBottom: 0,
    textAlign: "center",

    color: "rgba(0, 0, 0, 0.6)",
  },
  resetPassword: {
    marginTop: "5px",
  },
  anchor: {
    color: "#006bfc",
    cursor: "pointer",
  },
};

export { styles, Form as default };
