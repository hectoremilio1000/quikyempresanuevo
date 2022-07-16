import React from "react";
import { HashLink } from "react-router-hash-link";
import "./styles.css";

function FooterComponent() {
  return (
    <div className="font-small pt-2 footer">
      <div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="p-2"
        >
          <div className="col-6">
            <h5 className="title font-weight-bold text-white atrevete_footer text-center">
              Atrévete a conocer los Laboratorios con la Mayor Calidad
            </h5>
            <p className="text-white descripcion_footer text-center">
              Servicios de test de laboratorio a domicilio con la mayor
              confiabilidad y confidencialidad.
            </p>
          </div>
          <div className="col-6 text-center">
            <h5 className="title font-weight-bold text-white text-center">
              Links
            </h5>
            <ul className="ulFooter">
              <HashLink to="/#home" className="text-decoration-none">
                <li className="text-center text-white list-unstyled">Inicio</li>
              </HashLink>

              <a href="/bolsatrabajo" className="text-decoration-none">
                <li className="text-white list-unstyled">Bolsa de trabajo</li>
              </a>

              <a href="/enrutarUsuario" className="text-decoration-none">
                <li className="text-center text-white list-unstyled">
                  Paciente
                </li>
              </a>
              <a href="/privacidad" className="text-decoration-none">
                <li className="text-center text-white list-unstyled">
                  Privacidad
                </li>
              </a>
              <a href="/otraspruebas" className="text-decoration-none">
                <li className="text-center text-white list-unstyled">
                  Buscador de Pruebas
                </li>
              </a>
              <a href="/blog" className="text-decoration-none">
                <li className="text-center text-white list-unstyled">Blog</li>
              </a>
              <a href="/admin2" className="text-decoration-none">
                <li className="text-center text-white list-unstyled">
                  Administrador
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
