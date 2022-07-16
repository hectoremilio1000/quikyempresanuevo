import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import SectionTop from "./SectionTop";
import DatosAntropometricos from "./DatosAntropometricos";

const styles = StyleSheet.create({
  page: {
    color: "#000000",
    marginRight: 20,
  },
  sectionLogo: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  logo1: {
    width: 150,
    height: 50,
  },

  section1: {
    margin: 8,
    padding: 12,
    marginHorizontal: 10,
  },
  tituloSection1: {
    fontSize: 13,
    fontWeight: "bolder",
    textAlign: "center",
  },
  viewer: {
    width: "100%", //the pdf viewer will take up all of the width and height
    height: "100%",
  },
  divider: {
    borderTop: "5px solid #2DA3CC",

    marginHorizontal: 20,
  },

  container: {
    flexDirection: "row",
    paddingTop: 2,
  },

  textoTop: {
    fontSize: 11,
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
  subtituloSection1: {
    fontSize: 10,
    textAlign: "center",
    fontWeight: 800,
    textDecoration: "underline",
  },
  section3: {
    marginHorizontal: 20,
  },
  textTitulosCuadro: {
    fontSize: 10,
  },
  textCuadro: {
    fontSize: 9,
  },
  nombrePrueba: {
    fontSize: 10,
    textDecoration: "underline",
    textAlign: "center",
  },
  section4: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  textoTabla: {
    textAlign: "center",
    fontSize: 10,
  },
  interpretacionContainer: {
    marginVertical: 10,
  },
  tituloInterpretacion: {
    fontSize: 11,
  },
  textoInterpretacion: {
    fontSize: 10,
  },
  section5: {
    marginHorizontal: 20,
  },
  datosPrueba: {
    fontSize: 9,
  },
  datosValidados: {
    textAlign: "right",
    fontSize: 9,
  },
  firmaQuimico: {
    width: 150,
    height: 100,
    alignContent: "center",
  },
});

// const datos = {
//   idPaciente: "1",
//   nombrePaciente: "Héctor Emilio Velasquez Perez",
//   edadPaciente: 14,
//   sexoPaciente: "masculino",
//   medicoPaciente: "Shurick Emanuel",
//   fechaIngresoPaciente: "27-06-22",
//   horaIngresoPaciente: "9:15",
//   horaOrdenPaciente: "10:20",
//   fechaOrdenPaciente: "27-07-22",
//   ordenID: "sdfa33e12das",
//   pesoPaciente: 53,
//   alturaPaciente: 1.5,
//   imcPaciente: 23.6,
//   frecuenciaPaciente: 150,
//   temperaturaPaciente: 36.6,
//   presionPaciente: 84,
//   saturacionPaciente: 95,
//   diagnosticoPaciente: "se tomo la prueba porque presenta síntomas de COVID",
//   tratamientoPaciente: "Antibiótico cada 8 horas",
//   sintomasPaciente: "Le duele la cabeza",
//   categoríaPrueba: "INMUNOLOGÍA",
//   nombrePrueba: "ANTÍGENO DE SARS-COV 2 (PRUEBA RÁPIDA COVID)",
//   metodoPrueba: "Inmunocromatografia específica",
//   muestraPrueba: "Exudado Nasofaríngeo",
//   resultadoPrueba: "POSITIVO",
//   nombreQuimicaResponsable: "BRENDA MONSERRAT GAZGA DIAZ",
// };

// const {
//   idPaciente,
//   nombrePaciente,
//   edadPaciente,
//   sexoPaciente,
//   medicoPaciente,
//   fechaIngresoPaciente,
//   horaIngresoPaciente,
//   fechaOrdenPaciente,
//   horaOrdenPaciente,
//   ordenID,
//   pesoPaciente,
//   alturaPaciente,
//   imcPaciente,
//   temperaturaPaciente,
//   presionPaciente,
//   saturacionPaciente,
//   frecuenciaPaciente,
//   diagnosticoPaciente,
//   tratamientoPaciente,
//   sintomasPaciente,
//   categoríaPrueba,
//   nombrePrueba,
//   metodoPrueba,
//   muestraPrueba,
//   resultadoPrueba,
//   nombreQuimicaResponsable,
// } = datos;

// const IMC = () => {
//   return pesoPaciente / alturaPaciente;
// };

function ResultadoPrueba({ datosPacienteNuevo }) {
  const {
    nombrePaciente,
    edadPaciente,
    sexoPaciente,
    fechaIngresoPaciente,
    horaIngresoPaciente,
    fechaOrdenPaciente,
    horaOrdenPaciente,
    ordenID,
    nombrePrueba,
    pesoPaciente,
    alturaPaciente,
    IMCPaciente,
    frecuenciaPaciente,
    temperaturaPaciente,
    presionPaciente,
    saturacionPaciente,
    categoríaPrueba,
    diagnosticoPaciente,
    tratamientoPaciente,
    sintomasPaciente,
    metodoPrueba,
    nombreQuimicaResponsable,
    resultadoPrueba,
    muestraPrueba,
    medicoPaciente,
  } = datosPacienteNuevo;
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="letter" style={styles.page}>
          <View style={styles.sectionLogo}>
            <View>
              <Image
                style={styles.logo1}
                src={
                  "https://quikyempresanuevo-storage-03418b58110747-dev.s3.amazonaws.com/public/images/logoSanMateo/Asset+1-8.png"
                }
              />
            </View>
          </View>

          <View style={styles.section1}>
            <SectionTop
              dato1="NOMBRE DEL PX:"
              datoPaciente1={nombrePaciente}
              dato2="FECHA INGRESO:"
              datoPaciente2={`${fechaIngresoPaciente}`}
            />
            <SectionTop
              dato1="EDAD:"
              datoPaciente1={`${edadPaciente} Años`}
              dato2="HORA INGRESO:"
              datoPaciente2={`${horaIngresoPaciente}`}
            />
            <SectionTop
              dato1="SEXO:"
              datoPaciente1={`${sexoPaciente}`}
              dato2="FECHA RESULTADO:"
              datoPaciente2={`${fechaOrdenPaciente}`}
            />
            <SectionTop
              dato1="MÉDICO:"
              datoPaciente1={`${medicoPaciente}`}
              dato2="ID:"
              datoPaciente2={`${ordenID}`}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.section1}>
            <Text style={styles.tituloSection1}>Información del Paciente</Text>
            <View style={styles.container}>
              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text style={styles.subtituloSection1}>
                  DATOS ANTROPOMÉTRICOS
                </Text>
              </View>
              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text style={styles.subtituloSection1}>SIGNOS VITALES</Text>
              </View>
            </View>

            <DatosAntropometricos
              dato1="TALLA:"
              datoPaciente1={`${alturaPaciente} m.`}
              dato2="TEMPERATURA:"
              datoPaciente2={`${temperaturaPaciente} g`}
            />
            <DatosAntropometricos
              dato1="PESO:"
              datoPaciente1={`${pesoPaciente} kg.`}
              dato2="PRESIÓN ARTERIAL:"
              datoPaciente2={`${presionPaciente} HHmg`}
            />
            <DatosAntropometricos
              dato1="IMC:"
              datoPaciente1={`${IMCPaciente} `}
              dato2="FRECUENCIA CARDIACA"
              datoPaciente2={`${frecuenciaPaciente} bpm`}
            />
            <DatosAntropometricos
              dato1=""
              datoPaciente1={` `}
              dato2="SATURACIÓN OXÍGENO"
              datoPaciente2={`${saturacionPaciente} O2Sat`}
            />
          </View>
          <View style={styles.section3}>
            <Text style={styles.subtituloSection1}>CUADRO CLÍNICO</Text>
            <Text style={styles.textTitulosCuadro}>
              SÍNTOMAS:{" "}
              <Text style={styles.textCuadro}>{sintomasPaciente}</Text>
            </Text>
            <Text style={styles.textTitulosCuadro}>
              DIAGNÓSTICO:{" "}
              <Text style={styles.textCuadro}>{diagnosticoPaciente}</Text>
            </Text>
            <Text style={styles.textTitulosCuadro}>
              TRATAMIENTO:{" "}
              <Text style={styles.textCuadro}>{tratamientoPaciente}</Text>
            </Text>
          </View>

          <View style={styles.section4}>
            <Text style={styles.tituloSection1}>{categoríaPrueba} </Text>
            <Text style={styles.nombrePrueba}>{nombrePrueba} </Text>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#CCDE00",

                marginTop: 10,
              }}
            >
              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text style={styles.textoTabla}>PARÁMETRO</Text>
              </View>
              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text style={styles.textoTabla}>RESULTADO</Text>
              </View>

              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text style={styles.textoTabla}>REFERENCIA</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text style={styles.textoTabla}>ANTÍGENO DE SARS-COV 2</Text>
              </View>
              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text style={[styles.textoTabla, { color: "red" }]}>
                  {resultadoPrueba}
                </Text>
              </View>

              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text style={styles.textoTabla}>NEGATIVO</Text>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.textTitulosCuadro}>
                MÉTODO: <Text style={styles.textCuadro}>{metodoPrueba}</Text>
              </Text>
              <Text style={styles.textTitulosCuadro}>
                MUESTRA: <Text style={styles.textCuadro}>{muestraPrueba}</Text>
              </Text>
              <View style={styles.interpretacionContainer}>
                <Text style={styles.tituloInterpretacion}>
                  Interpretación de la prueba:
                  <Text style={styles.textoInterpretacion}>
                    {" "}
                    El paciente resulto{" "}
                    <Text
                      style={
                        resultadoPrueba === "POSITIVO"
                          ? { color: "red", textDecoration: "underline" }
                          : { color: "#000", textDecoration: "underline" }
                      }
                    >
                      {" "}
                      {resultadoPrueba}
                    </Text>{" "}
                    por Sars-Cov-2 en la muestra analizada.
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.section5}>
            <View style={{ marginVertical: 5 }}>
              <Text style={styles.datosPrueba}>
                SENSIBILIDAD DE LA PRUEBA 99.68%, LOTE:202201162, REF.:
                K511416D, MARCA: REALY TECH
              </Text>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={styles.datosValidados}>
                RESULTADOS VALIDADOS POR: Q.F.B.{nombreQuimicaResponsable}
              </Text>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={styles.datosPrueba}>
                NOTA: Los valores de referencia son un indicador del resultado
                que se espera de un paciente clínicamente sano.
              </Text>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={styles.datosPrueba}>
                IMPORTANTE: Los resultados incluidos en este reporte no
                sustituyen la consulta médica. Su médico es la persona indicada
                y con el conocimiento adecuado para la interpretación y análisis
                de su resultado.
              </Text>
            </View>

            <View>
              <View
                style={{
                  flexDiection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={styles.firmaQuimico}
                  src={
                    "https://quikyempresanuevo-storage-03418b58110747-dev.s3.amazonaws.com/public/images/firmaQuimico.png"
                  }
                />
              </View>
              <Text
                style={{
                  fontSize: 13,
                  textDecoration: "underline",
                  textAlign: "center",
                  marginTop: -20,
                }}
              >
                Responsable sanitario: Q.F.B. Jorge Arturo Chávez Zavala
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  textDecoration: "underline",
                  textAlign: "center",
                }}
              >
                Cédula profesional 2687059
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30,
                backgroundColor: "#34B1F0",
                height: 30,
                alignItems: "center",
              }}
            >
              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text
                  style={{ textAlign: "center", fontSize: 8, color: "white" }}
                >
                  WWW.LABORATORIOSSANMATEO.COM
                </Text>
              </View>
              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text
                  style={{ textAlign: "center", fontSize: 8, color: "white" }}
                >
                  9511028474
                </Text>
              </View>

              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text
                  style={{ textAlign: "center", fontSize: 8, color: "white" }}
                >
                  SERVICIO A DOMICILIO SIN COSTO EXTRA
                </Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default ResultadoPrueba;
