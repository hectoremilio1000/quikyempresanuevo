import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Roles {
  DOCTOR = "DOCTOR",
  PACIENTE = "PACIENTE",
  ADMIN = "ADMIN",
  EMPLEADO = "EMPLEADO"
}



type EnfermerasMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Enfermeras {
  readonly id: string;
  readonly nombre?: string | null;
  readonly email?: string | null;
  readonly whats?: string | null;
  readonly direccion?: string | null;
  readonly numexterior?: string | null;
  readonly numinterior?: string | null;
  readonly codigopostal?: string | null;
  readonly colonia?: string | null;
  readonly municipio?: string | null;
  readonly ciudad?: string | null;
  readonly estado?: string | null;
  readonly edad?: string | null;
  readonly cedula?: string | null;
  readonly antiguedad?: string | null;
  readonly especialidad?: string | null;
  readonly curso?: string | null;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Enfermeras, EnfermerasMetaData>);
  static copyOf(source: Enfermeras, mutator: (draft: MutableModel<Enfermeras, EnfermerasMetaData>) => MutableModel<Enfermeras, EnfermerasMetaData> | void): Enfermeras;
}

export declare class User {
  readonly id: string;
  readonly nombre?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly role?: Roles | keyof typeof Roles | null;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}