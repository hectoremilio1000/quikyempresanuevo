import React from "react";
import { Form, Input, Button, Select } from "antd";
import { Container } from "react-bootstrap";

import { DataStore } from "aws-amplify";

import { Enfermeras } from "../../../models";
import { message } from "antd";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function RegistrameEnfermera() {
  const [form] = Form.useForm();

  const onFinish = values => {
    try {
      DataStore.save(
        new Enfermeras({
          nombre: values.nombre,
          email: values.email,
          whats: values.whats,
          direccion: values.direccion,
          numexterior: values.numexterior,
          numinterior: values.numinterior,
          codigopostal: values.codigopostal,
          colonia: values.colonia,
          municipio: values.municipio,
          ciudad: values.ciudad,
          estado: values.estado,
          edad: values.edad,
          cedula: values.cedulaprofesional,
          antiguedad: values.antiguedad,
          especialidad: values.especialidad,
          curso: values.cursoespecializado,
          sub: "1",
        })
      );

      message.info("valores enviados");
      console.log(values);
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div id="registrame" className="mb-4">
      <Container style={{ marginTop: 20 }}>
        <p className="display-6 text-center">
          Es muy rápido, sólo ingresa tus datos
        </p>
        <Form
          name="control-hooks"
          {...layout}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Nombre Completo"
            name="nombre"
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
            name="email"
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
            name="whats"
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
            label="Dirección:"
            name="direccion"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu dirección",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Núm. Ext.:"
            name="numexterior"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu número exterior",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Núm. Int.:"
            name="numinterior"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu número interior",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="C.P.:"
            name="codigopostal"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu código postal",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Colonia:"
            name="colonia"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu colonia",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Municipio:"
            name="municipio"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu municipio",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Ciudad:"
            name="ciudad"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu ciudad",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Estado:"
            name="estado"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu Estado de la República",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Edad:"
            name="edad"
            type="number"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu edad",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Cédula Profesional:"
            name="cedulaprofesional"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu cédula profesional",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Antigüedad:"
            name="antiguedad"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tus años de antigüedad",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Especialidad:"
            name="especialidad"
            rules={[
              {
                required: true,
                message: "Tienes alguna especialidad?",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Curso Especializado:"
            name="cursoespecializado"
            rules={[
              {
                required: true,
                message: "Tienes algún curso especializado",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </div>
  );
}

export default RegistrameEnfermera;
