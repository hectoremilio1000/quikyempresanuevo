import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Servicio {
  EXCELENTE = "EXCELENTE",
  REGULAR = "REGULAR",
  MALO = "MALO"
}

export enum Sexotipo {
  MASCULINO = "MASCULINO",
  FEMENINO = "FEMENINO"
}



type EagerRESULTADOGENERAL = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RESULTADOGENERAL, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly resultadoQuimico?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRESULTADOGENERAL = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RESULTADOGENERAL, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly resultadoQuimico?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RESULTADOGENERAL = LazyLoading extends LazyLoadingDisabled ? EagerRESULTADOGENERAL : LazyRESULTADOGENERAL

export declare const RESULTADOGENERAL: (new (init: ModelInit<RESULTADOGENERAL>) => RESULTADOGENERAL) & {
  copyOf(source: RESULTADOGENERAL, mutator: (draft: MutableModel<RESULTADOGENERAL>) => MutableModel<RESULTADOGENERAL> | void): RESULTADOGENERAL;
}

type EagerRESULTADOORDEN = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RESULTADOORDEN, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parametro?: string | null;
  readonly resultado?: string | null;
  readonly ordenpruebaID: string;
  readonly interpretacionAutomatica?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRESULTADOORDEN = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RESULTADOORDEN, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parametro?: string | null;
  readonly resultado?: string | null;
  readonly ordenpruebaID: string;
  readonly interpretacionAutomatica?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RESULTADOORDEN = LazyLoading extends LazyLoadingDisabled ? EagerRESULTADOORDEN : LazyRESULTADOORDEN

export declare const RESULTADOORDEN: (new (init: ModelInit<RESULTADOORDEN>) => RESULTADOORDEN) & {
  copyOf(source: RESULTADOORDEN, mutator: (draft: MutableModel<RESULTADOORDEN>) => MutableModel<RESULTADOORDEN> | void): RESULTADOORDEN;
}

type EagerEncuestaServicio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EncuestaServicio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly encuesta?: Servicio | keyof typeof Servicio | null;
  readonly usuario?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEncuestaServicio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EncuestaServicio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly encuesta?: Servicio | keyof typeof Servicio | null;
  readonly usuario?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EncuestaServicio = LazyLoading extends LazyLoadingDisabled ? EagerEncuestaServicio : LazyEncuestaServicio

export declare const EncuestaServicio: (new (init: ModelInit<EncuestaServicio>) => EncuestaServicio) & {
  copyOf(source: EncuestaServicio, mutator: (draft: MutableModel<EncuestaServicio>) => MutableModel<EncuestaServicio> | void): EncuestaServicio;
}

type EagerORDENPRUEBA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDENPRUEBA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ordenID: string;
  readonly PRUEBA?: PRUEBA | null;
  readonly RESULTADOORDENS?: (RESULTADOORDEN | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly oRDENPRUEBAPRUEBAId?: string | null;
}

type LazyORDENPRUEBA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDENPRUEBA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ordenID: string;
  readonly PRUEBA: AsyncItem<PRUEBA | undefined>;
  readonly RESULTADOORDENS: AsyncCollection<RESULTADOORDEN>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly oRDENPRUEBAPRUEBAId?: string | null;
}

export declare type ORDENPRUEBA = LazyLoading extends LazyLoadingDisabled ? EagerORDENPRUEBA : LazyORDENPRUEBA

export declare const ORDENPRUEBA: (new (init: ModelInit<ORDENPRUEBA>) => ORDENPRUEBA) & {
  copyOf(source: ORDENPRUEBA, mutator: (draft: MutableModel<ORDENPRUEBA>) => MutableModel<ORDENPRUEBA> | void): ORDENPRUEBA;
}

