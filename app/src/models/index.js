// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AccountType = {
  "SUPER_ADMIN": "SUPER_ADMIN",
  "USER": "USER",
  "SUPERVISOR": "SUPERVISOR",
  "THERAPIST": "THERAPIST"
};

const { UserProgram, UserSession, Stage, Session, Program, User } = initSchema(schema);

export {
  UserProgram,
  UserSession,
  Stage,
  Session,
  Program,
  User,
  AccountType
};