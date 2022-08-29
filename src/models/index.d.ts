import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Sexo {
  MASCULINO = "MASCULINO",
  FEMENINO = "FEMENINO"
}

export enum Statusorden {
  NUEVO = "NUEVO",
  COMPLETADO = "COMPLETADO",
  CANCELADO = "CANCELADO"
}

export enum Categoria {
  HEMATOLOGIA = "HEMATOLOGIA",
  QUIMICASANGUINEA = "QUIMICASANGUINEA",
  COAGULACION = "COAGULACION",
  SEROLOGIA = "SEROLOGIA",
  UROANALISIS = "UROANALISIS",
  MICROBIOLOGIA = "MICROBIOLOGIA",
  PRUEBARAPIDA = "PRUEBARAPIDA"
}

export enum Muestra {
  HECES = "HECES",
  SUERO = "SUERO",
  SANGRETOTAL = "SANGRETOTAL",
  ORINA = "ORINA",
  EXUDADOFARINGEO = "EXUDADOFARINGEO",
  EXUDADONASOFARINGEO = "EXUDADONASOFARINGEO",
  EXUDADOURETRAL = "EXUDADOURETRAL",
  BIOPSIASORGANOSESPECIALES = "BIOPSIASORGANOSESPECIALES"
}

export enum Contenedor {
  LILA = "LILA",
  AZUL = "AZUL",
  DORADO = "DORADO",
  ROJO = "ROJO",
  FRASCOESTERIL = "FRASCOESTERIL",
  STUART = "STUART",
  FRASCOHEMOCULTIVO = "FRASCOHEMOCULTIVO",
  NA = "NA"
}

export enum Unidad {
  ML = "ML",
  MGDL = "MGDL",
  PORCENTAJE = "PORCENTAJE",
  C = "C",
  NINGUNO = "NINGUNO"
}

export enum Especialidad {
  MEDICOGENERAL = "MEDICOGENERAL",
  HEMATOLOGIA = "HEMATOLOGIA",
  MEDICINAINTERNA = "MEDICINAINTERNA",
  CARDIOLOGIA = "CARDIOLOGIA",
  CIRUGIA = "CIRUGIA",
  UROLOGIA = "UROLOGIA",
  GINECOLOGIA = "GINECOLOGIA",
  PEDIATRIA = "PEDIATRIA",
  OTRO = "OTRO"
}

export enum Role {
  PACIENTE = "PACIENTE",
  DOCTOR = "DOCTOR"
}



type ORDENMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PRUEBACHECARMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PARAMETROSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type REFERENCIASMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DOCTORMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DATOSPACIENTEMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PACIENTEMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PacienteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ORDEN {
  readonly id: string;
  readonly status?: Statusorden | keyof typeof Statusorden | null;
  readonly fechaOrden?: string | null;
  readonly HoraOrden?: string | null;
  readonly total?: string | null;
  readonly pacienteID: string;
  readonly imagen?: string | null;
  readonly estudiosURL?: string | null;
  readonly doctorID: string;
  readonly resultado?: (string | null)[] | null;
  readonly PRUEBACHECARS?: (PRUEBACHECAR | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ORDEN, ORDENMetaData>);
  static copyOf(source: ORDEN, mutator: (draft: MutableModel<ORDEN, ORDENMetaData>) => MutableModel<ORDEN, ORDENMetaData> | void): ORDEN;
}

export declare class PRUEBACHECAR {
  readonly id: string;
  readonly nombre?: string | null;
  readonly categoria?: Categoria | keyof typeof Categoria | null;
  readonly precio?: string | null;
  readonly precioDescuento?: string | null;
  readonly descripcionLarga?: string | null;
  readonly descripcionCorta?: string | null;
  readonly tiempoEntrega?: string | null;
  readonly indicaciones?: string | null;
  readonly tipoMuestra?: Muestra | keyof typeof Muestra | null;
  readonly tipoContenedor?: Contenedor | keyof typeof Contenedor | null;
  readonly unidad?: Unidad | keyof typeof Unidad | null;
  readonly PARAMETROS?: (PARAMETROS | null)[] | null;
  readonly ordenID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PRUEBACHECAR, PRUEBACHECARMetaData>);
  static copyOf(source: PRUEBACHECAR, mutator: (draft: MutableModel<PRUEBACHECAR, PRUEBACHECARMetaData>) => MutableModel<PRUEBACHECAR, PRUEBACHECARMetaData> | void): PRUEBACHECAR;
}

