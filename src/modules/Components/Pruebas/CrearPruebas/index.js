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

  const onFinishFailed = async errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = async values => {
    console.log("esto es imagen", values);
  };
  return (
    <div>
      <Row>
        <Col xs={24}>
          <Title level={4} style={{ textAlign: "center" }}>
            Crear Prueba
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
                  message: "Por favor ingresa el nombre Común",
                },
              ]}
            >
              <Input placeholder="ej: Biometría hemática" />
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
              <Select placeholder="Hematología">
                <Option value="Hematología">Hematología</Option>
                <Option value="QuímicaSanguíne">Química Sanguínea</Option>
                <Option value="Coagulación">Coagulación</Option>
                <Option value="Serología">Serología</Option>
                <Option value="Uroanálisis">Uroanálisis</Option>
                <Option value="Microbiología">Microbiología</Option>
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
              <Select placeholder="DAVID SANDOVAL CHÁVEZ">
                <Option value="luzmaría">LUZ MARÍA GARCÍA GARCÍA</Option>

                <Option value="davidsandoval">DAVID SANDOVAL CHÁVEZ</Option>
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
                placeholder="ej: El examen para determinar el grupo sanguíneo se denomina tipificación ABO. Su muestra de sangre se mezcla con anticuerpos contra sangre tipo A y tipo B. Entonces, la muestra se revisa para ver si los glóbulos sanguíneos se pegan o no. Si los glóbulos permanecen juntos, eso significa que la sangre reaccionó con uno de los anticuerpos.
El segundo paso se llama prueba inversa. La parte líquida de la sangre sin células (suero) se mezcla con sangre que se sabe que pertenece al tipo A o al tipo B. Las personas con sangre tipo A tienen anticuerpos anti-B. Las personas que tienen sangre tipo B tienen anticuerpos anti-A. El tipo de sangre O contiene ambos tipos de anticuerpos."
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
                  message: "Por favor escribe la indicación al paciente",
                },
              ]}
            >
              <TextArea
                rows={3}
                placeholder="ej: Recolectar aproximadamente 10 ml (mitad de frasco) de orina (primera o segunda de la mañana) en frasco de plástico estéril. No deben transcurrir más de 2 horas de recolección antes de ir a dejarlo al laboratorio."
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
                <Option value="exsudadofaringeo">Exsudado faríngeo</Option>
                <Option value="exudadonasofaringeo">
                  Exudado Nasofaríngeo
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
              <Select placeholder="Lila - EDTA">
                <Option value="Lila-EDTA">Lila - EDTA</Option>
                <Option value="Azul-Citrato de Sodio">
                  Azul - Citrato de Sodio
                </Option>
                <Option value="Dorado-Gel">Dorado - Gel</Option>
                <Option value="Rojo-Aditivo coagule">
                  Rojo-Aditivo coagule
                </Option>
                <Option value="FrascoEstéril">Frasco Estéril</Option>
                <Option value="Stuart-laminilla">Stuart-laminilla</Option>
                <Option value="Frascohemocultivo">Frasco hemocultivo</Option>
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
