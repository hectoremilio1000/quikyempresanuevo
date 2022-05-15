import React from "react";
import "./styles.css";

const Cookies = props => {
  const { handlecookies } = props;
  return (
    <>
      <div className="cookies">
        <div className="container-cookies rounded">
          <div className="image-cookies">
            <img
              src="https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo+nuevo/SAN-MATEO-SIMBOLO.png"
              alt="img-cookies"
            />
          </div>
          <div className="body-cookies">
            <h1>Aviso de Privacidad</h1>
            <p>
              En Laboratorios San Mateo utilizamos cookies para mejorar tu
              experiencia de compra. Si continuas navegando, estarás aceptando
              su uso. Para mayor información consulta nuestro
              <a href="/privacidad">
                <small href="#!" className="text-dark">
                  {" "}
                  Aviso de Privacidad
                </small>
              </a>
            </p>
            <button onClick={handlecookies} id="check-cookies">
              Aceptar cookies
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cookies;