export declare class PARAMETROS {
  readonly id: string;
  readonly nombre?: (string | null)[] | null;
  readonly pruebachecarID: string;
  readonly REFERENCIAS?: REFERENCIAS | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly parametrosReferenciasId?: string | null;
  constructor(init: ModelInit<PARAMETROS, PARAMETROSMetaData>);
  static copyOf(source: PARAMETROS, mutator: (draft: MutableModel<PARAMETROS, PARAMETROSMetaData>) => MutableModel<PARAMETROS, PARAMETROSMetaData> | void): PARAMETROS;
}

export declare class REFERENCIAS {
  readonly id: string;
  readonly referencia?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<REFERENCIAS, REFERENCIASMetaData>);
  static copyOf(source: REFERENCIAS, mutator: (draft: MutableModel<REFERENCIAS, REFERENCIASMetaData>) => MutableModel<REFERENCIAS, REFERENCIASMetaData> | void): REFERENCIAS;
}

export declare class DOCTOR {
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly especialidad?: Especialidad | keyof typeof Especialidad | null;
  readonly calle?: string | null;
  readonly numeroExterior?: string | null;
  readonly numeroInterior?: string | null;
  readonly colonia?: string | null;
  readonly cp?: string | null;
  readonly municipio?: string | null;
  readonly ciudad?: string | null;
  readonly estado?: string | null;
  readonly pais?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly ORDENS?: (ORDEN | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DOCTOR, DOCTORMetaData>);
  static copyOf(source: DOCTOR, mutator: (draft: MutableModel<DOCTOR, DOCTORMetaData>) => MutableModel<DOCTOR, DOCTORMetaData> | void): DOCTOR;
}

export declare class DATOSPACIENTE {
  readonly id: string;
  readonly peso?: string | null;
  readonly altura?: string | null;
  readonly indiceMasaCorporal?: string | null;
  readonly presionArterial?: string | null;
  readonly saturacion?: string | null;
  readonly diagnostico?: string | null;
  readonly tratamiento?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DATOSPACIENTE, DATOSPACIENTEMetaData>);
  static copyOf(source: DATOSPACIENTE, mutator: (draft: MutableModel<DATOSPACIENTE, DATOSPACIENTEMetaData>) => MutableModel<DATOSPACIENTE, DATOSPACIENTEMetaData> | void): DATOSPACIENTE;
}

export declare class PACIENTE {
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly sexo?: Sexo | keyof typeof Sexo | null;
  readonly fechaNacimiento?: string | null;
  readonly edad?: string | null;
  readonly calle?: string | null;
  readonly numExterior?: string | null;
  readonly numInterior?: string | null;
  readonly colonia?: string | null;
  readonly cp?: string | null;
  readonly municipio?: string | null;
  readonly ciudad?: string | null;
  readonly estado?: string | null;
  readonly pais?: string | null;
  readonly Email?: string | null;
  readonly whatsapp?: string | null;
  readonly ORDENS?: (ORDEN | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PACIENTE, PACIENTEMetaData>);
  static copyOf(source: PACIENTE, mutator: (draft: MutableModel<PACIENTE, PACIENTEMetaData>) => MutableModel<PACIENTE, PACIENTEMetaData> | void): PACIENTE;
}

export declare class Paciente {
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly role?: Role | keyof typeof Role | null;
  readonly image?: string | null;
  readonly url?: string | null;
  readonly key?: string | null;
  readonly fechaOrden?: string | null;
  readonly estudios?: string | null;
  readonly image2?: string | null;
  readonly estudios3?: string | null;
  readonly estudios2?: string | null;
  readonly url2?: string | null;
  readonly key2?: string | null;
  readonly image3?: string | null;
  readonly url3?: string | null;
  readonly key3?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Paciente, PacienteMetaData>);
  static copyOf(source: Paciente, mutator: (draft: MutableModel<Paciente, PacienteMetaData>) => MutableModel<Paciente, PacienteMetaData> | void): Paciente;
}