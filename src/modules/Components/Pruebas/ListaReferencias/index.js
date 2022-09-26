import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Spin, Table } from "antd";
import Highlighter from "react-highlight-words";
import { API, DataStore, graphqlOperation } from "aws-amplify";
import { useNavigate } from "react-router-dom";
// import { PARAMS } from "../../../../models";

 const listPARAMS = /* GraphQL */ `
  query ListPARAMS(
    $filter: ModelPARAMSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPARAMS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        REFERENS {
        items {
          id
          referencia1
        }
      }
        pruebachecarID
        param
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;

function ListaReferencias() {
  const [parametros, setParametros] = useState([]);
  const [paramsGraphq, setParamsGraphq] = useState([])
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

    const fetchParametros = async () => {
    // const parametros = await DataStore.query(PARAMS);
    // setParametros(parametros);
  };

  useEffect(() => {
    fetchParametros();
  }, []);

  const fetchParamsGraphq = async () => {
    const paramsGraphq = await API.graphql(graphqlOperation(listPARAMS))
    setParamsGraphq(paramsGraphq.data.listPARAMS.items)
  }

  useEffect(() => {
    fetchParamsGraphq();
  },[]
   
 )  

  // console.log(parametros);
  console.log(paramsGraphq);

  // console.log(paramsGraphq[0]?.REFERENS?.items[0].referencia1)

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
      title: "Id Párametro",
      dataIndex: "id",
      key: "id",
      width: "30%",
      ...getColumnSearchProps("nombres"),
      },
      {
      title: "Parámetro",
      dataIndex: "param",
      key: "param",
    },
    {
      title: "Id Prueba",
      dataIndex: "pruebachecarID",
      key: "pruebachecarID",
      width: "30%",
      ...getColumnSearchProps("nombres"),
      },
 
    
    {
      title: "Referencia1",
      dataIndex: "REFERENS",
      key: "REFERENS",
      // render: (referencia) => `${referencia?.items[0].referencia1}`,
      },
     
    ];
  
  if (!parametros) {
    return <Spin size="large"/>
  }


  return (
    <>
      <Table columns={columns} dataSource={paramsGraphq} rowKey="id" onRow={(parametrosItem) => ({
          onClick: () => navigate(`/referencias/${parametrosItem.id}`),
        })}
      />
    </>
  )
}

export default ListaReferencias