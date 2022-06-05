import React from "react";
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

import { DataStore } from "aws-amplify";
import { User } from "../../../../models";

const { Item } = Form;
const { Title } = Typography;
const { Option } = Select;

function BaseDatosUsuario({ sub }) {
  const onFinish = async values => {
    try {
      await DataStore.save(
        new User({
          nombre: values.nombre,
          email: values.email,
          whatsapp: values.whatsapp,
          role: values.role,
          sub: sub,
        })
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row>
        <Col xs={24}>
          <Title level={4} style={{ textAlign: "center" }}>
            Por favor es importante que llenes la siguiente información
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
              label="Nombre"
              name="nombre"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el nombre Común",
                },
              ]}
            >
              <Input placeholder="Ingresa tu nombre completo" />
            </Item>
            <Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu email",
                },
              ]}
            >
              <Input placeholder="Ingresa tu email" />
            </Item>
            <Item
              label="Whatsapp"
              name="whastapp"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu whatsapp",
                },
              ]}
            >
              <Input placeholder="Ingresa tu whatsapp" />
            </Item>
            <Item
              label="Role"
              name="role"
              rules={[
                {
                  required: true,
                  message: "Por favor selecciona qué rol tienes",
                },
              ]}
            >
              <Select placeholder="Selecciona tu Rol">
                <Option value="DOCTOR">DOCTOR</Option>
                <Option value="PACIENTE">PACIENTE</Option>
              </Select>
            </Item>
            <Button type="primary" htmlType="submit">
              Agregarme
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default BaseDatosUsuario;
