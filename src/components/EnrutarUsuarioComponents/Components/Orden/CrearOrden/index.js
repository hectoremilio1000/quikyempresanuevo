import React from "react";
import { v4 as uuidv4 } from "uuid";
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

function CrearOrden() {
  const onFinish = values => {
    console.log(values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const format = "HH:mm";
  return (
    <Row>
      <Col xs={24}>
        <Title level={4} style={{ textAlign: "center" }}>
          Crear orden
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
            label="Nombre(s) paciente"
            name="nombrePacienteOrden"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el nombre(s) del usuario",
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            label="Apellido paterno "
            name="apellidoPaternoPacienteOrden"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el apellido paterno",
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            label="Apellido materno"
            name="apellidoMaternoPacienteOrden"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el apellido materno",
              },
            ]}
          >
            <Input />
          </Item>
          <Item label="Fecha Orden" name="fechaOrden">
            <DatePicker placeholder="fecha" />
          </Item>
          <Item label="Hora muestra" name="horaOrden">
            <TimePicker placeholder="fecha" format={format} />
          </Item>
          <Item
            label="Email/whats escoger paciente"
            name="emailWhatsEscogerPacienteOrden"
          >
            <Select>
              <Option value="correoelectronicodirigido">
                Correo electrónico paciente
              </Option>
              <Option value="whatsdirigido">Whatsapp paciente</Option>
            </Select>
          </Item>

          <Item
            label="Email/whats escribir paciente"
            name="correoelectronicoWhatsescribirPaciente"
          >
            <Input placeholder="escríbelo" />
          </Item>
          <Item label="prueba(s)" name="pruebaOrden">
            <Input placeholder="escríbelo" />
          </Item>
          <Item label="costo total" name="costoPruebaOrden">
            <InputNumber placeholder="costo total" prefix="$" />
          </Item>

          <Item label="Forma de pago" name="formaPagoOrden">
            <Select placeholder="selecciona">
              <Option value="efectivo">EFECTIVO</Option>
              <Option value="tarjeta">TARJETA</Option>
              <Option value="transferencia">TRANSFERENCIA</Option>
            </Select>
          </Item>

          <Item label="ingresado por" name="ingresadoPorOrden">
            <Input />
          </Item>
          <Item label="Lugar de toma de muestra" name="lugarTomaMuestraOrden">
            <Select placeholder="selecciona" style={{ width: "50%" }}>
              <Option value="sucursal">SUCURSAL</Option>
              <Option value="domicilio">DOMICILIO</Option>
            </Select>
          </Item>
          <Item label="Dirección" name="direccionTomaMuestraOrden">
            <Input placeholder="Independencia 1423 colonia centro c.p. 68000 Oaxaca de Juárez Oaxaca" />
          </Item>

          <Item label="Nombre Doctor dirigido" name="doctorDirigidoOrden">
            <Input placeholder="nombre doctor" />
          </Item>
          <Item label="email/whats dirigido" name="emailWhatsDirigidoOrden">
            <Select>
              <Option value="correoelectronicodirigido">
                Correo electrónico
              </Option>
              <Option value="whatsdirigido">Whatsapp</Option>
            </Select>
          </Item>

          <Item
            label="Email/whats definir dirigido"
            name="emailWhatsDirigidoDefinirOrden"
          >
            <Input placeholder="escríbelo" />
          </Item>

          <Item label="Mandado por o recomendado" name="mandadoporOrden">
            <Input />
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

export default CrearOrden;
