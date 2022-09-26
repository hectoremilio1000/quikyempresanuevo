import React, { useState, useEffect } from "react";
import { Input, Button, Select, message, Text, DatePicker } from "antd";
import { v4 as uuidv4 } from "uuid";
import { DataStore, Auth, Storage } from "aws-amplify";
import { Container } from "react-bootstrap";
import config from "../../../../aws-exports";

import { useNavigate } from "react-router-dom";

//icono
import { PlusCircleOutlined } from "@ant-design/icons";
// import { PACIENTE } from "../../../../models";

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
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [role, setRole] = useState("");
  const [pdf, setPDF] = useState([]);
  const [url, setUrl] = useState("");
  const [key, setKey] = useState("");
  const [paciente2, setPaciente2] = useState(null);
  const [fechaOrden, setFechaOrden] = useState("");
  const [estudios, setEstudios] = useState("");

  const [estudios2, setEstudios2] = useState("");
  const [pdf2, setPDF2] = useState("");
  const [url2, setUrl2] = useState("");
  const [key2, setKey2] = useState("");

  const [estudios3, setEstudios3] = useState("");

  const [mostrar, setMostrar] = useState(false);

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

  const DateDefine = (value, dateString) => {
    setFechaOrden(dateString);
  };

  const onSave = async () => {
    const newpaciente = await DataStore.save(
      // new PACIENTE({
      //   nombre: nombre,
      //   apellidoPaterno: apellidoPaterno,
      //   apellidoMaterno: apellidoMaterno,
      //   email: email,
      //   whatsapp: whatsapp,
      //   role: role,
      //   image: pdf,
      //   key: key,
      //   url: url,
      //   image2: pdf2,
      //   key2: key2,
      //   url2: url2,

      //   fechaOrden: fechaOrden,
      //   estudios: estudios,
      // })
    );
    setPaciente2(newpaciente);

    message.success("El paciente se ha creado");
    console.log(pdf2, key2, url2, pdf, key);
  };

  const onMostrar = e => {
    setMostrar(!mostrar);
  };

  return (
    <div style={{ margin: 20 }}>
      <p className="display-6 text-center">Por favor ingresa tus datos</p>

      <Input
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Nombre Completo"
        style={styles.input}
      />
      <Input
        value={apellidoPaterno}
        onChange={e => setApellidoPaterno(e.target.value)}
        placeholder="Apellido paterno"
        style={styles.input}
      />
      <Input
        value={apellidoMaterno}
        onChange={e => setApellidoMaterno(e.target.value)}
        placeholder="Apellido materno"
        style={styles.input}
      />
      <DatePicker
        onChange={DateDefine}
        style={styles.input}
        placeholder="Fecha"
        size="middle"
      />
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
      <Input
        value={estudios}
        onChange={e => setEstudios(e.target.value)}
        placeholder="Estudios"
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
            <input type="file" accept="pdf" onChange={e => onChange2(e)} />
          </p>
          <div>{pdf2 ? <iframe src={pdf2} title="33ds" /> : <></>}</div>
        </>
        {/* ) : (
          <></>
        )} */}
      </div>

      <Select
        style={{ margin: 10 }}
        placeholder="Selecciona el role"
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
