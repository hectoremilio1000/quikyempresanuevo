import React, { useState, useEffect } from "react";
import { DataStore, API, graphqlOperation } from "aws-amplify";
import { Pruebas } from "../../../../../models";
import { Image } from "antd";
import { listPruebas } from "../../../../../graphql/queries";

function ListaBlog() {
  const [pruebas, setPruebas] = useState();
  const [pruebasOtro, setPruebasOtro] = useState();
  useEffect(() => {
    DataStore.query(Pruebas, "836d58de-0bfb-4f8d-9638-921fba3b2575").then(
      setPruebas
    );
  }, []);

  const fetchPruebas = async () => {
    try {
      const data = await API.graphql({
        query: listPruebas,
        authMode: "API_KEY",
      });
      setPruebasOtro(data.data.listPruebas.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPruebas();
  }, []);

  return (
    <>
      <h1>{pruebas?.nombre}</h1>
      <Image with={200} src={pruebas?.imagen} />
      <div>
        {pruebasOtro.map(item => (
          <div key={item.id}>
            <h1>{item.nombre}</h1>
            <Image with={200} src={item.imagen} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ListaBlog;
