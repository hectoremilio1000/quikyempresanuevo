import React, { useState, useEffect } from "react";
import { Input, Button, Select, message, Text, Divider } from "antd";
import { v4 as uuidv4 } from 'uuid';
import { DataStore, Auth, Storage } from "aws-amplify";
import { Container } from "react-bootstrap";
import config from '../../../../aws-exports'

// import { User } from "../../../../models";


function CrearResultado2() {
    const [nombre, setNombre] = useState("");
    const [user,setUsers] = useState([]);
    const onSave = async ()=>{
        // await DataStore.save(
        //     new User({
        //         nombre:nombre
        //     })
        // ); 
        // console.log('datos guardados')
    }

    // useEffect(() => {
    //   DataStore.query(User).then(users=>setUsers(users))
    // }, [])
    

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
      <Divider/>
      <div>
        {user.map(user=><div key={user.id}>
            <h2>{user.nombre}</h2>
        </div>)}
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