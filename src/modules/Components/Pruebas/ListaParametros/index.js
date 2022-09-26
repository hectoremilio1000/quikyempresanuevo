import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Spin, Table } from "antd";
import Highlighter from "react-highlight-words";
import { DataStore } from "aws-amplify";
// import { PRUEBACHECAR } from "../../../../models";
import { useNavigate } from "react-router-dom";

function ListaParametros() {
  const [pruebas, setPruebas] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
    const navigate = useNavigate();

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = clearFilters => {
    clearFilters();
    setSearchText("");
  };

  const fetchPruebas = async () => {
    // const pruebas = await DataStore.query(PRUEBACHECAR);
    // setPruebas(pruebas);
  };

  useEffect(() => {
    fetchPruebas();
  }, []);

  console.log(pruebas)

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
      width: "30%",
      ...getColumnSearchProps("nombres"),
    },
    {
      title: "Nombre Prueba",
      dataIndex: "nombre",
      key: "nombre",
      width: "30%",
      ...getColumnSearchProps("nombres"),
    },

    {
      title: "Categoría prueba",
      dataIndex: "categoria",
      key: "categoria",
    },
    {
      title: "Parámetro",
      dataIndex: "parametro",
      key: "parametro",
    },
    {
      title: "Referencia",
      dataIndex: "referencias",
      key: "referencias",
    },
  ];

  if (!pruebas) {
    return <Spin size="large"/>
  }


  return (
    <>
      <Table columns={columns} dataSource={pruebas} rowKey="id" onRow={(pruebaItem) => ({
          onClick: () => navigate(`/parametros/${pruebaItem.id}`),
        })}
      />
    </>
  )
}

export default ListaParametros