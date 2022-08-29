import { DataStore } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { ORDEN } from "../../../../models";

function ListaOrdenes() {
  const [ordenes, setOrdenes] = useState([]);

  const fetchOrdenes = async () => {
    const ordenesFetch = await DataStore.query(ORDEN);
    setOrdenes(ordenesFetch);
  };

  useEffect(() => {
    fetchOrdenes();
  }, []);

  console.log(ordenes);

  return <div>ListaOrdenes</div>;
}

export default ListaOrdenes;
