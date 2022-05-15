import React from "react";
import "./styles.css";

export default function Copyright() {
  return (
    <div className="d-flex flex-column copyright">
      <div className="p-6">
        <span className="text-dark">Laboratorios San Mateo COPYRIGHT</span>
      </div>
      <div className="m-6">
        <span className="text-dark">
          Test Clínicos de primer nivel a precios accesibles
        </span>
      </div>
    </div>
  );
}
