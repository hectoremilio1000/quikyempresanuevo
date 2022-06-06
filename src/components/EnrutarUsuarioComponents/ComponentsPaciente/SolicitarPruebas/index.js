import React from "react";

function SolicitarPruebas({ dbUser }) {
  return (
    <div className="mb-4">
      <h1 className="pt-3 text-center fs-5">
        hola {dbUser.nombre} quieres solicitar un servicio?
      </h1>
      <div className="d-flex justify-content-center pb-3">
        <a href="https://wa.me/+5219511028474">
          <button className="btn btn-success rounded mt-3">¡Reserva ya!</button>
        </a>
      </div>
    </div>
  );
}

export default SolicitarPruebas;
