import { Typography } from "antd";
import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function SignUp({ updateFormState, signUp }) {
  return (
    <div style={styles.container}>
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
      <input
        name="email"
        onChange={e => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="Email"
      />
      <div>
        <Typography.Title level={5}>Usuario y contraseña</Typography.Title>
        <Typography.Text type="secondary">
          - El usuario debe ser el mismo que el email <br />
        </Typography.Text>
        <Typography.Text>
          La contraseña debe contener:
          <br />
        </Typography.Text>
        <Typography.Text type="secondary">
          - Mínimo 8 caracteres <br />- Mayúsculas y minúsculas <br />- Número{" "}
          <br />- Caracter especial (%,$,#,...)
        </Typography.Text>
      </div>
      <Button onClick={signUp} title="Registrarse" />
    </div>
  );
}

export default SignUp;
