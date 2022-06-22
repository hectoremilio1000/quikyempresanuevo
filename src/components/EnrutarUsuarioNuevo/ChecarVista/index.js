import React from "react";
import VistaPaciente from "./VistaPaciente";
import VistaDoctor from "./VistaDoctor/index";

function ChecarVista({ role, dbUser }) {
  return (
    <>
      {role === "PACIENTE" ? (
        <>
          <VistaPaciente dbUser={dbUser} />
        </>
      ) : (
        <VistaDoctor dbUser={dbUser} />
      )}
    </>
  );
}

export default ChecarVista;
