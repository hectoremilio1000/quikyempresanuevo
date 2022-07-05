import { DataStore } from 'aws-amplify';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Paciente } from '../../../../models';
import { Auth } from 'aws-amplify';
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Nombre",
    dataIndex: "nombre",
    key: "nombre",
  },
  {
    title: "apellido Paterno",
    dataIndex: "apellidoPaterno",
    key: "apellidoPaterno",
  },
  {
    title: "Estudios",
    dataIndex: "estudios",
    key: "estudios",
  },
  {
    title: "fecha",
    dataIndex: "fechaOrden",
    key:"fechaOrden",
    defaultSortOrder: 'ascend',
  },
  {
    title: "Pdf",
    dataIndex: "imagen",
    key: "imagen",
    render: pdf => (
      <button type="button" className="btn btn-primary">
        Ver PDF 
      </button>
    ),
  },
];


function ListaEstudios() {
  const [paciente,setPaciente] = useState([]);
  const [authUser, setAuthUser] = useState(null);

  const navigate = useNavigate();

const emailAuth = authUser?.attributes?.email

useEffect(() => {
  Auth.currentAuthenticatedUser().then(setAuthUser)
}, [])


useEffect(() => {
  if(!emailAuth){
    return
  }
  DataStore.query(Paciente, paciente=>paciente.email("eq", emailAuth)).then(paciente=>setPaciente(paciente))
}, [emailAuth])

// console.log(paciente)

// const pdf = paciente?.image
// const imagen = paciente?.url


  return (
    <div className="mb-4">
    <h3 className="lead display-5 pb-5 subtituloBanner pt-4 text-center">
    Hola, {authUser?.attributes?.email} tus estudios son:
      </h3>
      <Table
        dataSource={paciente}
        columns={columns}
        rowKey="id"
        onRow={paciente=>({
          onClick:()=>navigate(`/enrutarUsuario/${paciente?.id}`)
        })}
      />
      <h1 className="pt-3 text-center fs-5">
       {paciente === []? <p className="pt-3 text-center fs-5"> Parece que no tienes estudios cargados</p>:<p className="pt-3 text-center fs-5"> En caso de que no veas todos tus estudios</p> }por favor escríbenos para aclararlo.
      </h1>
      <div className="d-flex justify-content-center pb-3">
      <a href="https://wa.me/+5219511028474">
        <button className="btn btn-success rounded mt-3">¡Solicitar ayuda!</button>
      </a>
    </div>
    
   
 {/* <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
    <h1>IMAGEN</h1>
{imagen ?  <iframe src={imagen} title={paciente?.id} style={{width:"100%", height:"80vh"}}/> : <></>}
</div> */}
      </div>
  )
}

export default ListaEstudios