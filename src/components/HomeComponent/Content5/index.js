import React from "react";
import { List, Avatar, Space, Card, Button } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import "./styles.css";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Pasos = [
  {
    id: 1,
    title: "Selecciona el Test",
    proceso: "Define el servicio que requieres por parte de RUTALAB.",
  },
  {
    id: 2,
    title: "Reserva y manda tu ubicación",
    proceso:
      "Da click y reserva el test que escogiste. A través de whatsapp manda tu ubicación.",
  },
  {
    id: 3,
    title: "Recibe al Laboratorista",
    proceso:
      "El test que seleccionaste se realiza con los estándares más altos de calidad para darte la mayor confiabilidad y cuidarte contra el COVID.",
  },
  {
    id: 4,
    title: "Checa el resultado",
    proceso:
      "En esta página web en la sección de clientes podrás revisar en todo momento tanto los resultados del test solicitado, como de estudios anteriores. También puedes solicitarlos por whatsapp.",
  },
];

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

const DataNew = [
  {
    id: 1,
    nombreprueba: "Grupo Sanguíneo y RH",
    category: "PRUEBA_RAPIDA",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 60,
    preciodescuento: 70,
    descripcionlarga:
      "Es un método para indicarle cuál es el tipo de sangre que usted tiene. La determinación del grupo sanguíneo se realiza para que usted pueda donar sangre o recibir una transfusión de sangre de manera segura. También se realiza para ver si usted posee una sustancia llamada factor Rh en la superficie de sus glóbulos rojos. No se requiere ayuno para esta prueba.",
    descripcioncorta:
      "Pide esta prueba si quieres saber que tipo de sangre y factor Rh eres.",
    resultados: "RESULTADOS EN dos horas",
    comentarios: "Es fundamental saber que tipo de sangre y factor contamos.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "Ninguno",
  },
  {
    id: 2,
    nombreprueba: "Grupo Sanguíneo y RH",
    category: "PRUEBA_RAPIDA",
    imagen:
      "https://imagenesrutalab.s3.amazonaws.com/sanmateo/servicios/anticuerpos.jpg",
    precio: 60,
    preciodescuento: 70,
    descripcionlarga:
      "Es un método para indicarle cuál es el tipo de sangre que usted tiene. La determinación del grupo sanguíneo se realiza para que usted pueda donar sangre o recibir una transfusión de sangre de manera segura. También se realiza para ver si usted posee una sustancia llamada factor Rh en la superficie de sus glóbulos rojos. No se requiere ayuno para esta prueba.",
    descripcioncorta:
      "Pide esta prueba si quieres saber que tipo de sangre y factor Rh eres.",
    resultados: "RESULTADOS EN dos horas",
    comentarios: "Es fundamental saber que tipo de sangre y factor contamos.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "Ninguno",
  },
  {
    id: 3,
    nombreprueba: "Grupo Sanguíneo y RH",
    category: "PRUEBA_RAPIDA",
    imagen:
      "https://imagenesrutalab.s3.amazonaws.com/sanmateo/servicios/PCR.jpg",
    precio: 60,
    preciodescuento: 70,
    descripcionlarga:
      "Es un método para indicarle cuál es el tipo de sangre que usted tiene. La determinación del grupo sanguíneo se realiza para que usted pueda donar sangre o recibir una transfusión de sangre de manera segura. También se realiza para ver si usted posee una sustancia llamada factor Rh en la superficie de sus glóbulos rojos. No se requiere ayuno para esta prueba.",
    descripcioncorta:
      "Pide esta prueba si quieres saber que tipo de sangre y factor Rh eres.",
    resultados: "RESULTADOS EN dos horas",
    comentarios: "Es fundamental saber que tipo de sangre y factor contamos.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "Ninguno",
  },
  {
    id: 4,
    nombreprueba: "Grupo Sanguíneo y RH",
    category: "PRUEBA_RAPIDA",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 60,
    preciodescuento: 70,
    descripcionlarga:
      "Es un método para indicarle cuál es el tipo de sangre que usted tiene. La determinación del grupo sanguíneo se realiza para que usted pueda donar sangre o recibir una transfusión de sangre de manera segura. También se realiza para ver si usted posee una sustancia llamada factor Rh en la superficie de sus glóbulos rojos. No se requiere ayuno para esta prueba.",
    descripcioncorta:
      "Pide esta prueba si quieres saber que tipo de sangre y factor Rh eres.",
    resultados: "RESULTADOS EN dos horas",
    comentarios: "Es fundamental saber que tipo de sangre y factor contamos.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "Ninguno",
  },
];

function Content5() {
  return (
    <div className="pt-4 text-center bg-light">
      <h1 className="fw-bold fs-2 p-3">¿Qué pruebas tienen disponibles?</h1>
      <div>
        <List
          grid={{
            gutter: 20,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 4,
          }}
          dataSource={DataNew}
          footer={
            <div>
              <Link to="/otraspruebas">
                <p class="fs-4 fw-bold">Otras pruebas...</p>
              </Link>
            </div>
          }
          renderItem={item => (
            <List.Item
              sx={{ display: "flex", justifyContent: "center" }}
              className="listPruebas"
            >
              <Card
                hoverable
                style={{ width: 240, borderRadius: 10 }}
                bordered={false}
                sx={{
                  borderRadius: 10,
                }}
                cover={
                  <img
                    alt="example"
                    src={item.imagen}
                    style={{ borderRadius: "10px 10px 0px 0px" }}
                  />
                }
              >
                <Meta
                  title={item.nombreprueba}
                  description={item.descripcioncorta}
                />
                <Button
                  style={{
                    marginTop: 4,
                    backgroundColor: "#208C7E",
                    borderRadius: 5,
                  }}
                >
                  <a
                    href="https://wa.me/+5219511028474"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    ¡Reserva ya!{" "}
                  </a>
                </Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default Content5;
