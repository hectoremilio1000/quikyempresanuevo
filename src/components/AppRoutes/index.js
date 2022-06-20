import React from "react";
import { Routes, Route } from "react-router-dom";
import BolsaTrabajo from "../../pages/BolsaTrabajo/index";
import OtrasPruebas from "../../pages/OtrasPruebas/index";
import Blog from "../../pages/Blog";
import Usuario from "../../pages/Usuario";
import ProfileNuevo from "../../pages/ProfileNuevo/ProfileNuevo";
import EnrutarUsuario from "../../pages/EnrutarUsuario";
import Profile from "../../pages/Profile";
import Privacidad from "../../pages/Privacidad";
import Home from "../../pages/Home";
import VerPrueba from "../EnrutarUsuarioComponents/ComponentsPaciente/ListaPruebas/ListaEstudios/VerPrueba/index";
import Administrador from "../../pages/Administrador/index";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="enrutarUsuario" element={<EnrutarUsuario />} />
      <Route path="enrutarUsuario/paciente/:id" element={<VerPrueba />} />
      <Route path="profilenuevo" element={<ProfileNuevo />} />
      <Route path="profile" element={<Profile />} />
      <Route path="admin" element={<Administrador />} />

      <Route path="blog" element={<Blog />} />
      <Route path="blog/:id" element={<Blog />} />
      <Route path="privacidad" element={<Privacidad />} />
      <Route path="bolsatrabajo" element={<BolsaTrabajo />} />
      <Route path="otraspruebas" element={<OtrasPruebas />} />
      <Route path="usuario" element={<Usuario />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;
