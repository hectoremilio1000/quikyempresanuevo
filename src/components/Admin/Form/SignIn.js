import React from "react";

import Button from "./Button";
import { styles } from "./Form";

function SignIn({ signIn, updateFormState }) {
  return (
    <div style={styles.container}>
      <p
        style={{
          maxWidth: 300,
          fontSize: 15,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Por favor ingresa tus datos para Iniciar Sesión.
      </p>
      <div>
        <p style={{ maxWidth: 300, fontSize: 12 }}>
          Si eres Doctor o Paciente, recuerda solicitar tu clave de acceso, sólo
          da click <a href="https://wa.me/+5219511028474">aquí</a>
        </p>
      </div>
      <input
        name="username"
        onChange={e => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="Usuario"
      />
      <input
        type="password"
        name="password"
        onChange={e => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="Contraseña"
      />
      <Button onClick={signIn} title="Iniciar sesión" />
    </div>
  );
}

export default SignIn;
