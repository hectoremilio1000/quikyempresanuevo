import {
    UserOutlined,
    MedicineBoxOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UnorderedListOutlined,
    ContactsOutlined,
    ReadOutlined,
    BranchesOutlined,
    ContainerOutlined,
    HighlightOutlined,
    AppstoreOutlined,
    FolderAddOutlined,
    PlusCircleOutlined,
    SmileOutlined,
    TeamOutlined,
    FilePdfOutlined,
    FileSearchOutlined,
    FileDoneOutlined,
    HddOutlined,
    GroupOutlined,
    LaptopOutlined,
    MonitorOutlined,
    ReconciliationOutlined,
    ScheduleOutlined,
  } from "@ant-design/icons";
  
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  
  const itemsRoutes2 = [
    getItem("Resultados", "sub1", <AppstoreOutlined />, [
      getItem("Crear Resultado", "1", <HighlightOutlined />),
      getItem("Lista de resultados", "2", <UnorderedListOutlined />),
    ]),
  ];
  
  export default itemsRoutes2;
  