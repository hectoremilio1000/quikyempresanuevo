import React, {useEffect, useState} from "react";
import { Table } from "antd";
import estudios from "../../../../assets/data2/estudios";
import { DataStore } from 'aws-amplify';
import {Paciente} from '../../../../models'
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
    title: "email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "whatsapp",
    dataIndex: "whatsapp",
    key: "whatsapp",
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




function ListaResultados() {
  const [paciente,setPaciente]=useState([])
  const navigate = useNavigate();

  useEffect(() => {
  DataStore.query(Paciente).then(users=>setPaciente(users))
  }, [])

  console.log(paciente)

  return (
    <div>
      <h3 className="lead display-5 pb-5 subtituloBanner pt-4 text-center">
        Los resultados que has creado hasta el momento son:
      </h3>
      <Table
        dataSource={paciente}
        columns={columns}
        rowKey="id"
        onRow={resultado=>({
          onClick:()=>navigate(`paciente/${resultado.id}`)
        })}
      />
    </div>
  )
}

export default ListaResultados;
