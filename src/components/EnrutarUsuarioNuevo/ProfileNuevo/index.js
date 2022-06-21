import React, { useState, useEffect } from "react";
import { Input, Button, Select, message, Form } from "antd";
import "./styles.css";
import { DataStore, Auth } from "aws-amplify";
import { Container } from "react-bootstrap";
import { User } from "../../../models";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function ProfileNuevo({ sub, setDbUser, dbUser }) {
  const onFinish = async values => {
    try {
      const user = await DataStore.save(
        new User({
          nombre: values.nombreUsuario,
          email: values.emailUsuario,
          whatsapp: values.whatsUsuario,
          role: values.roleUsuario,
          sub: sub,
        })
      );
      setDbUser(user);

      message.info("gracias por registrar tus datos");
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <p className="display-6 text-center">Por favor ingresa tus datos</p>
      <Form
        name="control-hooks"
        {...layout}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre Completo"
          name="nombreUsuario"
          rules={[
            {
              required: true,
              message: "Por favor escribe tu nombre completo",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email:"
          name="emailUsuario"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Whats:"
          name="whatsUsuario"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu whatsapp",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Role"
          name="roleUsuario"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Selecciona tu role" allowClear>
            <Option value="DOCTOR">Doctor</Option>
            <Option value="PACIENTE">Paciente</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Registrarme
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

export default ProfileNuevo;
