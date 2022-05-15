import React from "react";

function CardEnfermeraVector({ imagen, alt, texto }) {
  return (
    <>
      <div className="col-md-3 col-6">
        <div className="card mb-4 cardEnfermera">
          <img className="card-img-top" src={imagen} alt={alt} />
          <div className="card-body">
            <p className="card-text text-center font-weight-bold">{texto}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardEnfermeraVector;
