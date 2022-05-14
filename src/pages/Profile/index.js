import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, message } from "antd";
import { Container } from "react-bootstrap";
import "./styles.css";

import { DataStore, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { User } from "../../models";

//navigation
import { Navigate, useNavigate } from "react-router-dom";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function Profile({ signOut }) {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);

  let navigate = useNavigate();

  const sub = authUser?.attributes?.sub;

  const fetchUser = async () => {
    try {
      const usuario = await Auth.currentAuthenticatedUser();
      setAuthUser(usuario);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const checarDatos = async () => {
    const DatosUsuario = await DataStore.query(User, user =>
      user.sub("eq", sub)
    ).then(users => setDbUser(users[0]));
  };

  useEffect(() => {
    checarDatos();
  }, [sub]);

  const [form] = Form.useForm();

  const onFinish = values => {
    try {
      DataStore.save(
        new User({
          nombre: values.nombreUsuario,
          email: values.emailUsuario,
          whatsapp: values.whatsUsuario,
          role: values.roleUsuario,
          sub: sub,
        })
      );
      message.info("gracias por registrar tus datos");
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const Salir = async event => {
    event.preventDefault();
    await Auth.signOut();
    navigate("/");
  };

  if (!dbUser) {
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
          form={form}
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
              <Option value="ADMIN">Admin</Option>
              <Option value="EMPLEADO">Empleado</Option>
            </Select>
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
        <Button onClick={Salir}>Salir</Button>
      </Container>
    );
  }

  return <Navigate to="/admin" />;
}

export default withAuthenticator(Profile);
