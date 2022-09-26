import React from "react";
import "./styles.css";

function Banner() {
  return (
    <div id="home">
      <header
        className="bannerFinal"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/sanmateo/banner_laboratorioFaseI.4.jpg")`,
          backgroundSize: "cover",

          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid pt-5">
          <div className="mt-0 col-6 col-sm-5 justify-content-md-start pt-4">
            <h2 className="text-start bannerTitulo">¿Laboratorio Urgente?</h2>
            <h3 className="lead display-5 pb-5 subtituloBanner pt-4">
              Servicio a domicilio con un click o en sucursal
            </h3>
            <div className="d-flex justify-content-start">
              <a href="https://wa.me/+5219511028474">
                <button className="btn btn-success rounded mt-3">
                  ¡Reserva ya!
                </button>
              </a>
            </div>
            <h1 className="pt-5 text-start proximamente">
              Nos encontramos en la Ciudad de Oaxaca y en CDMX
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Banner;
