import React from "react";
import "./styles.css";
import { InlineWidget } from "react-calendly";

function Content3() {
  return (
    <div id="reserva" className="mt-4 pb-4">
      <section className="jumbotron text-center" id="reserva">
        <div className="container">
          <h1 className="text-center tituloCalendario">
            En caso de que quieras ir a nuestra sucursal agenda tu cita
          </h1>

          <InlineWidget url="https://calendly.com/laboratoriossanmateo/sanmateo" />
        </div>
      </section>
    </div>
  );
}

export default Content3;
