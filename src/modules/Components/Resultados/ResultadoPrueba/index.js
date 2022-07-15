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
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
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
});

const datos = {
  idPaciente: "1",
  nombrePaciente: "Héctor Emilio Velasquez Perez",
  edadPaciente: 14,
  sexoPaciente: "masculino",
  medicoPaciente: "Shurick Emanuel",
  fechaIngresoPaciente: "27-06-22",
  horaIngresoPaciente: "9:15",
  horaOrdenPaciente: "10:20",
  fechaOrdenPaciente: "27-07-22",
  ordenID: "sdfa33e12das",
  estudio: "UROANÁLISIS",
  pesoPaciente: 53,
  alturaPaciente: 1.5,
  imcPaciente: 23.6,
  frecuenciaPaciente: 150,
  temperaturaPaciente: 36.6,
  presionPaciente: 84,
  saturacionPaciente: 95,
  diagnosticoPaciente: "se tomo la prueba porque presenta síntomas de COVID",
  TratamientoPaciente: "",
};

const {
  idPaciente,
  nombrePaciente,
  edadPaciente,
  sexoPaciente,
  medicoPaciente,
  fechaIngresoPaciente,
  horaIngresoPaciente,
  fechaOrdenPaciente,
  horaOrdenPaciente,
  ordenID,
  estudio,
  pesoPaciente,
  alturaPaciente,
  imcPaciente,
  temperaturaPaciente,
  presionPaciente,
  saturacionPaciente,
  frecuenciaPaciente,
  diagnosticoPaciente,
  TratamientoPaciente,
} = datos;

const IMC = () => {
  return pesoPaciente / alturaPaciente;
};

function ResultadoPrueba() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
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
              datoPaciente2={`${idPaciente}`}
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
                <Text style={styles.subtituloSection1}>CUADRO CLÍNICO</Text>
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
              datoPaciente1={`${IMC().toFixed(1)} `}
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
          <View>
            <Text>
              DIAGNÓSTICO: <Text>{diagnosticoPaciente}</Text>
            </Text>
            <Text>
              TRATAMIENTO: <Text>{TratamientoPaciente}</Text>
            </Text>
          </View>

          <View>
            <Text>FECHA INGRESO: {fechaIngresoPaciente} </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
              <Text style={{ textAlign: "center" }}>PARÁMETRO</Text>
            </View>
            <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
              <Text style={{ textAlign: "center" }}>RESULTADO</Text>
            </View>
            {/* <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
              <Text style={{ textAlign: "center" }}>UNIDAD</Text>
            </View> */}
            <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
              <Text style={{ textAlign: "center" }}>REFERENCIA</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
              <Text style={{ textAlign: "center" }}>
                ANTÍGENO DE SARS-COV 2
              </Text>
            </View>
            <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
              <Text style={{ textAlign: "center" }}>POSITIVO</Text>
            </View>
            {/* <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
              <Text style={{ textAlign: "center" }}>UNIDAD</Text>
            </View> */}
            <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
              <Text style={{ textAlign: "center" }}>NEGATIVO</Text>
            </View>
          </View>
          <View>
            <Text>
              Interpretación de la prueba: <Text> SÍ</Text> se encontró
              evidencia de infección por Sars-Cov-2 en la muestra analizada
            </Text>
            <Text>
              SENSIBILIDAD DE LA PRUEBA 99.68%, LOTE:202201162, REF.: K511416D,
              MARCA: REALY TECH
            </Text>
            <Text>
              STA PRUEBA NO TIENE REACCIÓN CRUZADA E INTERFERENCIA CON NINGUNA
              OTRA SUSTANCIA, SU REACCIÓN SE DEBE ESPECÍFICAMENTE A SARS-COV2.
            </Text>
            <View>
              <Text>METODO: Inmunocromatografia específica</Text>
              <Text>Muestra: Nariz</Text>
            </View>
            <View>
              <Text>
                RESULTADOS VALIDADOS POR: Q.F.B. BRENDA MONSERRAT GAZGA DIAZ
              </Text>
            </View>
            <View>
              <Text>
                IMPORTANTE: Los resultados incluidos en este reporte no
                sustituyen la consulta médica. Su médico es la persona indicada
                y con el conocimiento adecuado para la interpretación y análisis
                de su resultado.
              </Text>
            </View>

            <View>
              <Text>
                Responsable sanitario: Q.F.B. Jorge Arturo Chávez Zavala
              </Text>
              <Text>Cédula profesional 2687059</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text style={{ textAlign: "center" }}>
                  WWW.LABORATORIOSSANMATEO.COM
                </Text>
              </View>
              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text style={{ textAlign: "center" }}>9511028474</Text>
              </View>
              {/* <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
              <Text style={{ textAlign: "center" }}>UNIDAD</Text>
            </View> */}
              <View
                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
              >
                <Text style={{ textAlign: "center" }}>
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
