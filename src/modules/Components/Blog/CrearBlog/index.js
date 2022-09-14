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
  const [texto1, setTexto1] = useState("")
  const [imagen2, setImagen2] = useState("")
  const [url2, setUrl2] = useState("")
  const [texto2, setTexto2] = useState("")
  const [imagen3, setImagen3] = useState("")
  const [url3, setUrl3] = useState("")
const [texto3, setTexto3] = useState("")
  const [fecha, setFecha] = useState("")
  const [autor, setAutor] = useState("")

  return (
    <div style={{ margin: 20 }}>
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
         <div>
          <Input
            value={texto1}
            onChange={e => setTexto1(e.target.value)}
            placeholder="Texto 1"
            style={{
              margin: 10,
              backgroundColor: "white",
              padding: 5,
              borderRadius: 5,
             
            }}
          />
      </div>
    </div>
  </div>
  )
  
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
