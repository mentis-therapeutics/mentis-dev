// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AccountType = {
  "SUPER_ADMIN": "SUPER_ADMIN",
  "USER": "USER",
  "SUPERVISOR": "SUPERVISOR",
  "THERAPIST": "THERAPIST"
};

const { Stage, Session, Program, User, UserProgram } = initSchema(schema);

export {
  Stage,
  Session,
  Program,
  User,
  UserProgram,
  AccountType
};