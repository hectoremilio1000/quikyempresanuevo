import React, { useState, useEffect } from "react";
import { Card, View, useTheme } from "@aws-amplify/ui-react";

import TituloCustom from "../components/TituloCustom/index";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

function SignUp() {
  const { tokens } = useTheme();

  let navigate = useNavigate();

  const RegresarInicio = () => {
    navigate("/admin/signin", { replace: true });
  };

  const checkUser = async () => {
    try {
      await Auth.currentAuthenticatedUser({ bypassCache: true });
      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const onFinish = async values => {
    const { username, password, email } = values;
    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      navigate(
        "/admin/confirmemail",
        { state: { username: username } },
        { replace: true }
      );
    } catch (error) {
      message.info("algo ha salido mal, envíanos un whats");
    }
  };

  // useEffect(() => {
  //   Auth.currentAuthenticatedUser().then(
  //     navigate("/admin/dashboard", { replace: true })
  //   );
  // }, []);

  return (
    <View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
      style={styles.root}
    >
      <Card style={styles.container}>
        <TituloCustom titulo="Registrarme" />
        <Form onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu email!",
              },
              {
                type: "email",
                message: "No es un tipo de email válido",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu email!",
              },
              {
                type: "email",
                message: "No es un tipo de email válido",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("email") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "El nombre de usuario y el email deben ser el mismo"
                    )
                  );
                },
              }),
            ]}
          >
            <Input placeholder="Usuario" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu password!",
              },
              {
                min: 6,
                message: "El password debe ser de mínimo 6 caracteres",
              },
            ]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "#30AFD3",
                borderRadius: 5,
                borderColor: "#30AFD3",
              }}
            >
              Registrarme
            </Button>
          </Form.Item>
        </Form>

        <div>
          <Button type="link" onClick={RegresarInicio}>
            Tienes Cuenta? Inicia Sesión
          </Button>
        </div>
      </Card>
    </View>
  );
}

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: 600,
    maxWidth: 500,
  },
  subcontainer: {
    margin: 10,
  },
};

export default SignUp;
