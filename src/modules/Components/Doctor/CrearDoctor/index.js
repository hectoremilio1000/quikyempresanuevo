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
          <Item
            label="Especialidad"
            name="especialidad"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el sexo del paciente",
              },
            ]}
          >
            <Select placeholder="Médico General">
              <Option value="MEDICOGENERAL">Médico General</Option>
              <Option value="HEMATOLOGIA">Hematología</Option>
              <Option value="MEDICINAINTERNA">Medicina Interna</Option>
              <Option value="CARDIOLOGIA">Cardiología</Option>

              <Option value="CIRUGIA">Cirugía</Option>
              <Option value="UROLOGIA">Urología</Option>
              <Option value="GINECOLOGIA">Ginecología</Option>
              <Option value="PEDIATRIA">Pediatría</Option>
              <Option value="OTRO">Otro</Option>
              <Option value="AQUIENCORRESPONDA">A quien corresponda</Option>
            </Select>
          </Item>
          <Item label="Fecha de nacimiento" name="fechaNacimientoPaciente">
            <DatePicker placeholder="fecha" />
          </Item>
          <Item label="Edad" name="edadPaciente">
            <InputNumber style={{ width: "50%" }} placeholder="solo números" />
          </Item>
          <Item label="Calle" name="calle">
            <Input placeholder="Independencia" />
          </Item>

          <Item label="Num. ext." name="numexterior">
            <Input placeholder="132" />
          </Item>

          <Item label="Num. int." name="numinterior">
            <Input placeholder="2" />
          </Item>
          <Item label="Colonia" name="colonia">
            <Input placeholder="centro" />
          </Item>
          <Item label="C.P." name="cp">
            <Input placeholder="68000" />
          </Item>

          <Item label="Municipio" name="municipio">
            <Input placeholder="Oaxaca de Juárez" />
          </Item>

          <Item label="Estado" name="estado">
            <Input placeholder="Oaxaca" />
          </Item>

          <Item label="País" name="pais">
            <Input placeholder="México" />
          </Item>

          <Item label="Email" name="email">
            <Input placeholder="ejemplo@hotmail.com" />
          </Item>

          <Item label="Whatsapp" name="whatsapp">
            <Input placeholder="ejemplo@hotmail.com" />
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
