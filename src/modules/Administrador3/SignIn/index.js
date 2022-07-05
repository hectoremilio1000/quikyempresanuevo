import React, { useState, useEffect } from "react";
import { Card, View, useTheme } from "@aws-amplify/ui-react";

import TituloCustom from "../components/TituloCustom";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

/* eslint-enable no-template-curly-in-string */

const SignIn = () => {
  const [authUser, setAuthUser] = useState(null);

  const [loading, setLoading] = useState(false);
  const { tokens } = useTheme();

  let navigate = useNavigate();

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

  const Registrarse = () => {
    navigate("/admin/signup", { replace: true });
  };

  const ForgotPassword = () => {
    navigate("/admin/forgotpassword", { replace: true });
  };

  const onFinish = async values => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signIn(values.username, values.password);
      // console.log(response);
      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      message.info("Revisa tu nombre o contraseña/ no existe el usuario");
      // console.log(error);
    }
    setLoading(false);
  };

  return (
    <View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
      style={styles.root}
    >
      <Card style={styles.container}>
        <TituloCustom titulo="Iniciar Sesión" />
        <Form onFinish={onFinish}>
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
            ]}
          >
            <Input placeholder="Email" />
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
                message: "Password mínimo de 6 caracteres",
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
              Iniciar Sesión
            </Button>
          </Form.Item>
        </Form>

        <div>
          <Button type="link" onClick={Registrarse}>
            No tienes cuenta? Regístrate
          </Button>
          <Button type="text" onClick={ForgotPassword}>
            ¿Olvidaste tu contraseña?
          </Button>
        </div>
      </Card>
    </View>
  );
};

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: 600,
    maxWidth: 500,
  },
  subcontainer: {},
};

export default SignIn;