type EagerORDEN = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDEN, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly estatus?: string | null;
  readonly fechaOrden?: string | null;
  readonly horaOrden?: string | null;
  readonly formatoPago?: string | null;
  readonly envioPaciente?: string | null;
  readonly totalPruebas?: number | null;
  readonly sucursalMuestra?: string | null;
  readonly tratamiento?: string | null;
  readonly capturaOrden?: string | null;
  readonly ORDENPRUEBAS?: (ORDENPRUEBA | null)[] | null;
  readonly diabetico?: string | null;
  readonly hipertenso?: string | null;
  readonly DOCTOR?: DOCTOR | null;
  readonly padecimientos?: string | null;
  readonly medicamentos?: string | null;
  readonly diagnostico?: string | null;
  readonly envioDoctor?: string | null;
  readonly altura?: number | null;
  readonly peso?: number | null;
  readonly indiceMasaCorporal?: number | null;
  readonly temperatura?: number | null;
  readonly costoTotal?: number | null;
  readonly saturacion?: number | null;
  readonly frecuenciaCardiaca?: number | null;
  readonly pacienteID: string;
  readonly RESULTADOGENERAL?: RESULTADOGENERAL | null;
  readonly fechaTomaMuestr?: string | null;
  readonly horaTomaMuestra?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly oRDENDOCTORId?: string | null;
  readonly oRDENRESULTADOGENERALId?: string | null;
}

type LazyORDEN = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDEN, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly estatus?: string | null;
  readonly fechaOrden?: string | null;
  readonly horaOrden?: string | null;
  readonly formatoPago?: string | null;
  readonly envioPaciente?: string | null;
  readonly totalPruebas?: number | null;
  readonly sucursalMuestra?: string | null;
  readonly tratamiento?: string | null;
  readonly capturaOrden?: string | null;
  readonly ORDENPRUEBAS: AsyncCollection<ORDENPRUEBA>;
  readonly diabetico?: string | null;
  readonly hipertenso?: string | null;
  readonly DOCTOR: AsyncItem<DOCTOR | undefined>;
  readonly padecimientos?: string | null;
  readonly medicamentos?: string | null;
  readonly diagnostico?: string | null;
  readonly envioDoctor?: string | null;
  readonly altura?: number | null;
  readonly peso?: number | null;
  readonly indiceMasaCorporal?: number | null;
  readonly temperatura?: number | null;
  readonly costoTotal?: number | null;
  readonly saturacion?: number | null;
  readonly frecuenciaCardiaca?: number | null;
  readonly pacienteID: string;
  readonly RESULTADOGENERAL: AsyncItem<RESULTADOGENERAL | undefined>;
  readonly fechaTomaMuestr?: string | null;
  readonly horaTomaMuestra?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly oRDENDOCTORId?: string | null;
  readonly oRDENRESULTADOGENERALId?: string | null;
}

export declare type ORDEN = LazyLoading extends LazyLoadingDisabled ? EagerORDEN : LazyORDEN

export declare const ORDEN: (new (init: ModelInit<ORDEN>) => ORDEN) & {
  copyOf(source: ORDEN, mutator: (draft: MutableModel<ORDEN>) => MutableModel<ORDEN> | void): ORDEN;
}

type EagerPARAMETROS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PARAMETROS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreParametro?: string | null;
  readonly unidad?: string | null;
  readonly referencia1?: string | null;
  readonly referencia2?: string | null;
  readonly pruebaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPARAMETROS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PARAMETROS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreParametro?: string | null;
  readonly unidad?: string | null;
  readonly referencia1?: string | null;
  readonly referencia2?: string | null;
  readonly pruebaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PARAMETROS = LazyLoading extends LazyLoadingDisabled ? EagerPARAMETROS : LazyPARAMETROS

export declare const PARAMETROS: (new (init: ModelInit<PARAMETROS>) => PARAMETROS) & {
  copyOf(source: PARAMETROS, mutator: (draft: MutableModel<PARAMETROS>) => MutableModel<PARAMETROS> | void): PARAMETROS;
}

type EagerPRUEBA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PRUEBA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly categoria?: string | null;
  readonly precio?: number | null;
  readonly precioDescuento?: number | null;
  readonly descripcionCorta?: string | null;
  readonly tiempoEntrega?: string | null;
  readonly indicaciones?: string | null;
  readonly tipoMuestra?: string | null;
  readonly tipoContenedor?: string | null;
  readonly PARAMETROS?: (PARAMETROS | null)[] | null;
  readonly ORDENPRUEBA?: ORDENPRUEBA | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pRUEBAORDENPRUEBAId?: string | null;
}

type LazyPRUEBA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PRUEBA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly categoria?: string | null;
  readonly precio?: number | null;
  readonly precioDescuento?: number | null;
  readonly descripcionCorta?: string | null;
  readonly tiempoEntrega?: string | null;
  readonly indicaciones?: string | null;
  readonly tipoMuestra?: string | null;
  readonly tipoContenedor?: string | null;
  readonly PARAMETROS: AsyncCollection<PARAMETROS>;
  readonly ORDENPRUEBA: AsyncItem<ORDENPRUEBA | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pRUEBAORDENPRUEBAId?: string | null;
}

