import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
// import { API, graphqlOperation, Storage } from "aws-amplify";
// import { createPruebas } from "../../../src/graphql/mutations";
import config from "../../../../../aws-exports";

//import config storage
const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const { Title } = Typography;
const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;

function CrearPruebas() {
  const [image, setImage] = useState(null);
  const [pruebaDetails, setPruebaDetails] = useState({
    id: "",
    key: "",
    nombrePrueba: "",
    categoriaPrueba: "",
    imagenPrueba: "",
    creadoPorPrueba: "",
    precioPrueba: "",
    precioPruebaViejo: "",
    descripcionLargaPrueba: "",
    descripcionCortaPrueba: "",
    tiempoEntregaPrueba: "",
    comentariosPrueba: "",
    tipoMuestraPrueba: "",
    requerimientoPrueba: "",
  });

  const normFile = async e => {
    const fileUpload = e.fileList[0];
    const fileExtension = fileUpload.name.split(".")[1];
    const fileName = fileUpload.name.split(".")[0];
    const fileKey = `images/${uuidv4()}${fileName}.${fileExtension}`;
    const fileUrl = `https://${bucket}.s3.${region}.amazonaws.com/public/${fileKey}`;

    try {
      await Storage.put(fileKey, fileUpload, {
        level: "public",
        contentType: fileUpload.type,
      });
      //retrieve the upload file to display//
      const image = await Storage.get(fileKey, { level: "public" });
      setImage(image);
      setPruebaDetails({ ...pruebaDetails, imagenPrueba: fileUrl });
      console.log("imagen", image);
      console.log("prueba details 1", pruebaDetails.imagenPrueba);
    } catch (error) {
      console.log(error);
    }

    if (Array.isArray(e)) {
      console.log("array", e);
      return e;
    }
    return e && e.fileList;
  };

  const onFinishFailed = async errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = async values => {
    console.log("esto es imagen", values);
    try {
      // const pruebaDetails = {
      //   id: uuidv4(),
      //   key: uuidv4(),
      //   nombrePrueba: values.nombrePrueba,
      //   categoriaPrueba: values.categoriaPrueba,

      //   creadoporPrueba: values.creadoporPrueba,
      //   precioPrueba: values.precioPrueba,
      //   precioPruebaViejo: values.precioPruebaViejo,
      //   descripcionLargaPrueba: values.descripcionLargaPrueba,
      //   descripcionCortaPrueba: values.descripcionCortaPrueba,
      //   tiempoEntregaPrueba: values.tiempoEntregaPrueba,
      //   comentariosPrueba: values.comentariosPrueba,
      //   tipoMuestraPrueba: values.tipoMuestraPrueba,
      //   requerimientoPrueba: values.requerimientoPrueba,
      // };

      // await API.graphql(
      //   graphqlOperation(createPruebas, { input: pruebaDetails })
      // );
      setPruebaDetails({
        id: "",
        key: "",
        nombrePrueba: "",
        categoriaPrueba: "",
        imagenPrueba: "",
        creadoPorPrueba: "",
        precioPrueba: "",
        precioPruebaViejo: "",
        descripcionLargaPrueba: "",
        descripcionCortaPrueba: "",
        tiempoEntregaPrueba: "",
        comentariosPrueba: "",
        tipoMuestraPrueba: "",
        requerimientoPrueba: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Row>
        <Col xs={24}>
          <Title level={4} style={{ textAlign: "center" }}>
            Crear Pruebas
          </Title>
        </Col>
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
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Item
              label="Nombre com??n"
              name="nombreComunPrueba"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el nombre Com??n",
                },
              ]}
            >
              <Input placeholder="Tipo de sangre" />
            </Item>
            <Item
              label="Nombre Prueba"
              name="nombrePrueba"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el nombre qu??mico de la Prueba",
                },
              ]}
            >
              <Input placeholder="ej: Nombre qu??mico de la prueba" />
            </Item>
            <Item
              label="Categor??a Prueba"
              name="categoriaPrueba"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa la categor??a de la Prueba",
                },
              ]}
            >
              <Select placeholder="Hematolog??a">
                <Option value="pruebaRapida">Prueba R??pida</Option>
                <Option value="pruebaNoRapida">Prueba no r??pida</Option>
              </Select>
            </Item>
            {/* <Item
              name="imagenPrueba"
              label="Cargar imagen"
              valuePropName="fileUpload"
              getValueFromEvent={normFile}
            >
              <Upload
                action={pruebaDetails.imagenPrueba}
                beforeUpload={Upload.LIST_IGNORE}
              >
                <Button icon={<UploadOutlined />}>Subir</Button>
              </Upload>
            </Item> */}
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
              <Select placeholder="DANIA YARELI L??PEZ GONZ??LEZ">
                <Option value="luzmar??a">LUZ MAR??A GARC??A GARC??A</Option>
                <Option value="daniayareli">DANIA YARELI L??PEZ GONZ??LEZ</Option>
                <Option value="davidsandoval">DAVID SANDOVAL CH??VEZ</Option>
              </Select>
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
              <InputNumber placeholder="120" prefix="$" />
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
              <InputNumber placeholder="80" prefix="$" />
            </Item>
            <Item
              label="Descripci??n larga"
              name="descripcionLargaPrueba"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa la descripci??n larga",
                },
              ]}
            >
              <TextArea
                rows={4}
                placeholder="ej: El examen para determinar el grupo sangu??neo se denomina tipificaci??n ABO. Su muestra de sangre se mezcla con anticuerpos contra sangre tipo A y tipo B. Entonces, la muestra se revisa para ver si los gl??bulos sangu??neos se pegan o no. Si los gl??bulos permanecen juntos, eso significa que la sangre reaccion?? con uno de los anticuerpos.

