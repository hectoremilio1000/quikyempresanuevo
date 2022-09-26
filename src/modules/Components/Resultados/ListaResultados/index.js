import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag } from "antd";
import Highlighter from "react-highlight-words";
import { DataStore } from "aws-amplify";
import { useNavigate } from "react-router-dom";
// import { ORDEN, Statusorden } from "../../../../models";

function ListaResultados() {
  const [ordenes, setOrdenes] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = clearFilters => {
    clearFilters();
    setSearchText("");
  };
  const navigate = useNavigate();

  const fetchOrdenes = async () => {
    // const ordenesFetch = await DataStore.query(ORDEN, order =>
    //   order.status("eq", "COMPLETADO")
    // );
    // setOrdenes(ordenesFetch);
  };

  useEffect(() => {
    fetchOrdenes();
  }, []);
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

  const renderOrderStatus = orderStatus => {
    const statusToColor = {
      // [Statusorden.COMPLETADO]: "green",
    };
    return <Tag color={statusToColor[orderStatus]}> {orderStatus}</Tag>;
  };

  const columns = [
    {
      title: "Paciente",
      dataIndex: "pacienteID",
      key: "pacienteID",
      width: "30%",
      ...getColumnSearchProps("paciente"),
    },

    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Resultado",
      dataIndex: "resultado",
      key: "resultado",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "referencias",
      render: renderOrderStatus,
    },
  ];
  console.log(ordenes);
  return <Table dataSource={ordenes} columns={columns} rowKey="id" />;
}

export default ListaResultados;
