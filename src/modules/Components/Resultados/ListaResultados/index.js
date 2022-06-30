import React, {useEffect, useState} from "react";
import { Table, Popconfirm, Button } from "antd";
import estudios from "../../../../assets/data2/estudios";
import { DataStore } from 'aws-amplify';
import {Paciente} from '../../../../models'
import { useNavigate } from "react-router-dom";






function ListaResultados() {
  const [paciente,setPaciente]=useState([])
  const navigate = useNavigate();

  

  useEffect(() => {
  DataStore.query(Paciente).then(users=>setPaciente(users))
  }, []);

  const deleteEstudio = async estudio =>{
    await DataStore.delete(estudio);
    setPaciente(paciente.filter((p)=>p.id !== estudio.id))
    
  }

  console.log(paciente)

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
      title: "Ver Pdf",
      key: "verPdf",
      render: (_,item)=><Button type="primary" onClick={()=>navigate(`paciente/${item.id}`)}> Ver PDF
      </Button>
    },
    {
      title:"Action",
      key:"action",
      render:(_, item)=>(<Popconfirm placement="topLeft" title={"Seguro quieres borrar este estudio"} onConfirm={()=>deleteEstudio(item)} onTest="Sí" cancelText="No">
        <Button danger>Eliminar</Button>
      </Popconfirm>
  
      )
    }
    
  ];
 

  return (
    <div>
      <h3 className="lead display-5 pb-5 subtituloBanner pt-4 text-center">
        Los resultados que has creado hasta el momento son:
      </h3>
      <Table
        dataSource={paciente}
        columns={columns}
        rowKey="id"
        
      />
    </div>
  )
}

export default ListaResultados;
