import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 2,
  },

  textoTop: {
    fontSize: 9,
    textAlign: "center",
    fontWeight: 800,
  },
  section2: {
    margin: 20,
  },
  datosTopPaciente: {
    fontSize: 8,
    fontWeight: "normal",
  },
});

function DatosAntropometricos({
  dato1,
  datoPaciente1,
  dato2,
  datoPaciente2,
  dato3,
  datoPaciente3,
}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
        <Text style={styles.textoTop}>
          {dato1}
          <Text style={styles.datosTopPaciente}>{datoPaciente1}</Text>
        </Text>
      </View>
      <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
        <Text style={styles.textoTop}>
          {dato2}
          <Text style={styles.datosTopPaciente}>{datoPaciente2}</Text>
        </Text>
      </View>
    </View>
  );
}

export default DatosAntropometricos;
