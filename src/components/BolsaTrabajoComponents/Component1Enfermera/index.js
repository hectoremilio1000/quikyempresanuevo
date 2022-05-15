import React from "react";
import CardEnfermeraVector from "../CardEnfermeraVector";
const CardData = [
  {
    id: 1,
    imagen:
      "https://mexico.didiglobal.com/wp-content/uploads/sites/5/2021/08/Pampers-SEO-Page_OwnBoss_Icon.png",
    alt: "enfermeraSanMateo",
    texto: "Sé tu propio jefe",
  },
  {
    id: 2,
    imagen:
      "https://mexico.didiglobal.com/wp-content/uploads/sites/5/2021/08/Pampers-SEO-Page_Earnings_Icon.png",
    alt: "enfermeraSanMateo",
    texto: "Gana el dinero que te mereces",
  },
  {
    id: 3,
    imagen:
      "https://mexico.didiglobal.com/wp-content/uploads/sites/5/2021/08/Pampers-SEO-Page_OwnBusiness_Icon.png",
    alt: "enfermeraSanMateo",
    texto: "Logra tus sueños con tu trabajo",
  },
  {
    id: 4,
    imagen:
      "https://imagenesrutalab.s3.amazonaws.com/sanmateo/iconos/calendariofinal.png",
    alt: "enfermeraSanMateo",
    texto: "Tú defines los días y las horas",
  },
];

function Component1Enfermera() {
  return (
    <div className="album mt-4">
      <div className="mb-4">
        <h4 className="text-center font-weight-bold">
          ¿Por qué registrarse con nosotros como Enfermera?
        </h4>
      </div>
      <div className="container">
        <div className="row">
          {CardData.map(item => (
            <CardEnfermeraVector
              imagen={item.imagen}
              key={item.id}
              alt={item.alt}
              texto={item.texto}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Component1Enfermera;
