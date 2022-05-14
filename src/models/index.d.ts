import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Roles {
  DOCTOR = "DOCTOR",
  PACIENTE = "PACIENTE",
  ADMIN = "ADMIN",
  EMPLEADO = "EMPLEADO"
}



type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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