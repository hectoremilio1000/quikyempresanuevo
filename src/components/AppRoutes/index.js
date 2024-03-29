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

import Administrador2 from "../../pages/Administrador2/index";
import Administrador from "../../pages/Administrador";
import VistaPaciente2 from "../../modules/VistaPaciente2/index";
import VerResultado from "../../modules/Components/Resultados/ListaResultados/VerResultado";
import Administrador3 from "../../modules/Administrador3";
import SignIn from "../../modules/Administrador3/SignIn";
import SignUp from "../../modules/Administrador3/SignUp";
import ConfirmEmail from "../../modules/Administrador3/ConfirmEmail";
import ForgotPassword from "../../modules/Administrador3/ForgotPassword/index";
import NewPassword from "../../modules/Administrador3/NewPassword";
import SignInPaciente from "../../pages/Administrador2/SignInPaciente/index";
import SignUpPaciente from "../../pages/Administrador2/SignUpPaciente/index";
import ConfirmEmailPaciente from "../../pages/Administrador2/ConfirmEmailPaciente/index";
import ForgotPasswordPaciente from "../../pages/Administrador2/ForgotPasswordPaciente/index";
import NewPasswordPaciente from "../../pages/Administrador2/NewPasswordPaciente/index";
import Maquila from "../../pages/Maquila/index";
import CrearParametrosFinales from '../Parametros/CrearParametrosFinales/index';
import CrearReferenciaParam from '../Referencias/CrearReferenciaParam/index';
import CrearUnidadesParams from '../CrearUnidadesParams/index';
import EditarBlog from '../../modules/Components/Blog/EditarBlog';

function AppRoutes() {
  return (
    <Routes>
      {/* routes nav y home */}
      <Route path="/" element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="maquila" element={<Maquila />} />
      <Route path="privacidad" element={<Privacidad />} />
      <Route path="bolsatrabajo" element={<BolsaTrabajo />} />
      <Route path="otraspruebas" element={<OtrasPruebas />} />

      {/* routes administrador */}

      <Route path="admin/signin" element={<SignIn />} />
      <Route path="admin/signup" element={<SignUp />} />
      <Route path="admin/confirmemail" element={<ConfirmEmail />} />
      <Route path="admin/forgotpassword" element={<ForgotPassword />} />
      <Route path="admin/newpassword" element={<NewPassword />} />
      <Route path="admin/dashboard" element={<Administrador3 />} />

      {/* rotues paciente */}

      <Route path="admin/paciente/:id" element={<VerResultado />} />
      <Route path="enrutarUsuario/signin" element={<SignInPaciente />} />
      <Route path="enrutarUsuario/signup" element={<SignUpPaciente />} />
      <Route
        path="enrutarUsuario/confirmemail"
        element={<ConfirmEmailPaciente />}
      />
      <Route
        path="enrutarUsuario/forgotpassword"
        element={<ForgotPasswordPaciente />}
      />
      <Route
        path="enrutarUsuario/newpassword"
        element={<NewPasswordPaciente />}
      />
      <Route path="enrutarUsuario/dashboard" element={<VistaPaciente2 />} />
      <Route path="enrutarUsuario/:id" element={<VerPrueba />} />

      {/* rotue administrador con todos los componentes */}
      <Route path="admin2" element={<Administrador />} />
      <Route path="parametros/:id" element={<CrearParametrosFinales />} />
      <Route path="referencias/:id" element={<CrearReferenciaParam />} />
      <Route path="unidades/:id" element={<CrearUnidadesParams />} />
      {/* routes por definir */}

      {/* Rutas para blog */}
      <Route path="admin2/blog/:id" element={<EditarBlog />} />

      <Route path="enrutarUsuario/doctor" element={<UsuarioDoctor />} />
      <Route path="enrutarUsuario/profile" element={<Profile />} />
      <Route path="admin1" element={<Administrador2 />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;
