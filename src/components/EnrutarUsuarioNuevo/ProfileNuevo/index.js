import React, { useState, useEffect } from "react";
import { Input, Button, Select, message, Text } from "antd";
import "./styles.css";
import { DataStore, Auth } from "aws-amplify";
import { Container } from "react-bootstrap";
// import { User } from "../../../models";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function ProfileNuevo({ sub, setDbUser, dbUser }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [role, setRole] = useState("");

  const onSave = async () => {
    // try {
    //   const user = await DataStore.save(
    //     new User({
    //       nombre: nombre,
    //       email: email,
    //       whatsapp: whatsapp,
    //       role: role,
    //       sub: sub,
    //     })
    //   );
    //   setDbUser(user);

    //   console.log("enviado");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // const onFinish = async values => {
  //   try {
  //     const user = await DataStore.save(
  //       new User({
  //         nombre: values.nombreUsuario,
  //         email: values.emailUsuario,
  //         whatsapp: values.whatsUsuario,
  //         role: values.roleUsuario,
  //         sub: sub,
  //       })
  //     );
  //     setDbUser(user);

  //     message.info("gracias por registrar tus datos");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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

      <Select
        placeholder="Selecciona tu role"
        onChange={value => {
          setRole(value);
        }}
      >
        <Option value="DOCTOR">Doctor</Option>
        <Option value="PACIENTE">Paciente</Option>
      </Select>
      <div>
        <Button title="Save" onClick={onSave}>
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

export default ProfileNuevo;
