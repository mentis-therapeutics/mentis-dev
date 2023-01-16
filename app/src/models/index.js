// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SessionType = {
  "ONE": "ONE",
  "GROUP": "GROUP"
};

const SessionGroup = {
  "SCREENING": "SCREENING",
  "PREPARATION": "PREPARATION",
  "TRIP": "TRIP",
  "INTEGRATION": "INTEGRATION"
};

const AccountType = {
  "SUPER_ADMIN": "SUPER_ADMIN",
  "USER": "USER",
  "SUPERVISOR": "SUPERVISOR",
  "THERAPIST": "THERAPIST"
};

const { Program, Session, SessionTemplate, ProgramTemplate, User, Facilitator, Cohort, ProgramSessions } = initSchema(schema);

export {
  Program,
  Session,
  SessionTemplate,
  ProgramTemplate,
  User,
  Facilitator,
  Cohort,
  ProgramSessions,
  SessionType,
  SessionGroup,
  AccountType
};