// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Servicio = {
  "EXCELENTE": "EXCELENTE",
  "REGULAR": "REGULAR",
  "MALO": "MALO"
};

const Sexotipo = {
  "MASCULINO": "MASCULINO",
  "FEMENINO": "FEMENINO"
};

const { RESULTADOGENERAL, RESULTADOORDEN, EncuestaServicio, ORDENPRUEBA, ORDEN, PARAMETROS, PRUEBA, DOCTOR, PACIENTE, BLOG } = initSchema(schema);

export {
  RESULTADOGENERAL,
  RESULTADOORDEN,
  EncuestaServicio,
  ORDENPRUEBA,
  ORDEN,
  PARAMETROS,
  PRUEBA,
  DOCTOR,
  PACIENTE,
  BLOG,
  Servicio,
  Sexotipo
};