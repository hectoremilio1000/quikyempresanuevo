import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Content4() {
  return (
    <section className="jumbotron text-center mt-4 bg-light pb-4">
      <div className="container">
        <h1 className="descarga pt-3">Buscas trabajo</h1>
        <p className="lead text-muted">
          Inscríbete para poder ofrecer el servicio de enfermería a domicilio y
          gana desde el primer día grandes ingresos
        </p>
        <div className="container d-flex justify-content-center col-lg-2 col-md-3 col-6">
          <Link to="/bolsatrabajo">
            <Button
              style={{
                marginTop: 4,
                backgroundColor: "#00A4CC",
                borderRadius: 5,
                color: "white",
              }}
            >
              ¡Postularme ya!{" "}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Content4;
