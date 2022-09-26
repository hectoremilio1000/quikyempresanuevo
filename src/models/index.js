// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BLOG } = initSchema(schema);

export {
  BLOG
};