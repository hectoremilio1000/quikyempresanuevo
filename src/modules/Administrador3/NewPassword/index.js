import React, { useEffect } from "react";
import { Card, View, useTheme } from "@aws-amplify/ui-react";

import TituloCustom from "../components/TituloCustom";
import { Button, Form, Input, message } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";

function NewPassword() {
  const { tokens } = useTheme();
  const { state } = useLocation();

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

  if (state === null) {
    return;
  }
  const { username } = state;

  const onFinish = async values => {
    try {
      await Auth.forgotPasswordSubmit(username, values.code, values.password);
      navigate("/admin/signin", { replace: true });
    } catch (error) {
      message.info("Ha ocurrido algo, escribenos al whats");
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
        <TituloCustom titulo="Crea tu nueva contraseña" />
        <Form onFinish={onFinish}>
          <Form.Item
            initialValue={username}
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
            name="code"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu código!",
              },
            ]}
          >
            <Input placeholder="Código de confirmación enviado al mail" />
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
            <Input type="password" placeholder="Nuevo password" />
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

export default NewPassword;
