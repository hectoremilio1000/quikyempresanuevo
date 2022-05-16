// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Roles = {
  "DOCTOR": "DOCTOR",
  "PACIENTE": "PACIENTE",
  "ADMIN": "ADMIN",
  "EMPLEADO": "EMPLEADO"
};

const { Enfermeras, User } = initSchema(schema);

export {
  Enfermeras,
  User,
  Roles
};