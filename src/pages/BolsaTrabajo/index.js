import React from "react";
import BannerBolsaTrabajo from "../../components/BolsaTrabajoComponents/BannerBolsaTrabajo";
import Component1Enfermera from "../../components/BolsaTrabajoComponents/Component1Enfermera";

import Component2Enfermera from "../../components/BolsaTrabajoComponents/Component2Enfermera";
import RegistrameEnfermera from "../../components/BolsaTrabajoComponents/RegistrameEnfermera";

import "./styles.css";

function BolsaTrabajo() {
  return (
    <>
      <BannerBolsaTrabajo />
      <Component1Enfermera />
      <Component2Enfermera />
      <RegistrameEnfermera />
    </>
  );
}

export default BolsaTrabajo;
