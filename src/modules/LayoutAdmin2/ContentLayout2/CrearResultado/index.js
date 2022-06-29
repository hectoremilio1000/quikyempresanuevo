import React, { useState, useEffect } from "react";
import { Input, Button, Select, message, Text } from "antd";
import { v4 as uuidv4 } from 'uuid';
import { DataStore, Auth, Storage } from "aws-amplify";
import { Container } from "react-bootstrap";
import config from '../../../../aws-exports'



import { useNavigate } from "react-router-dom";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = config

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
  const [image, setImage] = useState ([])
  const [paciente2, setPaciente2] = useState(null)

  const onChange = async (e)=>{
    e.preventDefault();
   const fileUpload = e.target.files[0];
   const fileExtension = fileUpload.name.split(".")[1];
   const fileName = fileUpload.name.split(".")[0];
   const key = `images/${uuidv4()}${fileName}.${fileExtension}`;
   const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`

   try {
    await Storage.put(
      key,fileUpload,{
        level:'public',
        contentType:fileExtension,
      }
    )
    setImage(url)
    console.log("archivo guardado")
   } catch (error) {
    console.log(error);
   }
    
  }

  const onSave = async ()=>{

    //   const newpaciente = await DataStore.save(
    //     new Paciente2({
    //     "nombrecompleto": "Lorem ipsum dolor sit amet",
    //     "apellidopaterno": "Lorem ipsum dolor sit amet",
    //     "apellidomaterno": "Lorem ipsum dolor sit amet",
    //     "email": "Lorem ipsum dolor sit amet",
    //     "whatsapp": "Lorem ipsum dolor sit amet",
    //     "pdfresultado": "Lorem ipsum dolor sit amet",
    //     "role": "PACIENTE",
    //     "pacientesub": "Lorem ipsum dolor sit amet"
    //   })
    // );
    //   setPaciente2(newpaciente)
      
  }


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
      <div style={{margin:10}}>
      <p>

Sube resultado en pdf:
      <input type="file"
      onChange={onChange} />
      </p>
</div>
      <Select
      style={{margin:10}}
        placeholder="Selecciona el role"
        onChange={value => {
          setRole(value);
        }}
      >
      

        <Option value="DOCTOR">Doctor</Option>
        <Option value="PACIENTE">Paciente</Option>
      </Select>


      <div style={{margin:10}}>
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

export default CrearResultado