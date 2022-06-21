import React from "react";
import { Table } from "antd";
import estudios from "../../../../../assets/data2/estudios";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Prueba",
    dataIndex: "prueba",
    key: "prueba",
  },
  {
    title: "Fecha",
    dataIndex: "fecha",
    key: "fecha",
  },
  {
    title: "Pdf",
    dataIndex: "pdf",
    key: "pdf",
    render: pdf => (
      <button type="button" className="btn btn-primary">
        Ver PDF
      </button>
    ),
  },
];

function ListaPruebas() {
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="lead display-5 pb-5 subtituloBanner pt-4 text-center">
        Tu estudio
      </h3>
      <Table
        dataSource={estudios}
        columns={columns}
        rowKey="id"
        onRow={estudio => ({
          onClick: () => navigate(`paciente/${estudio.id}`),
        })}
      />
    </div>
  );
}

export default ListaPruebas;
