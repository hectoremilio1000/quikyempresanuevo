import React from "react";
import { HashLink } from "react-router-hash-link";
import "./styles.css";

function BannerBolsaTrabajo() {
  return (
    <div className="banner d-flex justify-content-start">
      <header
        className="col jumbotron jumbotron-fluid bannerEnfermera"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/sanmateo/enfermera.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid mt-4">
          <div className="col-12 col-sm-7 col-md-9 pl-1">
            <div className="col-12 col-sm-7  col-md-9 d-flex justify-content-start justify-content-md-start mt-4 pl-1">
              <img
                src="https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo+nuevo/SAN-MATEO.png"
                alt="laboratorio san mateo"
                width="200"
                className="nombre_logo_enfermera"
              />
            </div>
            <div className="col-12 col-sm-7 col-md-8 mt-4">
              <h1 className="display-5 font-weight-bold pt-3 titleEnfermera text-white text-sm-center">
                ¿Eres enfermera?
              </h1>
            </div>
            <div className="col-6 col-sm-7 col-md-9 mt-2">
              <h1 className="display-5 font-weight-bold pt-3 titleEnfermera text-white text-md-left text-sm-center">
                Te garantizamos $4,000 en 7 días
              </h1>
            </div>
            <div className="col-12 col-sm-7 col-md-9 d-flex justify-content-start justify-content-md-start mb-4">
              <HashLink to="/bolsatrabajo#registrame">
                <button
                  type="button"
                  className="btn btn-info btn-lg text-white"
                >
                  ¡Regístrate ya!
                </button>
              </HashLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default BannerBolsaTrabajo;
