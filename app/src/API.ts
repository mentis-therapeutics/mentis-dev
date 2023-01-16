/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProgramInput = {
  id?: string | null,
  userID: string,
  facilitatorID: string,
  cohortID?: string | null,
  enrollmentDate: string,
  completionDate?: string | null,
  complete: boolean,
  _version?: number | null,
  programProgramTemplateId: string,
};

export type ModelProgramConditionInput = {
  userID?: ModelIDInput | null,
  facilitatorID?: ModelIDInput | null,
  cohortID?: ModelIDInput | null,
  enrollmentDate?: ModelStringInput | null,
  completionDate?: ModelStringInput | null,
  complete?: ModelBooleanInput | null,
  and?: Array< ModelProgramConditionInput | null > | null,
  or?: Array< ModelProgramConditionInput | null > | null,
  not?: ModelProgramConditionInput | null,
  programProgramTemplateId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Program = {
  __typename: "Program",
  id: string,
  userID: string,
  facilitatorID: string,
  cohortID?: string | null,
  sessions?: ModelProgramSessionsConnection | null,
  programTemplate: ProgramTemplate,
  enrollmentDate: string,
  completionDate?: string | null,
  complete: boolean,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  programProgramTemplateId: string,
};

export type ModelProgramSessionsConnection = {
  __typename: "ModelProgramSessionsConnection",
  items:  Array<ProgramSessions | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ProgramSessions = {
  __typename: "ProgramSessions",
  id: string,
  programId: string,
  sessionId: string,
  program: Program,
  session: Session,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Session = {
  __typename: "Session",
  id: string,
  program?: ModelProgramSessionsConnection | null,
  sessionTemplate: SessionTemplate,
  start?: string | null,
  end?: string | null,
  booked: boolean,
  complete: boolean,
  meetingUUID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  sessionSessionTemplateId: string,
};

export type SessionTemplate = {
  __typename: "SessionTemplate",
  id: string,
  programTemplate: ProgramTemplate,
  name: string,
  description: string,
  length: string,
  precedence: number,
  type: SessionType,
  group: SessionGroup,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  programTemplateSessionTemplatesId?: string | null,
};

export type ProgramTemplate = {
  __typename: "ProgramTemplate",
  id: string,
  sessionTemplates?: ModelSessionTemplateConnection | null,
  name: string,
  description: string,
  version: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelSessionTemplateConnection = {
  __typename: "ModelSessionTemplateConnection",
  items:  Array<SessionTemplate | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export enum SessionType {
  ONE = "ONE",
  GROUP = "GROUP",
}


export enum SessionGroup {
  SCREENING = "SCREENING",
  PREPARATION = "PREPARATION",
  TRIP = "TRIP",
  INTEGRATION = "INTEGRATION",
}


export type UpdateProgramInput = {
  id: string,
  userID?: string | null,
  facilitatorID?: string | null,
  cohortID?: string | null,
  enrollmentDate?: string | null,
  completionDate?: string | null,
  complete?: boolean | null,
  _version?: number | null,
  programProgramTemplateId: string,
};

export type DeleteProgramInput = {
  id: string,
  _version?: number | null,
};

export type CreateSessionInput = {
  id?: string | null,
  start?: string | null,
  end?: string | null,
  booked: boolean,
  complete: boolean,
  meetingUUID: string,
  _version?: number | null,
  sessionSessionTemplateId: string,
};

export type ModelSessionConditionInput = {
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  booked?: ModelBooleanInput | null,
  complete?: ModelBooleanInput | null,
  meetingUUID?: ModelStringInput | null,
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
  sessionSessionTemplateId?: ModelIDInput | null,
};

export type UpdateSessionInput = {
  id: string,
  start?: string | null,
  end?: string | null,
  booked?: boolean | null,
  complete?: boolean | null,
  meetingUUID?: string | null,
  _version?: number | null,
  sessionSessionTemplateId: string,
};

export type DeleteSessionInput = {
  id: string,
  _version?: number | null,
};

export type CreateSessionTemplateInput = {
  id?: string | null,
  name: string,
  description: string,
  length: string,
  precedence: number,
  type: SessionType,
  group: SessionGroup,
  _version?: number | null,
  programTemplateSessionTemplatesId?: string | null,
};

export type ModelSessionTemplateConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  length?: ModelStringInput | null,
  precedence?: ModelIntInput | null,
  type?: ModelSessionTypeInput | null,
  group?: ModelSessionGroupInput | null,
  and?: Array< ModelSessionTemplateConditionInput | null > | null,
  or?: Array< ModelSessionTemplateConditionInput | null > | null,
  not?: ModelSessionTemplateConditionInput | null,
  programTemplateSessionTemplatesId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelSessionTypeInput = {
  eq?: SessionType | null,
  ne?: SessionType | null,
};

export type ModelSessionGroupInput = {
  eq?: SessionGroup | null,
  ne?: SessionGroup | null,
};

export type UpdateSessionTemplateInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  length?: string | null,
  precedence?: number | null,
  type?: SessionType | null,
  group?: SessionGroup | null,
  _version?: number | null,
  programTemplateSessionTemplatesId?: string | null,
};

export type DeleteSessionTemplateInput = {
  id: string,
  _version?: number | null,
};

export type CreateProgramTemplateInput = {
  id?: string | null,
  name: string,
  description: string,
  version: string,
  _version?: number | null,
};

export type ModelProgramTemplateConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  version?: ModelStringInput | null,
  and?: Array< ModelProgramTemplateConditionInput | null > | null,
  or?: Array< ModelProgramTemplateConditionInput | null > | null,
  not?: ModelProgramTemplateConditionInput | null,
};

export type UpdateProgramTemplateInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  version?: string | null,
  _version?: number | null,
};

export type DeleteProgramTemplateInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  sub: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  onboarded?: boolean | null,
  screened?: boolean | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  sub?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  onboarded?: ModelBooleanInput | null,
  screened?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  sub: string,
  programs?: ModelProgramConnection | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  onboarded?: boolean | null,
  screened?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelProgramConnection = {
  __typename: "ModelProgramConnection",
  items:  Array<Program | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateUserInput = {
  id: string,
  sub?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  onboarded?: boolean | null,
  screened?: boolean | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateFacilitatorInput = {
  id?: string | null,
  sub: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type ModelFacilitatorConditionInput = {
  sub?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelFacilitatorConditionInput | null > | null,
  or?: Array< ModelFacilitatorConditionInput | null > | null,
  not?: ModelFacilitatorConditionInput | null,
};

export type Facilitator = {
  __typename: "Facilitator",
  id: string,
  sub: string,
  programs?: ModelProgramConnection | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateFacilitatorInput = {
  id: string,
  sub?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteFacilitatorInput = {
  id: string,
  _version?: number | null,
};

export type CreateCohortInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelCohortConditionInput = {
  and?: Array< ModelCohortConditionInput | null > | null,
  or?: Array< ModelCohortConditionInput | null > | null,
  not?: ModelCohortConditionInput | null,
};

export type Cohort = {
  __typename: "Cohort",
  id: string,
  programs?: ModelProgramConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateCohortInput = {
  id: string,
  _version?: number | null,
};

export type DeleteCohortInput = {
  id: string,
  _version?: number | null,
};

export type CreateProgramSessionsInput = {
  id?: string | null,
  programId: string,
  sessionId: string,
  _version?: number | null,
};

export type ModelProgramSessionsConditionInput = {
  programId?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  and?: Array< ModelProgramSessionsConditionInput | null > | null,
  or?: Array< ModelProgramSessionsConditionInput | null > | null,
  not?: ModelProgramSessionsConditionInput | null,
};

export type UpdateProgramSessionsInput = {
  id: string,
  programId?: string | null,
  sessionId?: string | null,
  _version?: number | null,
};

export type DeleteProgramSessionsInput = {
  id: string,
  _version?: number | null,
};

export type ModelProgramFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  facilitatorID?: ModelIDInput | null,
  cohortID?: ModelIDInput | null,
  enrollmentDate?: ModelStringInput | null,
  completionDate?: ModelStringInput | null,
  complete?: ModelBooleanInput | null,
  and?: Array< ModelProgramFilterInput | null > | null,
  or?: Array< ModelProgramFilterInput | null > | null,
  not?: ModelProgramFilterInput | null,
  programProgramTemplateId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSessionFilterInput = {
  id?: ModelIDInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  booked?: ModelBooleanInput | null,
  complete?: ModelBooleanInput | null,
  meetingUUID?: ModelStringInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
  sessionSessionTemplateId?: ModelIDInput | null,
};

export type ModelSessionConnection = {
  __typename: "ModelSessionConnection",
  items:  Array<Session | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSessionTemplateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  length?: ModelStringInput | null,
  precedence?: ModelIntInput | null,
  type?: ModelSessionTypeInput | null,
  group?: ModelSessionGroupInput | null,
  and?: Array< ModelSessionTemplateFilterInput | null > | null,
  or?: Array< ModelSessionTemplateFilterInput | null > | null,
  not?: ModelSessionTemplateFilterInput | null,
  programTemplateSessionTemplatesId?: ModelIDInput | null,
};

export type ModelProgramTemplateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  version?: ModelStringInput | null,
  and?: Array< ModelProgramTemplateFilterInput | null > | null,
  or?: Array< ModelProgramTemplateFilterInput | null > | null,
  not?: ModelProgramTemplateFilterInput | null,
};

export type ModelProgramTemplateConnection = {
  __typename: "ModelProgramTemplateConnection",
  items:  Array<ProgramTemplate | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  sub?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  onboarded?: ModelBooleanInput | null,
  screened?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelFacilitatorFilterInput = {
  id?: ModelIDInput | null,
  sub?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelFacilitatorFilterInput | null > | null,
  or?: Array< ModelFacilitatorFilterInput | null > | null,
  not?: ModelFacilitatorFilterInput | null,
};

export type ModelFacilitatorConnection = {
  __typename: "ModelFacilitatorConnection",
  items:  Array<Facilitator | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCohortFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelCohortFilterInput | null > | null,
  or?: Array< ModelCohortFilterInput | null > | null,
  not?: ModelCohortFilterInput | null,
};

export type ModelCohortConnection = {
  __typename: "ModelCohortConnection",
  items:  Array<Cohort | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProgramSessionsFilterInput = {
  id?: ModelIDInput | null,
  programId?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  and?: Array< ModelProgramSessionsFilterInput | null > | null,
  or?: Array< ModelProgramSessionsFilterInput | null > | null,
  not?: ModelProgramSessionsFilterInput | null,
};

export type ModelSubscriptionProgramFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  facilitatorID?: ModelSubscriptionIDInput | null,
  cohortID?: ModelSubscriptionIDInput | null,
  enrollmentDate?: ModelSubscriptionStringInput | null,
  completionDate?: ModelSubscriptionStringInput | null,
  complete?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionProgramFilterInput | null > | null,
  or?: Array< ModelSubscriptionProgramFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  start?: ModelSubscriptionStringInput | null,
  end?: ModelSubscriptionStringInput | null,
  booked?: ModelSubscriptionBooleanInput | null,
  complete?: ModelSubscriptionBooleanInput | null,
  meetingUUID?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionFilterInput | null > | null,
};

export type ModelSubscriptionSessionTemplateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  length?: ModelSubscriptionStringInput | null,
  precedence?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  group?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSessionTemplateFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionTemplateFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionProgramTemplateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  version?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProgramTemplateFilterInput | null > | null,
  or?: Array< ModelSubscriptionProgramTemplateFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sub?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  onboarded?: ModelSubscriptionBooleanInput | null,
  screened?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionFacilitatorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sub?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFacilitatorFilterInput | null > | null,
  or?: Array< ModelSubscriptionFacilitatorFilterInput | null > | null,
};

export type ModelSubscriptionCohortFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCohortFilterInput | null > | null,
  or?: Array< ModelSubscriptionCohortFilterInput | null > | null,
};

export type ModelSubscriptionProgramSessionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  programId?: ModelSubscriptionIDInput | null,
  sessionId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProgramSessionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionProgramSessionsFilterInput | null > | null,
};

export type CreateProgramMutationVariables = {
  input: CreateProgramInput,
  condition?: ModelProgramConditionInput | null,
};

export type CreateProgramMutation = {
  createProgram?:  {
    __typename: "Program",
    id: string,
    userID: string,
    facilitatorID: string,
    cohortID?: string | null,
    sessions?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    enrollmentDate: string,
    completionDate?: string | null,
    complete: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId: string,
  } | null,
};

export type UpdateProgramMutationVariables = {
  input: UpdateProgramInput,
  condition?: ModelProgramConditionInput | null,
};

export type UpdateProgramMutation = {
  updateProgram?:  {
    __typename: "Program",
    id: string,
    userID: string,
    facilitatorID: string,
    cohortID?: string | null,
    sessions?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    enrollmentDate: string,
    completionDate?: string | null,
    complete: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId: string,
  } | null,
};

export type DeleteProgramMutationVariables = {
  input: DeleteProgramInput,
  condition?: ModelProgramConditionInput | null,
};

export type DeleteProgramMutation = {
  deleteProgram?:  {
    __typename: "Program",
    id: string,
    userID: string,
    facilitatorID: string,
    cohortID?: string | null,
    sessions?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    enrollmentDate: string,
    completionDate?: string | null,
    complete: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId: string,
  } | null,
};

export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type CreateSessionMutation = {
  createSession?:  {
    __typename: "Session",
    id: string,
    program?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessionTemplate:  {
      __typename: "SessionTemplate",
      id: string,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      name: string,
      description: string,
      length: string,
      precedence: number,
      type: SessionType,
      group: SessionGroup,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
    },
    start?: string | null,
    end?: string | null,
    booked: boolean,
    complete: boolean,
    meetingUUID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId: string,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input: UpdateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type UpdateSessionMutation = {
  updateSession?:  {
    __typename: "Session",
    id: string,
    program?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessionTemplate:  {
      __typename: "SessionTemplate",
      id: string,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      name: string,
      description: string,
      length: string,
      precedence: number,
      type: SessionType,
      group: SessionGroup,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
    },
    start?: string | null,
    end?: string | null,
    booked: boolean,
    complete: boolean,
    meetingUUID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId: string,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input: DeleteSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type DeleteSessionMutation = {
  deleteSession?:  {
    __typename: "Session",
    id: string,
    program?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessionTemplate:  {
      __typename: "SessionTemplate",
      id: string,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      name: string,
      description: string,
      length: string,
      precedence: number,
      type: SessionType,
      group: SessionGroup,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
    },
    start?: string | null,
    end?: string | null,
    booked: boolean,
    complete: boolean,
    meetingUUID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId: string,
  } | null,
};

export type CreateSessionTemplateMutationVariables = {
  input: CreateSessionTemplateInput,
  condition?: ModelSessionTemplateConditionInput | null,
};

export type CreateSessionTemplateMutation = {
  createSessionTemplate?:  {
    __typename: "SessionTemplate",
    id: string,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    name: string,
    description: string,
    length: string,
    precedence: number,
    type: SessionType,
    group: SessionGroup,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
  } | null,
};

export type UpdateSessionTemplateMutationVariables = {
  input: UpdateSessionTemplateInput,
  condition?: ModelSessionTemplateConditionInput | null,
};

export type UpdateSessionTemplateMutation = {
  updateSessionTemplate?:  {
    __typename: "SessionTemplate",
    id: string,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    name: string,
    description: string,
    length: string,
    precedence: number,
    type: SessionType,
    group: SessionGroup,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
  } | null,
};

export type DeleteSessionTemplateMutationVariables = {
  input: DeleteSessionTemplateInput,
  condition?: ModelSessionTemplateConditionInput | null,
};

export type DeleteSessionTemplateMutation = {
  deleteSessionTemplate?:  {
    __typename: "SessionTemplate",
    id: string,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    name: string,
    description: string,
    length: string,
    precedence: number,
    type: SessionType,
    group: SessionGroup,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
  } | null,
};

export type CreateProgramTemplateMutationVariables = {
  input: CreateProgramTemplateInput,
  condition?: ModelProgramTemplateConditionInput | null,
};

export type CreateProgramTemplateMutation = {
  createProgramTemplate?:  {
    __typename: "ProgramTemplate",
    id: string,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    description: string,
    version: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProgramTemplateMutationVariables = {
  input: UpdateProgramTemplateInput,
  condition?: ModelProgramTemplateConditionInput | null,
};

export type UpdateProgramTemplateMutation = {
  updateProgramTemplate?:  {
    __typename: "ProgramTemplate",
    id: string,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    description: string,
    version: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProgramTemplateMutationVariables = {
  input: DeleteProgramTemplateInput,
  condition?: ModelProgramTemplateConditionInput | null,
};

export type DeleteProgramTemplateMutation = {
  deleteProgramTemplate?:  {
    __typename: "ProgramTemplate",
    id: string,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    description: string,
    version: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateFacilitatorMutationVariables = {
  input: CreateFacilitatorInput,
  condition?: ModelFacilitatorConditionInput | null,
};

export type CreateFacilitatorMutation = {
  createFacilitator?:  {
    __typename: "Facilitator",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateFacilitatorMutationVariables = {
  input: UpdateFacilitatorInput,
  condition?: ModelFacilitatorConditionInput | null,
};

export type UpdateFacilitatorMutation = {
  updateFacilitator?:  {
    __typename: "Facilitator",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteFacilitatorMutationVariables = {
  input: DeleteFacilitatorInput,
  condition?: ModelFacilitatorConditionInput | null,
};

export type DeleteFacilitatorMutation = {
  deleteFacilitator?:  {
    __typename: "Facilitator",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateCohortMutationVariables = {
  input: CreateCohortInput,
  condition?: ModelCohortConditionInput | null,
};

export type CreateCohortMutation = {
  createCohort?:  {
    __typename: "Cohort",
    id: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateCohortMutationVariables = {
  input: UpdateCohortInput,
  condition?: ModelCohortConditionInput | null,
};

export type UpdateCohortMutation = {
  updateCohort?:  {
    __typename: "Cohort",
    id: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteCohortMutationVariables = {
  input: DeleteCohortInput,
  condition?: ModelCohortConditionInput | null,
};

export type DeleteCohortMutation = {
  deleteCohort?:  {
    __typename: "Cohort",
    id: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateProgramSessionsMutationVariables = {
  input: CreateProgramSessionsInput,
  condition?: ModelProgramSessionsConditionInput | null,
};

export type CreateProgramSessionsMutation = {
  createProgramSessions?:  {
    __typename: "ProgramSessions",
    id: string,
    programId: string,
    sessionId: string,
    program:  {
      __typename: "Program",
      id: string,
      userID: string,
      facilitatorID: string,
      cohortID?: string | null,
      sessions?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      enrollmentDate: string,
      completionDate?: string | null,
      complete: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId: string,
    },
    session:  {
      __typename: "Session",
      id: string,
      program?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      sessionTemplate:  {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      },
      start?: string | null,
      end?: string | null,
      booked: boolean,
      complete: boolean,
      meetingUUID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionSessionTemplateId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProgramSessionsMutationVariables = {
  input: UpdateProgramSessionsInput,
  condition?: ModelProgramSessionsConditionInput | null,
};

export type UpdateProgramSessionsMutation = {
  updateProgramSessions?:  {
    __typename: "ProgramSessions",
    id: string,
    programId: string,
    sessionId: string,
    program:  {
      __typename: "Program",
      id: string,
      userID: string,
      facilitatorID: string,
      cohortID?: string | null,
      sessions?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      enrollmentDate: string,
      completionDate?: string | null,
      complete: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId: string,
    },
    session:  {
      __typename: "Session",
      id: string,
      program?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      sessionTemplate:  {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      },
      start?: string | null,
      end?: string | null,
      booked: boolean,
      complete: boolean,
      meetingUUID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionSessionTemplateId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProgramSessionsMutationVariables = {
  input: DeleteProgramSessionsInput,
  condition?: ModelProgramSessionsConditionInput | null,
};

export type DeleteProgramSessionsMutation = {
  deleteProgramSessions?:  {
    __typename: "ProgramSessions",
    id: string,
    programId: string,
    sessionId: string,
    program:  {
      __typename: "Program",
      id: string,
      userID: string,
      facilitatorID: string,
      cohortID?: string | null,
      sessions?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      enrollmentDate: string,
      completionDate?: string | null,
      complete: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId: string,
    },
    session:  {
      __typename: "Session",
      id: string,
      program?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      sessionTemplate:  {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      },
      start?: string | null,
      end?: string | null,
      booked: boolean,
      complete: boolean,
      meetingUUID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionSessionTemplateId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetProgramQueryVariables = {
  id: string,
};

export type GetProgramQuery = {
  getProgram?:  {
    __typename: "Program",
    id: string,
    userID: string,
    facilitatorID: string,
    cohortID?: string | null,
    sessions?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    enrollmentDate: string,
    completionDate?: string | null,
    complete: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId: string,
  } | null,
};

export type ListProgramsQueryVariables = {
  filter?: ModelProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgramsQuery = {
  listPrograms?:  {
    __typename: "ModelProgramConnection",
    items:  Array< {
      __typename: "Program",
      id: string,
      userID: string,
      facilitatorID: string,
      cohortID?: string | null,
      sessions?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      enrollmentDate: string,
      completionDate?: string | null,
      complete: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProgramsQueryVariables = {
  filter?: ModelProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProgramsQuery = {
  syncPrograms?:  {
    __typename: "ModelProgramConnection",
    items:  Array< {
      __typename: "Program",
      id: string,
      userID: string,
      facilitatorID: string,
      cohortID?: string | null,
      sessions?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      enrollmentDate: string,
      completionDate?: string | null,
      complete: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProgramsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProgramsByUserIDQuery = {
  programsByUserID?:  {
    __typename: "ModelProgramConnection",
    items:  Array< {
      __typename: "Program",
      id: string,
      userID: string,
      facilitatorID: string,
      cohortID?: string | null,
      sessions?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      enrollmentDate: string,
      completionDate?: string | null,
      complete: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProgramsByFacilitatorIDQueryVariables = {
  facilitatorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProgramsByFacilitatorIDQuery = {
  programsByFacilitatorID?:  {
    __typename: "ModelProgramConnection",
    items:  Array< {
      __typename: "Program",
      id: string,
      userID: string,
      facilitatorID: string,
      cohortID?: string | null,
      sessions?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      enrollmentDate: string,
      completionDate?: string | null,
      complete: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProgramsByCohortIDQueryVariables = {
  cohortID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProgramsByCohortIDQuery = {
  programsByCohortID?:  {
    __typename: "ModelProgramConnection",
    items:  Array< {
      __typename: "Program",
      id: string,
      userID: string,
      facilitatorID: string,
      cohortID?: string | null,
      sessions?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      enrollmentDate: string,
      completionDate?: string | null,
      complete: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSessionQueryVariables = {
  id: string,
};

export type GetSessionQuery = {
  getSession?:  {
    __typename: "Session",
    id: string,
    program?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessionTemplate:  {
      __typename: "SessionTemplate",
      id: string,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      name: string,
      description: string,
      length: string,
      precedence: number,
      type: SessionType,
      group: SessionGroup,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
    },
    start?: string | null,
    end?: string | null,
    booked: boolean,
    complete: boolean,
    meetingUUID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId: string,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      program?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      sessionTemplate:  {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      },
      start?: string | null,
      end?: string | null,
      booked: boolean,
      complete: boolean,
      meetingUUID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionSessionTemplateId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSessionsQuery = {
  syncSessions?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      program?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      sessionTemplate:  {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      },
      start?: string | null,
      end?: string | null,
      booked: boolean,
      complete: boolean,
      meetingUUID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionSessionTemplateId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSessionTemplateQueryVariables = {
  id: string,
};

export type GetSessionTemplateQuery = {
  getSessionTemplate?:  {
    __typename: "SessionTemplate",
    id: string,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    name: string,
    description: string,
    length: string,
    precedence: number,
    type: SessionType,
    group: SessionGroup,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
  } | null,
};

export type ListSessionTemplatesQueryVariables = {
  filter?: ModelSessionTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionTemplatesQuery = {
  listSessionTemplates?:  {
    __typename: "ModelSessionTemplateConnection",
    items:  Array< {
      __typename: "SessionTemplate",
      id: string,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      name: string,
      description: string,
      length: string,
      precedence: number,
      type: SessionType,
      group: SessionGroup,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSessionTemplatesQueryVariables = {
  filter?: ModelSessionTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSessionTemplatesQuery = {
  syncSessionTemplates?:  {
    __typename: "ModelSessionTemplateConnection",
    items:  Array< {
      __typename: "SessionTemplate",
      id: string,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      name: string,
      description: string,
      length: string,
      precedence: number,
      type: SessionType,
      group: SessionGroup,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProgramTemplateQueryVariables = {
  id: string,
};

export type GetProgramTemplateQuery = {
  getProgramTemplate?:  {
    __typename: "ProgramTemplate",
    id: string,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    description: string,
    version: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProgramTemplatesQueryVariables = {
  filter?: ModelProgramTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgramTemplatesQuery = {
  listProgramTemplates?:  {
    __typename: "ModelProgramTemplateConnection",
    items:  Array< {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProgramTemplatesQueryVariables = {
  filter?: ModelProgramTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProgramTemplatesQuery = {
  syncProgramTemplates?:  {
    __typename: "ModelProgramTemplateConnection",
    items:  Array< {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      sub: string,
      programs?:  {
        __typename: "ModelProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      onboarded?: boolean | null,
      screened?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      sub: string,
      programs?:  {
        __typename: "ModelProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      onboarded?: boolean | null,
      screened?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFacilitatorQueryVariables = {
  id: string,
};

export type GetFacilitatorQuery = {
  getFacilitator?:  {
    __typename: "Facilitator",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListFacilitatorsQueryVariables = {
  filter?: ModelFacilitatorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFacilitatorsQuery = {
  listFacilitators?:  {
    __typename: "ModelFacilitatorConnection",
    items:  Array< {
      __typename: "Facilitator",
      id: string,
      sub: string,
      programs?:  {
        __typename: "ModelProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFacilitatorsQueryVariables = {
  filter?: ModelFacilitatorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFacilitatorsQuery = {
  syncFacilitators?:  {
    __typename: "ModelFacilitatorConnection",
    items:  Array< {
      __typename: "Facilitator",
      id: string,
      sub: string,
      programs?:  {
        __typename: "ModelProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCohortQueryVariables = {
  id: string,
};

export type GetCohortQuery = {
  getCohort?:  {
    __typename: "Cohort",
    id: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListCohortsQueryVariables = {
  filter?: ModelCohortFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCohortsQuery = {
  listCohorts?:  {
    __typename: "ModelCohortConnection",
    items:  Array< {
      __typename: "Cohort",
      id: string,
      programs?:  {
        __typename: "ModelProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCohortsQueryVariables = {
  filter?: ModelCohortFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCohortsQuery = {
  syncCohorts?:  {
    __typename: "ModelCohortConnection",
    items:  Array< {
      __typename: "Cohort",
      id: string,
      programs?:  {
        __typename: "ModelProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProgramSessionsQueryVariables = {
  id: string,
};

export type GetProgramSessionsQuery = {
  getProgramSessions?:  {
    __typename: "ProgramSessions",
    id: string,
    programId: string,
    sessionId: string,
    program:  {
      __typename: "Program",
      id: string,
      userID: string,
      facilitatorID: string,
      cohortID?: string | null,
      sessions?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      enrollmentDate: string,
      completionDate?: string | null,
      complete: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId: string,
    },
    session:  {
      __typename: "Session",
      id: string,
      program?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      sessionTemplate:  {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      },
      start?: string | null,
      end?: string | null,
      booked: boolean,
      complete: boolean,
      meetingUUID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionSessionTemplateId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProgramSessionsQueryVariables = {
  filter?: ModelProgramSessionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgramSessionsQuery = {
  listProgramSessions?:  {
    __typename: "ModelProgramSessionsConnection",
    items:  Array< {
      __typename: "ProgramSessions",
      id: string,
      programId: string,
      sessionId: string,
      program:  {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      },
      session:  {
        __typename: "Session",
        id: string,
        start?: string | null,
        end?: string | null,
        booked: boolean,
        complete: boolean,
        meetingUUID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        sessionSessionTemplateId: string,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProgramSessionsQueryVariables = {
  filter?: ModelProgramSessionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProgramSessionsQuery = {
  syncProgramSessions?:  {
    __typename: "ModelProgramSessionsConnection",
    items:  Array< {
      __typename: "ProgramSessions",
      id: string,
      programId: string,
      sessionId: string,
      program:  {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      },
      session:  {
        __typename: "Session",
        id: string,
        start?: string | null,
        end?: string | null,
        booked: boolean,
        complete: boolean,
        meetingUUID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        sessionSessionTemplateId: string,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProgramSessionsByProgramIdQueryVariables = {
  programId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProgramSessionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProgramSessionsByProgramIdQuery = {
  programSessionsByProgramId?:  {
    __typename: "ModelProgramSessionsConnection",
    items:  Array< {
      __typename: "ProgramSessions",
      id: string,
      programId: string,
      sessionId: string,
      program:  {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      },
      session:  {
        __typename: "Session",
        id: string,
        start?: string | null,
        end?: string | null,
        booked: boolean,
        complete: boolean,
        meetingUUID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        sessionSessionTemplateId: string,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProgramSessionsBySessionIdQueryVariables = {
  sessionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProgramSessionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProgramSessionsBySessionIdQuery = {
  programSessionsBySessionId?:  {
    __typename: "ModelProgramSessionsConnection",
    items:  Array< {
      __typename: "ProgramSessions",
      id: string,
      programId: string,
      sessionId: string,
      program:  {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      },
      session:  {
        __typename: "Session",
        id: string,
        start?: string | null,
        end?: string | null,
        booked: boolean,
        complete: boolean,
        meetingUUID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        sessionSessionTemplateId: string,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateProgramSubscriptionVariables = {
  filter?: ModelSubscriptionProgramFilterInput | null,
};

export type OnCreateProgramSubscription = {
  onCreateProgram?:  {
    __typename: "Program",
    id: string,
    userID: string,
    facilitatorID: string,
    cohortID?: string | null,
    sessions?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    enrollmentDate: string,
    completionDate?: string | null,
    complete: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId: string,
  } | null,
};

export type OnUpdateProgramSubscriptionVariables = {
  filter?: ModelSubscriptionProgramFilterInput | null,
};

export type OnUpdateProgramSubscription = {
  onUpdateProgram?:  {
    __typename: "Program",
    id: string,
    userID: string,
    facilitatorID: string,
    cohortID?: string | null,
    sessions?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    enrollmentDate: string,
    completionDate?: string | null,
    complete: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId: string,
  } | null,
};

export type OnDeleteProgramSubscriptionVariables = {
  filter?: ModelSubscriptionProgramFilterInput | null,
};

export type OnDeleteProgramSubscription = {
  onDeleteProgram?:  {
    __typename: "Program",
    id: string,
    userID: string,
    facilitatorID: string,
    cohortID?: string | null,
    sessions?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    enrollmentDate: string,
    completionDate?: string | null,
    complete: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId: string,
  } | null,
};

export type OnCreateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession?:  {
    __typename: "Session",
    id: string,
    program?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessionTemplate:  {
      __typename: "SessionTemplate",
      id: string,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      name: string,
      description: string,
      length: string,
      precedence: number,
      type: SessionType,
      group: SessionGroup,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
    },
    start?: string | null,
    end?: string | null,
    booked: boolean,
    complete: boolean,
    meetingUUID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId: string,
  } | null,
};

export type OnUpdateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession?:  {
    __typename: "Session",
    id: string,
    program?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessionTemplate:  {
      __typename: "SessionTemplate",
      id: string,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      name: string,
      description: string,
      length: string,
      precedence: number,
      type: SessionType,
      group: SessionGroup,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
    },
    start?: string | null,
    end?: string | null,
    booked: boolean,
    complete: boolean,
    meetingUUID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId: string,
  } | null,
};

export type OnDeleteSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession?:  {
    __typename: "Session",
    id: string,
    program?:  {
      __typename: "ModelProgramSessionsConnection",
      items:  Array< {
        __typename: "ProgramSessions",
        id: string,
        programId: string,
        sessionId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessionTemplate:  {
      __typename: "SessionTemplate",
      id: string,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      name: string,
      description: string,
      length: string,
      precedence: number,
      type: SessionType,
      group: SessionGroup,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
    },
    start?: string | null,
    end?: string | null,
    booked: boolean,
    complete: boolean,
    meetingUUID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId: string,
  } | null,
};

export type OnCreateSessionTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionSessionTemplateFilterInput | null,
};

export type OnCreateSessionTemplateSubscription = {
  onCreateSessionTemplate?:  {
    __typename: "SessionTemplate",
    id: string,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    name: string,
    description: string,
    length: string,
    precedence: number,
    type: SessionType,
    group: SessionGroup,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
  } | null,
};

export type OnUpdateSessionTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionSessionTemplateFilterInput | null,
};

export type OnUpdateSessionTemplateSubscription = {
  onUpdateSessionTemplate?:  {
    __typename: "SessionTemplate",
    id: string,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    name: string,
    description: string,
    length: string,
    precedence: number,
    type: SessionType,
    group: SessionGroup,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
  } | null,
};

export type OnDeleteSessionTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionSessionTemplateFilterInput | null,
};

export type OnDeleteSessionTemplateSubscription = {
  onDeleteSessionTemplate?:  {
    __typename: "SessionTemplate",
    id: string,
    programTemplate:  {
      __typename: "ProgramTemplate",
      id: string,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name: string,
      description: string,
      version: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    name: string,
    description: string,
    length: string,
    precedence: number,
    type: SessionType,
    group: SessionGroup,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
  } | null,
};

export type OnCreateProgramTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionProgramTemplateFilterInput | null,
};

export type OnCreateProgramTemplateSubscription = {
  onCreateProgramTemplate?:  {
    __typename: "ProgramTemplate",
    id: string,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    description: string,
    version: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProgramTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionProgramTemplateFilterInput | null,
};

export type OnUpdateProgramTemplateSubscription = {
  onUpdateProgramTemplate?:  {
    __typename: "ProgramTemplate",
    id: string,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    description: string,
    version: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProgramTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionProgramTemplateFilterInput | null,
};

export type OnDeleteProgramTemplateSubscription = {
  onDeleteProgramTemplate?:  {
    __typename: "ProgramTemplate",
    id: string,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    description: string,
    version: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateFacilitatorSubscriptionVariables = {
  filter?: ModelSubscriptionFacilitatorFilterInput | null,
  owner?: string | null,
};

export type OnCreateFacilitatorSubscription = {
  onCreateFacilitator?:  {
    __typename: "Facilitator",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateFacilitatorSubscriptionVariables = {
  filter?: ModelSubscriptionFacilitatorFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFacilitatorSubscription = {
  onUpdateFacilitator?:  {
    __typename: "Facilitator",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteFacilitatorSubscriptionVariables = {
  filter?: ModelSubscriptionFacilitatorFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFacilitatorSubscription = {
  onDeleteFacilitator?:  {
    __typename: "Facilitator",
    id: string,
    sub: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateCohortSubscriptionVariables = {
  filter?: ModelSubscriptionCohortFilterInput | null,
  owner?: string | null,
};

export type OnCreateCohortSubscription = {
  onCreateCohort?:  {
    __typename: "Cohort",
    id: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateCohortSubscriptionVariables = {
  filter?: ModelSubscriptionCohortFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCohortSubscription = {
  onUpdateCohort?:  {
    __typename: "Cohort",
    id: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteCohortSubscriptionVariables = {
  filter?: ModelSubscriptionCohortFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCohortSubscription = {
  onDeleteCohort?:  {
    __typename: "Cohort",
    id: string,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        userID: string,
        facilitatorID: string,
        cohortID?: string | null,
        enrollmentDate: string,
        completionDate?: string | null,
        complete: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateProgramSessionsSubscriptionVariables = {
  filter?: ModelSubscriptionProgramSessionsFilterInput | null,
};

export type OnCreateProgramSessionsSubscription = {
  onCreateProgramSessions?:  {
    __typename: "ProgramSessions",
    id: string,
    programId: string,
    sessionId: string,
    program:  {
      __typename: "Program",
      id: string,
      userID: string,
      facilitatorID: string,
      cohortID?: string | null,
      sessions?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      enrollmentDate: string,
      completionDate?: string | null,
      complete: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId: string,
    },
    session:  {
      __typename: "Session",
      id: string,
      program?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      sessionTemplate:  {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      },
      start?: string | null,
      end?: string | null,
      booked: boolean,
      complete: boolean,
      meetingUUID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionSessionTemplateId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProgramSessionsSubscriptionVariables = {
  filter?: ModelSubscriptionProgramSessionsFilterInput | null,
};

export type OnUpdateProgramSessionsSubscription = {
  onUpdateProgramSessions?:  {
    __typename: "ProgramSessions",
    id: string,
    programId: string,
    sessionId: string,
    program:  {
      __typename: "Program",
      id: string,
      userID: string,
      facilitatorID: string,
      cohortID?: string | null,
      sessions?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      enrollmentDate: string,
      completionDate?: string | null,
      complete: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId: string,
    },
    session:  {
      __typename: "Session",
      id: string,
      program?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      sessionTemplate:  {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      },
      start?: string | null,
      end?: string | null,
      booked: boolean,
      complete: boolean,
      meetingUUID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionSessionTemplateId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProgramSessionsSubscriptionVariables = {
  filter?: ModelSubscriptionProgramSessionsFilterInput | null,
};

export type OnDeleteProgramSessionsSubscription = {
  onDeleteProgramSessions?:  {
    __typename: "ProgramSessions",
    id: string,
    programId: string,
    sessionId: string,
    program:  {
      __typename: "Program",
      id: string,
      userID: string,
      facilitatorID: string,
      cohortID?: string | null,
      sessions?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate:  {
        __typename: "ProgramTemplate",
        id: string,
        name: string,
        description: string,
        version: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      enrollmentDate: string,
      completionDate?: string | null,
      complete: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId: string,
    },
    session:  {
      __typename: "Session",
      id: string,
      program?:  {
        __typename: "ModelProgramSessionsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      sessionTemplate:  {
        __typename: "SessionTemplate",
        id: string,
        name: string,
        description: string,
        length: string,
        precedence: number,
        type: SessionType,
        group: SessionGroup,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
      },
      start?: string | null,
      end?: string | null,
      booked: boolean,
      complete: boolean,
      meetingUUID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionSessionTemplateId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
