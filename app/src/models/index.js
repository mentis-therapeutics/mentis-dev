// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AccountType = {
  "SUPER_ADMIN": "SUPER_ADMIN",
  "USER": "USER",
  "SUPERVISOR": "SUPERVISOR",
  "THERAPIST": "THERAPIST"
};

const { Session, UserData } = initSchema(schema);

export {
  Session,
  UserData,
  AccountType
};