export declare type PRUEBA = LazyLoading extends LazyLoadingDisabled ? EagerPRUEBA : LazyPRUEBA

export declare const PRUEBA: (new (init: ModelInit<PRUEBA>) => PRUEBA) & {
  copyOf(source: PRUEBA, mutator: (draft: MutableModel<PRUEBA>) => MutableModel<PRUEBA> | void): PRUEBA;
}

type EagerDOCTOR = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DOCTOR, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly especialidad?: string | null;
  readonly calle?: string | null;
  readonly numeroExterior?: string | null;
  readonly numeroInterior?: string | null;
  readonly colonia?: string | null;
  readonly cp?: string | null;
  readonly municipio?: string | null;
  readonly estado?: string | null;
  readonly pais?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDOCTOR = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DOCTOR, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly especialidad?: string | null;
  readonly calle?: string | null;
  readonly numeroExterior?: string | null;
  readonly numeroInterior?: string | null;
  readonly colonia?: string | null;
  readonly cp?: string | null;
  readonly municipio?: string | null;
  readonly estado?: string | null;
  readonly pais?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DOCTOR = LazyLoading extends LazyLoadingDisabled ? EagerDOCTOR : LazyDOCTOR

export declare const DOCTOR: (new (init: ModelInit<DOCTOR>) => DOCTOR) & {
  copyOf(source: DOCTOR, mutator: (draft: MutableModel<DOCTOR>) => MutableModel<DOCTOR> | void): DOCTOR;
}

type EagerPACIENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PACIENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly sexo?: Sexotipo | keyof typeof Sexotipo | null;
  readonly fechaNacimiento?: string | null;
  readonly edad?: string | null;
  readonly direccion?: string | null;
  readonly colonia?: string | null;
  readonly cp?: string | null;
  readonly municipio?: string | null;
  readonly estado?: string | null;
  readonly pais?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly ORDENS?: (ORDEN | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPACIENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PACIENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly sexo?: Sexotipo | keyof typeof Sexotipo | null;
  readonly fechaNacimiento?: string | null;
  readonly edad?: string | null;
  readonly direccion?: string | null;
  readonly colonia?: string | null;
  readonly cp?: string | null;
  readonly municipio?: string | null;
  readonly estado?: string | null;
  readonly pais?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly ORDENS: AsyncCollection<ORDEN>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PACIENTE = LazyLoading extends LazyLoadingDisabled ? EagerPACIENTE : LazyPACIENTE

export declare const PACIENTE: (new (init: ModelInit<PACIENTE>) => PACIENTE) & {
  copyOf(source: PACIENTE, mutator: (draft: MutableModel<PACIENTE>) => MutableModel<PACIENTE> | void): PACIENTE;
}

type EagerBLOG = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BLOG, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titulo?: string | null;
  readonly subtitulo?: string | null;
  readonly texto1?: string | null;
  readonly texto2?: string | null;
  readonly texto3?: string | null;
  readonly imagen1?: string | null;
  readonly imagen2?: string | null;
  readonly imagen3?: string | null;
  readonly fecha?: string | null;
  readonly url1?: string | null;
  readonly url2?: string | null;
  readonly url3?: string | null;
  readonly autor?: string | null;
  readonly slug?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBLOG = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BLOG, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titulo?: string | null;
  readonly subtitulo?: string | null;
  readonly texto1?: string | null;
  readonly texto2?: string | null;
  readonly texto3?: string | null;
  readonly imagen1?: string | null;
  readonly imagen2?: string | null;
  readonly imagen3?: string | null;
  readonly fecha?: string | null;
  readonly url1?: string | null;
  readonly url2?: string | null;
  readonly url3?: string | null;
  readonly autor?: string | null;
  readonly slug?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BLOG = LazyLoading extends LazyLoadingDisabled ? EagerBLOG : LazyBLOG

export declare const BLOG: (new (init: ModelInit<BLOG>) => BLOG) & {
  copyOf(source: BLOG, mutator: (draft: MutableModel<BLOG>) => MutableModel<BLOG> | void): BLOG;
}