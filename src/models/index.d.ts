import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Unidadenums {
  ML = "ML",
  MGDL = "MGDL",
  PORCENTAJE = "PORCENTAJE",
  C = "C",
  NINGUNO = "NINGUNO"
}

export enum Metodopago {
  EFECTIVO = "EFECTIVO",
  TARJETA = "TARJETA",
  TRANSFERENCIA = "TRANSFERENCIA"
}

export enum Sexo {
  MASCULINO = "MASCULINO",
  FEMENINO = "FEMENINO"
}

export enum Statusorden {
  NUEVO = "NUEVO",
  COMPLETADO = "COMPLETADO",
  CANCELADO = "CANCELADO"
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
  OTRO = "OTRO",
  NOAPLICA = "NOAPLICA"
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

export enum Categoria {
  HEMATOLOGIA = "HEMATOLOGIA",
  QUIMICASANGUINEA = "QUIMICASANGUINEA",
  COAGULACION = "COAGULACION",
  SEROLOGIA = "SEROLOGIA",
  UROANALISIS = "UROANALISIS",
  MICROBIOLOGIA = "MICROBIOLOGIA",
  PRUEBARAPIDA = "PRUEBARAPIDA"
}



type UNIDADMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BLOGMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type REFERENSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PARAMSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ORDENMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DOCTORMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PACIENTEMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PRUEBACHECARMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UNIDAD {
  readonly id: string;
  readonly unidad?: Unidadenums | keyof typeof Unidadenums | null;
  readonly paramsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UNIDAD, UNIDADMetaData>);
  static copyOf(source: UNIDAD, mutator: (draft: MutableModel<UNIDAD, UNIDADMetaData>) => MutableModel<UNIDAD, UNIDADMetaData> | void): UNIDAD;
}

export declare class BLOG {
  readonly id: string;
  readonly titulo?: string | null;
  readonly subtitulo?: string | null;
  readonly imagen1?: string | null;
  readonly url1?: string | null;
  readonly texto1?: string | null;
  readonly imagen2?: string | null;
  readonly url2?: string | null;
  readonly texto2?: string | null;
  readonly imagen3?: string | null;
  readonly url3?: string | null;
  readonly texto3?: string | null;
  readonly fecha?: string | null;
  readonly autor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BLOG, BLOGMetaData>);
  static copyOf(source: BLOG, mutator: (draft: MutableModel<BLOG, BLOGMetaData>) => MutableModel<BLOG, BLOGMetaData> | void): BLOG;
}

export declare class REFERENS {
  readonly id: string;
  readonly paramsID: string;
  readonly referencia1?: string | null;
  readonly referencia2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<REFERENS, REFERENSMetaData>);
  static copyOf(source: REFERENS, mutator: (draft: MutableModel<REFERENS, REFERENSMetaData>) => MutableModel<REFERENS, REFERENSMetaData> | void): REFERENS;
}

export declare class PARAMS {
  readonly id: string;
  readonly REFERENS?: (REFERENS | null)[] | null;
  readonly pruebachecarID: string;
  readonly param?: string | null;
  readonly UNIDAD?: (UNIDAD | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PARAMS, PARAMSMetaData>);
  static copyOf(source: PARAMS, mutator: (draft: MutableModel<PARAMS, PARAMSMetaData>) => MutableModel<PARAMS, PARAMSMetaData> | void): PARAMS;
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
  readonly pruebachecarID: string;
  readonly metodoPago?: Metodopago | keyof typeof Metodopago | null;
  readonly horaResultado?: string | null;
  readonly fechaResultado?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ORDEN, ORDENMetaData>);
  static copyOf(source: ORDEN, mutator: (draft: MutableModel<ORDEN, ORDENMetaData>) => MutableModel<ORDEN, ORDENMetaData> | void): ORDEN;
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
  readonly peso?: string | null;
  readonly altura?: string | null;
  readonly indiceMasaCorporal?: string | null;
  readonly presionArterial?: string | null;
  readonly saturacion?: string | null;
  readonly diagnostico?: string | null;
  readonly tratamiento?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PACIENTE, PACIENTEMetaData>);
  static copyOf(source: PACIENTE, mutator: (draft: MutableModel<PACIENTE, PACIENTEMetaData>) => MutableModel<PACIENTE, PACIENTEMetaData> | void): PACIENTE;
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
  readonly ORDENS?: (ORDEN | null)[] | null;
  readonly PARAMS?: (PARAMS | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PRUEBACHECAR, PRUEBACHECARMetaData>);
  static copyOf(source: PRUEBACHECAR, mutator: (draft: MutableModel<PRUEBACHECAR, PRUEBACHECARMetaData>) => MutableModel<PRUEBACHECAR, PRUEBACHECARMetaData> | void): PRUEBACHECAR;
}