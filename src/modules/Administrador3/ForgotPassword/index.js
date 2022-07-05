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
import TituloCustom from "../components/TituloCustom/index";

import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

function ForgotPassword() {
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

  const onFinish = async values => {
    const { username } = values;
    try {
      await Auth.forgotPassword(username);
      navigate(
        "/admin/newpassword",
        { state: { username: username } },
        { replace: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const RegresarInicio = () => {
    navigate("/admin/signin", { replace: true });
  };
  return (
    <View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
      style={styles.root}
    >
      <Card style={styles.container}>
        <TituloCustom titulo="Vuelve a crear tu contraseña" />
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
              Enviar
            </Button>
          </Form.Item>
        </Form>

        <div>
          <Button type="link" onClick={RegresarInicio}>
            Regresar a Iniciar Sesión
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

export default ForgotPassword;
