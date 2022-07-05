import { Text } from "@aws-amplify/ui-react";
import React from "react";

function TituloCustom({ titulo }) {
  return (
    <Text variation="primary" style={styles.text}>
      {titulo}
    </Text>
  );
}

const styles = {
  text: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default TituloCustom;
