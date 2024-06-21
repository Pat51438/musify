// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, UserProfile } = initSchema(schema);

export {
  User,
  UserProfile
};