El segundo paso se llama prueba inversa. La parte l??quida de la sangre sin c??lulas (suero) se mezcla con sangre que se sabe que pertenece al tipo A o al tipo B. Las personas con sangre tipo A tienen anticuerpos anti-B. Las personas que tienen sangre tipo B tienen anticuerpos anti-A. El tipo de sangre O contiene ambos tipos de anticuerpos."
              />
            </Item>
            <Item
              label="Descripci??n corta"
              name="descripcionCortaPrueba"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa la descripci??n corta",
                },
              ]}
            >
              <TextArea
                rows={2}
                placeholder="ej: Solicita esta prueba para conocer tu grupo sangu??neo"
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
              <Input placeholder="ej: Resultados en 24 a 48 horas" />
            </Item>

            <Item
              label="Indicaciones"
              name="indicacionesprueba"
              rules={[
                {
                  required: true,
                  message: "Por favor escribe la indicaci??n al paciente",
                },
              ]}
            >
              <TextArea
                rows={3}
                placeholder="ej: Recolectar aproximadamente 10 ml (mitad de frasco) de orina (primera o segunda de la ma??ana) en frasco de pl??stico est??ril. No deben transcurrir m??s de 2 horas de recolecci??n antes de ir a dejarlo al laboratorio."
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
              <Select placeholder="Heces">
                <Option value="heces">Heces</Option>
                <Option value="suero">Suero</Option>
                <Option value="sangretotal">Sangre total</Option>
                <Option value="orina">Orina</Option>
                <Option value="exsudadofaringeo">Exsudado far??ngeo</Option>
                <Option value="exudadonasofaringeo">
                  Exudado Nasofar??ngeo
                </Option>
                <Option value="exudadouretral">Exudado Uretral</Option>
                <Option value="biopsiasorganosespeciales">
                  Biopsias de organos especiales
                </Option>
              </Select>
            </Item>

            <Item
              label="Tipo de Contenedor"
              name="tipocontenedor"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el tiempo de contenedor",
                },
              ]}
            >
              <Select placeholder="Frasco est??ril aprox 50 ml">
                <Option value="frascoesterilaprox50ml">
                  Frasco est??ril aprox 50 ml
                </Option>
              </Select>
            </Item>

            <Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Agregar
              </Button>
            </Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default CrearPruebas;
