import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Role {
  PACIENTE = "PACIENTE",
  DOCTOR = "DOCTOR"
}



type PacienteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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