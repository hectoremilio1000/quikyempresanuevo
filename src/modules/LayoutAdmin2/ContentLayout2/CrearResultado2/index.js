import React, { useState, useEffect } from "react";
import { Input, Button, Select, message, Text } from "antd";
import { v4 as uuidv4 } from 'uuid';
import { DataStore, Auth, Storage } from "aws-amplify";
import { Container } from "react-bootstrap";
import config from '../../../../aws-exports'

import { User } from "../../../../models";


function CrearResultado2() {
    const [nombre, setNombre] = useState("");
    const onSave = async ()=>{
        await DataStore.save(
            new User({
                nombre:nombre
            })
        ); 
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
       <div style={{margin:10}}>
        <Button onClick={onSave} type="primary">
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

export default CrearResultado2