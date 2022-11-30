// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SessionType = {
  "ONE": "ONE",
  "GROUP": "GROUP"
};

const AccountType = {
  "SUPER_ADMIN": "SUPER_ADMIN",
  "USER": "USER",
  "SUPERVISOR": "SUPERVISOR",
  "THERAPIST": "THERAPIST"
};

const { Program, Session, SessionTemplate, ProgramTemplate, User } = initSchema(schema);

export {
  Program,
  Session,
  SessionTemplate,
  ProgramTemplate,
  User,
  SessionType,
  AccountType
};