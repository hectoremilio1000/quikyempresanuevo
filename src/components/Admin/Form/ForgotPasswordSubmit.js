import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function ForgotPasswordSubmit(props) {
  return (
    <div style={styles.container}>
      <input
        name="confirmationCode"
        placeholder="Código de confirmación"
        onChange={e => {
          e.persist();
          props.updateFormState(e);
        }}
        style={styles.input}
      />
      <input
        name="password"
        placeholder="Nueva contraseña"
        type="password"
        onChange={e => {
          e.persist();
          props.updateFormState(e);
        }}
        style={styles.input}
      />
      <Button
        onClick={props.forgotPasswordSubmit}
        title="Guardar nueva contraseña"
      />
    </div>
  );
}

export default ForgotPasswordSubmit;
