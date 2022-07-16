import React from "react";
import { Layout } from "antd";
import CrearPruebas from "../Components/Pruebas/CrearPruebas";
import ListaPruebas from "../Components/Pruebas/ListaPruebas";
import CrearDoctor from "../Components/Doctor/CrearDoctor";
import ListaDoctores from "../Components/Doctor/ListaDoctores";
import CrearOrden from "../Components/Orden/CrearOrden";
import ListaOrdenes from "../Components/Orden/ListaOrdenes";
import CrearPaciente from "../Components/Pacientes/CrearPaciente";
import ListaPacientes from "../Components/Pacientes/ListaPacientes";
import CrearResultado from "../Components/Resultados/CrearResultado";
import ListaResultados from "../Components/Resultados/ListaResultados";
import CrearBlog from "../Components/Blog/CrearBlog";
import ListaBlog from "../Components/Blog/ListaBlogs";
import Cortes from "../Components/Administrador/Cortes";
import Enfermeras from "../Components/Empleo/Enfermeras";
import General from "../Components/Empleo/General";
import ResultadoPrueba from "../Components/Resultados/ResultadoPrueba/index";
const { Content } = Layout;

function ContentLayoutAdmin({ current }) {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      {current === "1" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearPruebas />
        </div>
      ) : current === "2" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaPruebas />
        </div>
      ) : current === "3" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearDoctor />
        </div>
      ) : current === "4" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaDoctores />
        </div>
      ) : current === "5" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearOrden />
        </div>
      ) : current === "6" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaOrdenes />
        </div>
      ) : current === "7" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearPaciente />
        </div>
      ) : current === "8" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaPacientes />
        </div>
      ) : current === "9" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearResultado />
        </div>
      ) : current === "10" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaResultados />
        </div>
      ) : current === "11" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ResultadoPrueba style={{ width: "100%" }} />
        </div>
      ) : current === "12" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearBlog />
        </div>
      ) : current === "13" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaBlog />
        </div>
      ) : current === "14" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <Cortes />
        </div>
      ) : current === "15" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <Enfermeras />
        </div>
      ) : current === "16" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <General />
        </div>
      ) : (
        <div></div>
      )}
    </Content>
  );
}

export default ContentLayoutAdmin;
