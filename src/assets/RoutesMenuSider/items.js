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
  CaretRightOutlined,
  ExportOutlined,
  VerticalRightOutlined
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

const itemsRoutes = [
  getItem("Pruebas", "sub1", <AppstoreOutlined />, [
    getItem("Crear Pruebas", "1", <HighlightOutlined />),
    getItem("Lista Pruebas", "2", <UnorderedListOutlined />),
    getItem("Parámetros", "18", <CaretRightOutlined />),
    getItem("Referencias", "19", <ExportOutlined />),
    getItem("Unidades", "20", <VerticalRightOutlined />),
  ]),
  getItem("Doctores", "sub2", <MedicineBoxOutlined />, [
    getItem("Crear Doctor", "3", <BranchesOutlined />),
    getItem("Lista Doctores", "4", <ContactsOutlined />),
  ]),
  getItem("Órdenes", "sub3", <ContainerOutlined />, [
    getItem("Crear Orden", "5", <FolderAddOutlined />),
    getItem("Lista de Órdenes", "6", <ReadOutlined />),
  ]),

  getItem("Pacientes", "sub4", <SmileOutlined />, [
    getItem("Crear Paciente", "7", <PlusCircleOutlined />),
    getItem("Lista de Pacientes", "8", <TeamOutlined />),
  ]),
  getItem("Resultados", "sub5", <FilePdfOutlined />, [
    getItem("Nuevo Resultado", "17", <FileDoneOutlined />),
    getItem("Crear Resultado", "9", <FileDoneOutlined />),
    getItem("Lista de Resultados", "10", <FileSearchOutlined />),
    getItem("Resultado Prueba", "11", <FileSearchOutlined />),
  ]),

  getItem("Blog", "sub6", <HddOutlined />, [
    getItem("Crear Blog", "12", <LaptopOutlined />),
    getItem("Lista Blog's", "13", <GroupOutlined />),
  ]),
  getItem("Administrador", "sub7", <HddOutlined />, [
    getItem("Cortes", "14", <LaptopOutlined />),
  ]),
  getItem("Empleo", "sub8", <MonitorOutlined />, [
    getItem("Enfermera", "15", <ReconciliationOutlined />),
    getItem("General", "16", <ScheduleOutlined />),
  ]),
  
  getItem("Reinicio", "sub9", <MonitorOutlined />, [
    getItem("Pruebas", "21", <ReconciliationOutlined />),
   
  ]),
];

export default itemsRoutes;
