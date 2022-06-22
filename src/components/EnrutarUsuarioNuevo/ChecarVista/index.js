import React from "react";
import VistaPaciente from "./VistaPaciente";
import VistaDoctor from "./VistaDoctor/index";

function ChecarVista(dbUser) {
  let role = dbUser?.dbUser?.role;
  console.log(role);
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
