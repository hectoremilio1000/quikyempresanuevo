import {
  Input,
  Button,
  Select,
  message,
  InputNumber,
  DatePicker,
  TimePicker,
  Typography,
  Form,
} from "antd";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DataStore, Auth, Storage } from "aws-amplify";
import config from "../../../../aws-exports";
import { useNavigate } from "react-router-dom";
import { BLOG } from "../../../../models";

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
  const [texto1, setTexto1] = useState("")
  const [imagen1, setImagen1] = useState("")
  const [url1, setUrl1] = useState("")
  const [key1, setKey1] = useState("")
  const [texto2, setTexto2] = useState("")
  const [imagen2, setImagen2] = useState("")
  const [url2, setUrl2] = useState("")
  const [key2, setKey2] = useState("")
  const [texto3, setTexto3] = useState("")
  const [imagen3, setImagen3] = useState("")
  const [url3, setUrl3] = useState("")
  const [key3, setKey3] = useState("")
  const [autor, setAutor] = useState("")
  const [fecha, setFecha] = useState("")

 

   const onChange1 = async e => {
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
      const image1 = await Storage.get(key, { level: "public" });
      setImagen1(image1);
      setUrl1(url);
      setKey1(key);
      console.log("archivo guardado");
      message.success("imagen 1 cargada exitósamente");
    } catch (error) {
      console.log(error);
      message.error("No se subió correctamente, contacta al administrador");
    }
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
      const image2 = await Storage.get(key, { level: "public" });
      setImagen2(image2);
      setUrl2(url);
      setKey2(key);
      console.log("archivo guardado");
      message.success("imagen 2 cargada exitósamente");
    } catch (error) {
      console.log(error);
      message.error("No se subió correctamente, contacta al administrador");
    }
   };
   const onChange3 = async e => {
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
      const image3 = await Storage.get(key, { level: "public" });
      setImagen3(image3);
      setUrl3(url);
      setKey3(key);
      console.log("archivo guardado");
      message.success("imagen 3 cargada exitósamente");
    } catch (error) {
      console.log(error);
      message.error("No se subió correctamente, contacta al administrador");
    }
   };
  
   const fechaBlog = (value, dateString) => {
    setFecha(dateString);
   };
  
   const onSave = async () => {
     try {
       const newBlog = await DataStore.save(
       new BLOG({
         titulo,
         subtitulo,
         texto1,
imagen1,
         url1,
texto2,
        imagen2,
        url2,
        texto3,
      imagen3,
         url3,
       autor,
      fecha
     })
       )
       message.success("El blog se ha creado");
        window.location.reload(false);
     } catch (error) {
       message.error("Hubo un error contacta al administrador");
       
     }
  }
 
 
  return (
    <div style={{ margin: 20 }}>
      <Title level={5}>Crea un blog</Title>

      <Input
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        placeholder="Título Blog"
        style={styles.input}
      />
   
        <Input
          value={subtitulo}
          onChange={e => setSubTitulo(e.target.value)}
          placeholder="Subtítulo"
          style={{
            margin: 10,
            backgroundColor: "white",
            padding: 5,
            borderRadius: 5,
            
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
    <div style={{ margin: 10 }}>
              <p>
            Sube la imagen 1 en formato .jpg:
            <br/>
                <input type="file" accept="jpg" onChange={e => onChange1(e)} />
              </p>
        </div>
</div>
      <div>
          <Input
            value={texto2}
            onChange={e => setTexto2(e.target.value)}
            placeholder="Texto 2"
            style={{
              margin: 10,
              backgroundColor: "white",
              padding: 5,
              borderRadius: 5,
             
            }}
        />
<div style={{ margin: 10 }}>
              <p>
            La imagen 2 en formato .jpg:
            <br/>
                <input type="file" accept="jpg" onChange={e => onChange2(e)} />
              </p>
        </div>
      </div>
      <div>
          <Input
            value={texto3}
            onChange={e => setTexto3(e.target.value)}
            placeholder="Texto 3"
            style={{
              margin: 10,
              backgroundColor: "white",
              padding: 5,
              borderRadius: 5,
             
            }}
        />
        <div style={{ margin: 10 }}>
         
              <p>
            Sube la imagen 3 en formato .jpg:
            <br/>
                <input type="file" accept="jpg" onChange={e => onChange3(e)} />
              </p>
        </div>
      </div>

      <Input
        value={autor}
        onChange={e => setAutor(e.target.value)}
        placeholder="Nombre del autor"
        style={styles.input}
      />
      <DatePicker
          onChange={fechaBlog}
          style={{
            width: 200,
            margin: 10,
            backgroundColor: "white",
            padding: 8,
            borderRadius: 5,
          }}
          size="middle"
          placeholder="Fecha Blog"
        />
      <div style={{ margin: 10 }}>
              <Button title="Save" onClick={onSave} type="primary">
                Guardar
              </Button>
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
