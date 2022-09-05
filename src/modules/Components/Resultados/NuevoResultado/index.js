import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Select,
  TimePicker,
  Button,
} from "antd";

const { Title } = Typography;
const { Item } = Form;
const { Option } = Select;

function NuevoResultado() {
  const onFinish = values => {
    console.log(values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const format = "HH:mm";

  return (
    <Row>
      <Col xs={24}>
        <Title level={4} style={{ textAlign: "center" }}>
          Crear orden
        </Title>
      </Col>
      <Col xs={23} sm={20} md={20} lg={20}>
        <Form
          name=""
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 18,
          }}
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Item
            label="Id Orden"
            name="idOrden"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el id de la orden",
              },
            ]}
          >
            <Input />
          </Item>

          <Item label="Fecha Resultado" name="fechaResultado">
            <DatePicker placeholder="fecha" />
          </Item>
          <Item label="Hora Orden" name="horaOrden">
            <TimePicker placeholder="Hora" format={format} />
          </Item>

          <Item label="Métodp de pago" name="metodoPago">
            <Select placeholder="selecciona">
              <Option value="EFECTIVO">EFECTIVO</Option>
              <Option value="TARJETA">TARJETA</Option>
              <Option value="TRANSFERENCIA">TRANSFERENCIA</Option>
            </Select>
          </Item>

          <Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Crear
            </Button>
          </Item>
        </Form>
      </Col>
    </Row>
  );
}

export default NuevoResultado;
