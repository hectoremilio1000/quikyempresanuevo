import React from "react";
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Select,
  TimePicker,
  Button,
} from "antd";

const { Title } = Typography;
const { Item } = Form;
const { Option } = Select;

function CrearDoctor() {
  const onFinish = values => {
    console.log(values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row>
      <Col xs={24}>
        <Title level={4} style={{ textAlign: "center" }}>
          Crear Doctor nuevo
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
            label="Nombre(s)"
            name="nombreDoctor"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el nombre(s)",
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            label="Apellido paterno"
            name="apellidoPaternoDoctor"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el Apellido paterno",
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            label="Apellido materno"
            name="apellidoMaternoMaterno"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el Apellido materno",
              },
            ]}
          >
            <Input />
          </Item>

          <Item label="Fecha de nacimiento" name="fechaNacimientoPaciente">
            <DatePicker placeholder="fecha" />
          </Item>
          <Item label="Edad" name="edadPaciente">
            <InputNumber style={{ width: "50%" }} placeholder="solo números" />
          </Item>
          <Item label="Dirección" name="direccionPaciente">
            <Input placeholder="Independencia 1423 colonia centro c.p. 68000 Oaxaca de Juárez Oaxaca" />
          </Item>
          <Item
            label="Email o whats escoger"
            name="correoelectronicoWhatsescogerPaciente"
          >
            <Select>
              <Option value="correoelectronicodirigido">
                Correo electrónico paciente
              </Option>
              <Option value="whatsdirigido">Whatsapp paciente</Option>
            </Select>
          </Item>

          <Item
            label="Email o whats escribir"
            name="correoelectronicoWhatsescribirPaciente"
          >
            <Input placeholder="escríbelo" />
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
  );
}

export default CrearDoctor;
