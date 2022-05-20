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
import config from "../../aws-exports";

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
    console.log("esto es imagen", pruebaDetails.imagenPrueba);
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
              label="Nombre Prueba"
              name="nombrePrueba"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el nombre de la Prueba",
                },
              ]}
            >
              <Input />
            </Item>
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
              <Select>
                <Option value="pruebaRapida">Prueba Rápida</Option>
                <Option value="pruebaNoRapida">Prueba no rápida</Option>
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
              <Input />
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
              <InputNumber placeholder="precio" prefix="$" />
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
              <InputNumber placeholder="precio" prefix="$" />
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
              <TextArea rows={4} />
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
              <TextArea rows={2} />
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
              <Input placeholder="Resultados en 24 a 48 horas" />
            </Item>
            <Item label="Comentarios:" name="comentariosPrueba">
              <Input placeholder="Prueba post-vacuna o post-infección ..." />
            </Item>
            <Item label="Tipo de Muestra" name="tipoMuestraPrueba">
              <Input placeholder="Muestra de sangre" />
            </Item>
            <Item label="Requerimientos extra" name="requerimientoPrueba">
              <Input placeholder="Pedir vaso para orina..." />
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
