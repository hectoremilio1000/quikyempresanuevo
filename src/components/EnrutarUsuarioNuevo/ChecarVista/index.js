import React from "react";
import VistaPaciente from "./VistaPaciente";

function ChecarVista({ role, dbUser }) {
  return (
    <>
      {role === "PACIENTE" ? (
        <>
          <VistaPaciente dbUser={dbUser} />
        </>
      ) : (
        <>hola doctor</>
      )}
    </>
  );
}

export default ChecarVista;
