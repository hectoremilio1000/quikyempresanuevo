
import React from "react";
import BannerComponent from "../../components/BannerComponent";
import TituloTexto from "../../components/TituloTextoComponent/index";

function Maquila() {
  return (
    <>
      <BannerComponent
        titulo="Aquí te maquilamos"
        text1="Maquilamos tus estudios rápido y a excelentes precios"
        background="https://img.freepik.com/free-photo/front-view-female-scientist-with-test-tube-copy-space_23-2148799318.jpg"
      />
      <TituloTexto
        titulo="¿Buscas un proveedor confiable para Maquilar?"
        texto1="Ofrecemos servicios de maquila a clínicas, laboratorios y empresas, a los mejores precios y cumpliendo con calidad y el mejor servicio a todos nuestros clientes."
      />
      <TituloTexto texto1="Al elegir maquilar con Laboratorios San Mateo obtendrás soporte continúo, así como asesoría en tiempo real, asimismo trabajaras con uno de los laboratorios más reconocidos, contando con un software que te permitirá tener el control de los análisis solicitados. Asimismo, nosotros nos encargaremos de hacerte llegar promociones, información sobre cursos, así como información actualizada del sector de laboratorios." />
     
    </>
  )
}

export default Maquila;
