import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function ForgotPassword(props) {
  return (
    <div style={styles.container}>
      <input
        name="username"
        placeholder="Usuario"
        onChange={e => {
          e.persist();
          props.updateFormState(e);
        }}
        style={styles.input}
      />
      <Button onClick={props.forgotPassword} title="Reestablecer contraseña" />
    </div>
  );
}

export default ForgotPassword;
