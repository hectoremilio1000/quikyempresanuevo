import React, { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
  Input,
  Button,
  Select,
  message,
  InputNumber,
  DatePicker,
  TimePicker,
} from "antd";
import { v4 as uuidv4 } from "uuid";
import { DataStore, Auth, Storage } from "aws-amplify";
import { Container } from "react-bootstrap";
import config from "../../../../aws-exports";

import { useNavigate } from "react-router-dom";
import { Paciente } from "../../../../models";

//icono
import { PlusCircleOutlined } from "@ant-design/icons";
import ResultadoPrueba from "../ResultadoPrueba";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function CrearResultado() {
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [edadPaciente, setEdadPaciente] = useState("");
  const [sexoPaciente, setSexoPaciente] = useState("");
  const [fechaIngresoPaciente, setFechaIngresoPaciente] = useState("");
  const [horaIngresoPaciente, setHoraIngresoPaciente] = useState("");
  const [fechaOrdenPaciente, setFechaOrdenPaciente] = useState("");
  const [horaOrdenPaciente, setHoraOrdenPaciente] = useState("");
  const [ordenID, setordenID] = useState(uuidv4());
  const [nombrePrueba, setNombrePrueba] = useState(
    "ANTÍGENO DE SARS-COV 2 (PRUEBA RÁPIDA COVID)"
  );
  const [pesoPaciente, setPesoPaciente] = useState("");
  const [alturaPaciente, setAlturaPaciente] = useState("");
  const [IMCPaciente, setIMCPaciente] = useState("");
  const [frecuenciaPaciente, setFrecuenciaPaciente] = useState("");
  const [temperaturaPaciente, setTemperaturaPaciente] = useState("");
  const [presionPaciente, setPresionPaciente] = useState("");
  const [saturacionPaciente, setSaturacionPaciente] = useState("");
  const [categoríaPrueba, setCategoríaPrueba] = useState("INMUNOLOGÍA");
  const [medicoPaciente, setMedicoPaciente] = useState("");
  const [diagnosticoPaciente, setDiagnosticoPaciente] = useState("");
  const [tratamientoPaciente, setTratamientoPaciente] = useState("");
  const [sintomasPaciente, setSintomasPaciente] = useState("");
  const [metodoPrueba, setMetodoPrueba] = useState(
    "Inmunocromatografia específica"
  );
  const [muestraPrueba, setMuestraPrueba] = useState("Exudado Nasofaríngeo");
  const [resultadoPrueba, setResultadoPrueba] = useState("");
  const [nombreQuimicaResponsable, setNombreQuimicaResponsable] = useState(
    "BRENDA MONSERRAT GAZGA DIAZ"
  );
  const [crearPDF, setCrearPDF] = useState(false);

  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [role, setRole] = useState("");
  const [pdf, setPDF] = useState([]);
  const [url, setUrl] = useState("");
  const [key, setKey] = useState("");
  const [paciente2, setPaciente2] = useState(null);
  const [fechaOrden, setFechaOrden] = useState("");

  const [estudios2, setEstudios2] = useState("");
  const [pdf2, setPDF2] = useState("");
  const [url2, setUrl2] = useState("");
  const [key2, setKey2] = useState("");

  const [estudios3, setEstudios3] = useState("");

  const [mostrar, setMostrar] = useState(false);

  const [datosPDF, setDatosPDF] = useState({});
  const [listo, setListo] = useState(false);

  const calculoIMC = async () => {
    return await setIMCPaciente((pesoPaciente / alturaPaciente).toFixed(2));
  };

  const onChange2 = async e => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;

    try {
      await Storage.put(key, file, {
        level: "public",
        contentType: file.type,
      });
      const pdf = await Storage.get(key, { level: "public" });
      setPDF2(pdf);
      setUrl2(url);
      setKey2(key);
      console.log("archivo guardado");
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = async e => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;

    try {
      await Storage.put(key, file, {
        level: "public",
        contentType: file.type,
      });
      const pdf = await Storage.get(key, { level: "public" });
      setPDF(pdf);
      setUrl(url);
      setKey(key);
      console.log("archivo guardado");
    } catch (error) {
      console.log(error);
    }
  };

  const DateFechaIngresoPaciente = (value, dateString) => {
    setFechaIngresoPaciente(dateString);
  };

  const HourHoraIngresoPaciente = (value, timeString) => {
    setHoraIngresoPaciente(timeString);
  };

  const DateFechaOrdenPaciente = (value, dateString) => {
    setFechaOrdenPaciente(dateString);
  };

  const HourHoraOrdenPaciente = (value, dateString) => {
    setHoraOrdenPaciente(dateString);
  };

  const onSave = async () => {
    calculoIMC();
    // const newpaciente = await DataStore.save(
    //   new Paciente({
    //     nombre: nombrePaciente,

    //     email: email,
    //     whatsapp: whatsapp,
    //     role: role,
    //     image: pdf,
    //     key: key,
    //     url: url,
    //     image2: pdf2,
    //     key2: key2,
    //     url2: url2,

    //     fechaOrden: fechaOrden,
    //   })
    // );
    // setPaciente2(newpaciente);

    message.success("El paciente se ha creado");

    console.log(
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
      medicoPaciente
    );
  };

  const onCreatePDF = async e => {
    e.preventDefault();
    const datosPDF = await {
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
    };
    setDatosPDF(datosPDF);
    setCrearPDF(!crearPDF);
  };

  const onListo = () => {
    setListo(!listo);
  };

  return (
    <div style={{ margin: 20 }}>
      <p className="display-6 text-center">Por favor ingresa tus datos</p>

      <Input
        value={nombrePaciente}
        onChange={e => setNombrePaciente(e.target.value)}
        placeholder="Nombre Completo"
        style={styles.input}
      />
      <div>
        <Input
          value={edadPaciente}
          onChange={e => setEdadPaciente(e.target.value)}
          placeholder="Edad paciente"
          style={{
            margin: 10,
            backgroundColor: "white",
            padding: 5,
            borderRadius: 5,
            width: 125,
          }}
        />
        <div>
          <Input
            value={pesoPaciente}
            onChange={e => setPesoPaciente(e.target.value)}
            placeholder="Peso Paciente"
            style={{
              margin: 10,
              backgroundColor: "white",
              padding: 5,
              borderRadius: 5,
              width: 125,
            }}
          />
        </div>
        <Input
          value={alturaPaciente}
          onChange={e => setAlturaPaciente(e.target.value)}
          placeholder="Altura Paciente"
          style={{
            margin: 10,
            backgroundColor: "white",
            padding: 5,
            borderRadius: 5,
            width: 125,
          }}
        />
      </div>
      <Input
        value={frecuenciaPaciente}
        onChange={e => setFrecuenciaPaciente(e.target.value)}
        placeholder="Frecuencia Paciente"
        style={{
          margin: 10,
          backgroundColor: "white",
          padding: 5,
          borderRadius: 5,
          width: 125,
        }}
      />
      <div>
        <Input
          value={temperaturaPaciente}
          onChange={e => setTemperaturaPaciente(e.target.value)}
          placeholder="Temperatura Paciente"
          style={{
            margin: 10,
            backgroundColor: "white",
            padding: 5,
            borderRadius: 5,
            width: 125,
          }}
        />
      </div>
      <div>
        <Input
          value={presionPaciente}
          onChange={e => setPresionPaciente(e.target.value)}
          placeholder="Presión Paciente"
          style={{
            margin: 10,
            backgroundColor: "white",
            padding: 5,
            borderRadius: 5,
            width: 125,
          }}
        />
      </div>
      <div>
        <Input
          value={saturacionPaciente}
          onChange={e => setSaturacionPaciente(e.target.value)}
          placeholder="Saturación Paciente"
          style={{
            margin: 10,
            backgroundColor: "white",
            padding: 5,
            borderRadius: 5,
            width: 125,
          }}
        />
      </div>
      <Select
        style={{ margin: 10 }}
        placeholder="Sexo Paciente"
        onChange={value => {
          setSexoPaciente(value);
        }}
      >
        <Option value="MASCULINO">Masculino</Option>
        <Option value="FEMENINO">Femenino</Option>
      </Select>
      <div>
        <DatePicker
          onChange={DateFechaIngresoPaciente}
          style={{
            width: 125,
            margin: 10,
            backgroundColor: "white",
            padding: 8,
            borderRadius: 5,
          }}
          size="middle"
          placeholder="Fecha de ingreso"
        />
      </div>
      <div>
        <TimePicker
          onChange={HourHoraIngresoPaciente}
          style={{
            width: 125,
            margin: 10,
            backgroundColor: "white",
            padding: 8,
            borderRadius: 5,
          }}
          size="middle"
          placeholder="Hora de ingreso"
        />
      </div>
      <div>
        <DatePicker
          onChange={DateFechaOrdenPaciente}
          style={{
            width: 125,
            margin: 10,
            backgroundColor: "white",
            padding: 8,
            borderRadius: 5,
          }}
          size="middle"
          placeholder="Fecha Orden"
        />
      </div>
      <div>
        <TimePicker
          onChange={HourHoraOrdenPaciente}
          style={{
            width: 125,
            margin: 10,
            backgroundColor: "white",
            padding: 8,
            borderRadius: 5,
          }}
          size="middle"
          placeholder="Hora de ingreso"
        />
      </div>
      <Input
        value={nombrePrueba}
        onChange={e => setNombrePrueba(e.target.value)}
        style={styles.input}
      />
      <Input
        value={categoríaPrueba}
        onChange={e => setCategoríaPrueba(e.target.value)}
        style={styles.input}
      />
      <Input
        value={medicoPaciente}
        onChange={e => setMedicoPaciente(e.target.value)}
        placeholder="Nombre completo del Médico"
        style={styles.input}
      />
      <Input
        value={diagnosticoPaciente}
        onChange={e => setDiagnosticoPaciente(e.target.value)}
        placeholder="Escribe el diagnóstico que le dieron al paciente"
        style={styles.input}
      />
      <Input
        value={tratamientoPaciente}
        onChange={e => setTratamientoPaciente(e.target.value)}
        placeholder="Escribe el tratamiento que le dieron al paciente"
        style={styles.input}
      />
      <Input
        value={sintomasPaciente}
        onChange={e => setSintomasPaciente(e.target.value)}
        placeholder="Escribe el tratamiento que le dieron al paciente"
        style={styles.input}
      />

      <Input
        value={metodoPrueba}
        onChange={e => setMetodoPrueba(e.target.value)}
        style={styles.input}
      />
      <Input
        value={muestraPrueba}
        onChange={e => setMuestraPrueba(e.target.value)}
        style={styles.input}
      />
      <Select
        style={{ margin: 10, width: 125 }}
        placeholder="Resultado prueba"
        onChange={value => {
          setResultadoPrueba(value);
        }}
      >
        <Option value="NEGATIVO">NEGATIVO</Option>
        <Option value="POSITIVO">POSITIVO</Option>
      </Select>
      <Input
        value={nombreQuimicaResponsable}
        onChange={e => setNombreQuimicaResponsable(e.target.value)}
        style={styles.input}
      />

      <div style={{ margin: 10 }}>
        <Button title="Crear PDF" onClick={onCreatePDF} type="primary">
          Crear PDF
        </Button>
      </div>

      <div width="100%">
        {crearPDF ? (
          <>
            <p>
              Para guardar el pdf da click derecho en él o en el botón de bajar,
              si estás en el celular toma captura de pantalla y mándalo.
            </p>
            <ResultadoPrueba datosPacienteNuevo={datosPDF} />
          </>
        ) : (
          <></>
        )}
      </div>

      {/* <PDFDownloadLink
        document={<ResultadoPrueba datosPacienteNuevo={datosPDF} />}
        fileName="somename.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink> */}

      <div>
        <p>Estás Listo para subir tu resultado?</p>
        <Button onClick={onListo}>Estoy listo</Button>
        {listo ? (
          <>
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              style={styles.input}
            />
            <Input
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
              placeholder="whatsapp"
              style={styles.input}
            />
            <div style={{ margin: 10 }}>
              <p>
                Sube un resultado en pdf:
                <input type="file" accept="pdf" onChange={e => onChange(e)} />
              </p>
            </div>
            <div>{pdf ? <iframe src={pdf} title="32ds" /> : <></>}</div>
            <div style={{ margin: 10 }}>
              {/* <div className="d-flex">
          <p className="h5"> Más estudios? </p>
          <PlusCircleOutlined
            onClick={onMostrar}
            style={{ fontSize: "20px" }}
          />
        </div> */}

              {/* {mostrar ? ( */}
              <>
                {" "}
                <p>
                  Sube segundo resultado en pdf:
                  <input
                    type="file"
                    accept="pdf"
                    onChange={e => onChange2(e)}
                  />
                </p>
                <div>{pdf2 ? <iframe src={pdf2} title="33ds" /> : <></>}</div>
              </>
              {/* ) : (
          <></>
        )} */}
            </div>

            <Select
              style={{ margin: 10, width: 125 }}
              placeholder="Role"
              onChange={value => {
                setRole(value);
              }}
            >
              <Option value="DOCTOR">Doctor</Option>
              <Option value="PACIENTE">Paciente</Option>
            </Select>

            <div style={{ margin: 10 }}>
              <Button title="Save" onClick={onSave} type="primary">
                Guardar
              </Button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

const styles = {
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 5,
  },
};

export default CrearResultado;
