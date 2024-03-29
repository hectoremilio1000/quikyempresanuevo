import React, { useEffect, useRef, useState } from "react";
import { Card, Form, Input, Divider, List, Button, Table, Spin, Typography, Space,  } from "antd";
import Highlighter from "react-highlight-words";
import { useParams } from "react-router-dom";

import { API, graphqlOperation } from 'aws-amplify';

import { useNavigate } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { SearchOutlined } from "@ant-design/icons";
// import { PRUEBAS } from "../../../models";
import { listPARAMETROSCREADO } from "../../../graphqlCreado";

// import { PRUEBACHECAR } from "../../../models";


function CrearParametrosFinales() {
  const [prueba, setPrueba] = useState(null);
  const [parametros, setParametros] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const navigate = useNavigate();

  const { id } = useParams();

useEffect(() => {
  // DataStore.query(PRUEBAS, id).then(setPrueba)
}, [id])
  
  console.log(prueba)


  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  //tableparametros
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = clearFilters => {
    clearFilters();
    setSearchText("");
  };

   const fetchParametros = async () => {
    const parametros = await API.graphql(graphqlOperation(listPARAMETROSCREADO));
    setParametros(parametros?.data?.listPARAMETROS?.items)
  }
  useEffect(() => {
    fetchParametros();
  }, [])

    const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "20%",
      
    },
    {
      title: "Parámetro",
      dataIndex: "nombreParametro",
      key: "parametro",
      width: "30%",
    },
    
     {
      title: "Referencia1",
      dataIndex: "REFERENCIAS",
       key: "REFERENCIAS",
       width: "15%",
      render:(referencia)=>`${referencia?.nombreReferencia1}`
    },
      {
      title: "Referencia2",
      dataIndex: "REFERENCIAS",
        key: "REFERENCIAS",
        width: "15%",
      render:(referencia)=>`${referencia?.nombreReferencia2 }`
    },
      {
      title: "Editar",
      dataIndex: "",
        key: "",
        width: "20%",
      render:(referencia)=><Button type="primary">Editar</Button>
    },
  ];

    console.log(parametros);

   if (!parametros) {
    return <Spin size="large"/>
   }
  return (
    <Card title={`Prueba ${id}`} style={{ margin: 20 }} extra={prueba?.nombre}>
      <Typography.Title level={5}>Crea un parámetro de la prueba {prueba?.nombrePrueba}:</Typography.Title>
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
      <Divider />
      <Typography.Title level={5}>Ver parámetros de {prueba?.nombrePrueba} para editar sus Referencias:</Typography.Title>
<Table columns={columns} dataSource={parametros} rowKey="id" onRow={(parametroItem)=>({onClick:()=>navigate(`/referencias/${parametroItem.id}`)})}
      />
      <Divider />
      <Typography.Title level={5}>Ver parámetros de {prueba?.nombrePrueba}:</Typography.Title>
<Table columns={columns} dataSource={parametros} rowKey="id" 
      />
     
      </Card>
  )
}

export default CrearParametrosFinales