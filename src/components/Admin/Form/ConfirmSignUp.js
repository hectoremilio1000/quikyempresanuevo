import { Typography } from "antd";
import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function ConfirmSignUp(props) {
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
      <div>
        <Typography.Text type="danger">
          <br /> Revisa tu correo y escribe el código
        </Typography.Text>
      </div>
      <Button onClick={props.confirmSignUp} title="Confirmar registro" />
    </div>
  );
}

export default ConfirmSignUp;
