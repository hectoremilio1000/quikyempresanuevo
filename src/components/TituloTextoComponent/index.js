import React from "react";

function TituloTextoComponente({ titulo, texto1 }) {
  return (
    <div className="px-10 body3component pt-3 pb-3">
      <div className="container">
        <h2 className="text-center font-weight-bold ">{titulo}</h2>
        <p className="text-center">{texto1}</p>
      </div>
    </div>
  );
}

export default TituloTextoComponente;
