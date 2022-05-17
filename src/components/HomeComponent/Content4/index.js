import React from "react";
import { Link } from "react-router-dom";

function Content4() {
  return (
    <section className="jumbotron text-center mt-4 bg-light pb-4">
      <div className="container">
        <h1 className="descarga">Buscas trabajo</h1>
        <p className="lead text-muted">
          Inscríbete para poder ofrecer el servicio de enfermería a domicilio y
          gana desde el primer día grandes ingresos
        </p>
        <div className="container d-flex justify-content-center col-lg-2 col-md-3 col-6">
          <Link to="/bolsatrabajo">
            <button
              type="button"
              className="btn btn-success btn-lg text-white fs-6"
            >
              ¡Inscribirme ya!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Content4;
