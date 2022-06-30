import React from "react";
import { Routes, Route } from "react-router-dom";
import BolsaTrabajo from "../../pages/BolsaTrabajo/index";
import OtrasPruebas from "../../pages/OtrasPruebas/index";
import Blog from "../../pages/Blog";
import EnrutarUsuario from "../../pages/EnrutarUsuario";
import Profile from "../../pages/Profile";
import Privacidad from "../../pages/Privacidad";
import Home from "../../pages/Home";
import VerPrueba from "../EnrutarUsuarioNuevo/ChecarVista/VistaPaciente/ListaPruebas/VerPrueba";
import UsuarioPaciente from "../../pages/EnrutarUsuario/UsuarioPaciente/index";
import UsuarioDoctor from "../../pages/EnrutarUsuario/UsuarioDoctor/index";
import { Authenticator } from "@aws-amplify/ui-react";
import Administrador2 from "../../pages/Administrador2/index";
import Administrador from "../../pages/Administrador";
import VistaPaciente2 from '../../modules/VistaPaciente2/index';
import VerResultado from '../../modules/Components/Resultados/ListaResultados/VerResultado';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="enrutarUsuario" element={<VistaPaciente2 />} />

      <Route path="enrutarUsuario/paciente" element={<UsuarioPaciente />} />
      <Route path="enrutarUsuario/doctor" element={<UsuarioDoctor />} />
      <Route path="enrutarUsuario/:id" element={<VerPrueba />} />
      <Route path="enrutarUsuario/profile" element={<Profile />} />
      <Route path="admin" element={<Administrador2/>} />
      <Route path="admin2" element={<Administrador />} />
      <Route path="admin/paciente/:id" element={<VerResultado/>} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:id" element={<Blog />} />
      <Route path="privacidad" element={<Privacidad />} />
      <Route path="bolsatrabajo" element={<BolsaTrabajo />} />
      <Route path="otraspruebas" element={<OtrasPruebas />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;
