import React, { useEffect, useState } from "react";
import { Storage, DataStore } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { Pruebas } from "../../../../../models";
import { Button, Col, Form, Input, Typography, Divider } from "antd";

import config from "../../../../../aws-exports";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const { Title } = Typography;
const { Item } = Form;
const { TextArea } = Input;

function CrearBlog() {
  const [nombre, setNombre] = useState("");
  const [image, setImage] = useState([]);
  const [imageDetails, setImageDetails] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [creadoPor, setCreadoPor] = useState("");
  const [precio, setPrecio] = useState("");
  const [descuento, setDescuento] = useState("");
  const [descripcionLarga, setDescripcionLarga] = useState("");
  const [descripcionCorta, setDescripcionCorta] = useState("");
  const [tiempoEntrega, setTiempoEntrega] = useState("");
  const [indicaciones, setIndicaciones] = useState("");
  const [tipoMuestra, setTipoMuestra] = useState("");
  const [tipoContenedor, setTipoContenedor] = useState("");
  const [prueba, setPrueba] = useState([]);
  const [pruebasQuery, setPruebasQuery] = useState(null);

  const subirImagen = async e => {
    e.preventDefault();
    const fileUpload = e.target.files[0];
    const fileExtension = fileUpload.name.split(".")[1];
    const fileName = fileUpload?.name.split(".")[0];
    const fileKey = `images/images2/${uuidv4()}${fileName}.${fileExtension}`;
    const fileUrl = `https://${bucket}.s3.${region}.amazonaws.com/public/${fileKey}`;

    try {
      await Storage.put(fileKey, fileUpload);
      const image = await Storage.get(fileKey, { level: "public" });
      setImage(image);
      setImageDetails(fileUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const Enviar = async () => {
    try {
      const prueba = await DataStore.save(
        new Pruebas({
          nombre: nombre,
          imagen: imageDetails,
        })
      );
      setPrueba(prueba);
    } catch (error) {
      console.log(error);
    }

    // nombre,
    // image,
    // categoria,
    // creadoPor,
    // precio,
    // descuento,
    // descripcionLarga,
    // descripcionCorta,
    // tiempoEntrega,
    // tiempoEntrega,
    // indicaciones,
    // tipoMuestra,
    // tipoContenedor
  };

  useEffect(() => {
    if (!prueba) {
      return;
    }
    DataStore.query(Pruebas, prueba.id).then(setPruebasQuery);
  }, [prueba]);
  console.log("aquí pruebas query", pruebasQuery);
  return (
    <div>
      <Title level={4} style={{ textAlign: "center" }}>
        Crear Pruebas
      </Title>
      <Col xs={23} sm={20} md={20} lg={20}>
        <Form
          name=""
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 18,
          }}
          autoComplete="off"
          onFinish={() => {}}
        >
          <Item
            label="Nombre común"
            name="nombreComunPrueba"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el nombre Común",
              },
            ]}
          >
            <Input
              placeholder="Tipo de sangre"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </Item>

          <Item
            label="Sube la imagen"
            name="imagen"
            rules={[
              {
                required: true,
                message: "Por favor ingresa sube la imagen",
              },
            ]}
          >
            <input type="file" value={imageDetails} onChange={subirImagen} />
          </Item>
          {image ? (
            <img
              className="image-preview"
              src={image}
              alt=""
              width="200"
              height="150"
            />
          ) : (
            <></>
          )}
          <Item
            label="Categoría Prueba"
            name="categoriaPrueba"
            rules={[
              {
                required: true,
                message: "Por favor ingresa la categoría de la Prueba",
              },
            ]}
          >
            <select
              onChange={e => setCategoria(e.target.value)}
              value={categoria}
            >
              <option value="pruebaRapida">Prueba Rápida</option>
              <option value="pruebaNoRapida">Prueba no rápida</option>
            </select>
          </Item>
          <Item
            label="Creado por"
            name="creadoporPrueba"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu nombre",
              },
            ]}
          >
            <select
              value={creadoPor}
              onChange={e => setCreadoPor(e.target.value)}
            >
              <option value="luzmaría">LUZ MARÍA GARCÍA GARCÍA</option>
              <option value="davidsandoval">DAVID SANDOVAL CHÁVEZ</option>
            </select>
          </Item>

          <Item
            label="Precio de la Prueba"
            name="precioPrueba"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el precio",
              },
            ]}
          >
            <Input
              placeholder="120"
              prefix="$"
              value={precio}
              onChange={e => setPrecio(e.target.value)}
            />
          </Item>
          <Item
            label="Precio Descuento"
            name="precioDescuento"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el precio viejo",
              },
            ]}
          >
            <Input
              placeholder="80"
              prefix="$"
              value={descuento}
              onChange={e => setDescuento(e.target.value)}
            />
          </Item>
          <Item
            label="Descripción larga"
            name="descripcionLargaPrueba"
            rules={[
              {
                required: true,
                message: "Por favor ingresa la descripción larga",
              },
            ]}
          >
            <TextArea
              rows={4}
              placeholder="ej: El examen para determinar el grupo sanguíneo se denomina tipificación ABO. Su muestra de sangre se mezcla con anticuerpos contra sangre tipo A y tipo B. Entonces, la muestra se revisa para ver si los glóbulos sanguíneos se pegan o no. Si los glóbulos permanecen juntos, eso significa que la sangre reaccionó con uno de los anticuerpos. El segundo paso se llama prueba inversa. La parte líquida de la sangre sin células (suero) se mezcla con sangre que se sabe que pertenece al tipo A o al tipo B. Las personas con sangre tipo A tienen anticuerpos anti-B. Las personas que tienen sangre tipo B tienen anticuerpos anti-A. El tipo de sangre O contiene ambos tipos de anticuerpos."
              value={descripcionLarga}
              onChange={e => setDescripcionLarga(e.target.value)}
            />
          </Item>
          <Item
            label="Descripción corta"
            name="descripcionCortaPrueba"
            rules={[
              {
                required: true,
                message: "Por favor ingresa la descripción corta",
              },
            ]}
          >
            <TextArea
              rows={2}
              placeholder="ej: Solicita esta prueba para conocer tu grupo sanguíneo"
              value={descripcionCorta}
              onChange={e => setDescripcionCorta(e.target.value)}
            />
          </Item>
          <Item
            label="Tiempo de entrega"
            name="tiempoEntregaPrueba"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el tiempo de entrega",
              },
            ]}
          >
            <Input
              placeholder="ej: Resultados en 24 a 48 horas"
              value={tiempoEntrega}
              onChange={e => setTiempoEntrega(e.target.value)}
            />
          </Item>

          <Item
            label="Indicaciones"
            name="indicacionesprueba"
            rules={[
              {
                required: true,
                message: "Por favor escribe la indicación al paciente",
              },
            ]}
          >
            <TextArea
              rows={3}
              placeholder="ej: Recolectar aproximadamente 10 ml (mitad de frasco) de orina (primera o segunda de la mañana) en frasco de plástico estéril. No deben transcurrir más de 2 horas de recolección antes de ir a dejarlo al laboratorio."
              value={indicaciones}
              onChange={e => setIndicaciones(e.target.value)}
            />
          </Item>
          <Item
            label="Tipo de Muestra"
            name="tipoMuestraPrueba"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el tiempo de entrega",
              },
            ]}
          >
            <select
              placeholder="Heces"
              value={tipoMuestra}
              onChange={e => setTipoMuestra(e.target.value)}
            >
              <option value="heces">Heces</option>
              <option value="suero">Suero</option>
              <option value="sangretotal">Sangre total</option>
              <option value="orina">Orina</option>
              <option value="exsudadofaringeo">Exsudado faríngeo</option>
              <option value="exudadonasofaringeo">Exudado Nasofaríngeo</option>
              <option value="exudadouretral">Exudado Uretral</option>
              <option value="biopsiasorganosespeciales">
                Biopsias de organos especiales
              </option>
            </select>
          </Item>

          <Item
            label="Tipo de Contenedor"
            name="tipocontenedor"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el tipo de contenedor",
              },
            ]}
          >
            <select
              placeholder="Frasco estéril aprox 50 ml"
              value={tipoContenedor}
              onChange={e => setTipoContenedor(e.target.value)}
            >
              <option value="sincontenedor">Sin contenedor</option>
              <option value="frascoesterilaprox50ml">
                Frasco estéril aprox 50 ml
              </option>
            </select>
          </Item>

          <Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={Enviar}>
              Enviar
            </Button>
          </Item>
        </Form>
      </Col>
      <Divider />
      {image ? <img className="image-preview" src={image} alt="" /> : <></>}
      <Divider />
      <div>
        <h2>aquí se muestra la prueba pero extraída con datastore</h2>
        {
          <img
            className="image-preview"
            src={pruebasQuery?.imagen}
            alt=""
            width="300"
            height="250"
          />
        }
      </div>
    </div>
  );
}

export default CrearBlog;
