import { Card, Form, Input, Divider, List, Button, Tag, Spin, Typography } from "antd";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { DataStore } from "aws-amplify";
import { PRUEBACHECAR } from "../../../models";


function CrearParametrosFinales() {
  const [prueba, setPrueba] = useState(null);

  const { id } = useParams();

useEffect(() => {
  DataStore.query(PRUEBACHECAR, id).then(setPrueba)
}, [id])
  
  console.log(prueba)


  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card title={`Prueba ${id}`} style={{ margin: 20 }} extra={prueba?.nombre} >
      <Typography.Title level={5}>Crea un parámetro de la prueba:</Typography.Title>
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
          label="Parámetro"
        name="parametro"  rules={[
                {
                  required: true,
                  message: "Por favor ingresa el parámetro",
                },
              ]}>

       
     
      <Input
        style={{
          width: '50%',
        }}
       
          />
    
         
           </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit">
          Agregar
        </Button>
      </Form.Item>
    </Form>
      </Card>
  )
}

export default CrearParametrosFinales