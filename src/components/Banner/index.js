import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div>
      <header
        className="bannerFinal"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/sanmateo/banner_laboratorioFaseI.4.jpg")`,
          backgroundSize: "cover",
          height: "80vh",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid pt-5">
          <div className="mt-0 col-6 col-sm-6 justify-content-md-start">
            <h2 className="text-start bannerTitulo">¿Laboratorio Urgente?</h2>
            <h3 className="lead display-5 pb-5 subtituloBanner">
              Servicio a domicilio con un click o en sucursal
            </h3>
            <a href="https://wa.me/+5219511028474">
              <button
                type="button"
                className="btn btn-success btn-lg text-white"
              >
                ¡Reserva ya!
              </button>
            </a>
            <h1 className="pt-5 text-start proximamente">
              Empresa 100% confiable. Sucursales en la Ciudad de <b>Oaxaca</b> y
              próximamente en <b>CDMX</b>
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Banner;
