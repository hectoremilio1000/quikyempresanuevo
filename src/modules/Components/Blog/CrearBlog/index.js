import {
  Input,
  Button,
  Select,
  message,
  InputNumber,
  DatePicker,
  TimePicker,
  Typography,
  Form
} from "antd";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DataStore, Auth, Storage } from "aws-amplify";
import config from "../../../../aws-exports";
import { useNavigate } from "react-router-dom";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;





const { Title } = Typography;
const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;

function CrearBlog() {
  const [titulo, setTitulo] = useState("")
  const [subtitulo, setSubTitulo] = useState("")
  const [imagen1, setImagen1] = useState("")
  const [url1, setUrl1] = useState("")
  const [text1, setTexto1] = useState("")
  const [imagen2, setImagen2] = useState("")
  const [url2, setUrl2] = useState("")
  const [text2, setTexto2] = useState("")
  const [imagen3, setImagen3] = useState("")
  const [url3, setUrl3] = useState("")
const [text3, setTexto3] = useState("")
  const [fecha, setFecha] = useState("")
  const [autor, setAutor] = useState("")

  return  <div style={{ margin: 20 }}>
      <p className="display-6 text-center">Por favor el título de la nueva entrada del Blog</p>

      <Input
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        placeholder="Nombre Completo"
        style={styles.input}
      />
      <div> 
        <Input
          value={subtitulo}
          onChange={e => setSubTitulo(e.target.value)}
          placeholder="Subtitulo"
          style={{
            margin: 10,
            backgroundColor: "white",
            padding: 5,
            borderRadius: 5,
            width: 125,
          }}
        />
        {/* <div>
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
        placeholder="Escribe los síntomas del paciente"
        style={styles.input}
      />

      <Input
        value={metodoPrueba}
        onChange={e => setMetodoPrueba(e.target.value)}
        style={styles.input}
        placeholder="Escribe el método de la prueba"
      />
      <Input
        value={muestraPrueba}
        onChange={e => setMuestraPrueba(e.target.value)}
        style={styles.input}
        placeholder="Escribe la muestra"
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
      </div> */}

      {/* <PDFDownloadLink
        document={<ResultadoPrueba datosPacienteNuevo={datosPDF} />}
        fileName="somename.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink> */}

      {/* <div>
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
           
              {/* ) : (
          <></>
        )} */}
            </div>

            

          
     
      
          <></>
        
    
    </div>
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

export default CrearBlog;
