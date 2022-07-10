import React, { useEffect } from "react";
import {
  Card,
  Image,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  useTheme,
  Tabs,
  TabItem,
} from "@aws-amplify/ui-react";

import TituloCustom from "../components/TituloCustom";
import { Button, Form, Input, message } from "antd";

import { useNavigate, useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";

function ConfirmEmailPaciente() {
  const { tokens } = useTheme();
  let navigate = useNavigate();

  const checkUser = async () => {
    try {
      await Auth.currentAuthenticatedUser({ bypassCache: true });
      navigate("/enrutarUsuario/dashboard", { replace: true });
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const { state } = useLocation();

  if (state === null) {
    return;
  }
  const { username } = state;

  const onFinish = async values => {
    try {
      const response = await Auth.confirmSignUp(username, values.code);
      console.log(response);
      navigate("/enrutarUsuario/signin", { replace: true });
    } catch (error) {
      message.info("algo ha salido mal mándanos un whats");
    }
  };

  const RegresarInicio = () => {
    navigate("/enrutarUsuario/signin", { replace: true });
  };

  const ResendCode = async () => {
    try {
      await Auth.resendSignUp(username);
      message.info("código reenviado exitosamente");
    } catch (error) {
      message.warn("algo ha salido mal");
    }
  };

  return (
    <View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
      style={styles.root}
    >
      <Card style={styles.container}>
        <TituloCustom titulo="Confirma tu email con la clave que te envíamos" />

        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            initialValue={username}
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
            name="code"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu código!",
              },
            ]}
          >
            <Input placeholder="Clave de Verificación enviado a Email" />
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
              Confirmar
            </Button>
          </Form.Item>
        </Form>
        <div>
          <Button type="link" onClick={RegresarInicio}>
            Regresar a Iniciar Sesión
          </Button>
          <Button type="text" onClick={ResendCode}>
            Reenviar código
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
  subcontainer: {},
};

export default ConfirmEmailPaciente;
