import { Card, Form, Input, Divider, List, Button, Tag, Spin, Typography, Space } from "antd";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { DataStore } from "aws-amplify";
// import { PARAMS, PRUEBACHECAR } from "../../../models";

function CrearReferenciaParam() {
  const [parametro, setParametro] = useState(null);
  const [prueba, setPrueba] = useState(null);
  const [mostrar, setMostrar] = useState(false);

  const Mostrar = () => {
    setMostrar (!mostrar)
  }


  const idPrueba = parametro?.pruebachecarID

  console.log(idPrueba)

  const { id } = useParams();

useEffect(() => {
  // DataStore.query(PARAMS, id).then(setParametro)
}, [id])
  
  useEffect(() => {
    if (!idPrueba) {
      return
    }
  // DataStore.query(PRUEBACHECAR, idPrueba).then(setPrueba)
  }, [idPrueba])
  
  
  console.log(prueba)

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <Card title={`Prueba ${id}`} style={{ margin: 20 }} extra={parametro?.param} >
      <Typography.Title level={5}>Crea las referencia(s) del Parámetro: {parametro?.param} de la Prueba: {prueba?.nombre}</Typography.Title>
       <Form
      name="basic"
     
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
        <Form.Item
          label="Referencia1"
        name="referencia1"  rules={[
                {
                  required: true,
                  message: "Por favor ingresa la Referencia1",
                },
              ]}>
      <Input
        style={{
          width: '50%',
        }}
          />
        </Form.Item>

        <Typography level={5}>El Parámetro tiene 2 referencias? da click <Button type="primary" onClick={Mostrar}>Aquí</Button></Typography>
        <br/>
        {mostrar && <Form.Item
          label="Referencia2"
        name="referencia2"  rules={[
                {
                  required: true,
                  message: "Por favor ingresa la Referencia2",
                },
              ]}>
      <Input
        style={{
          width: '50%',
        }}
          />
           </Form.Item>}
         
        <Form.Item>
        <Button type="primary" htmlType="submit">
          Agregar
        </Button>
      </Form.Item>
    </Form>
      </Card>
  )
}

export default CrearReferenciaParam