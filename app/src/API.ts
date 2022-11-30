/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProgramInput = {
  id?: string | null,
  enrollmentDate?: string | null,
  completionDate?: string | null,
  complete?: boolean | null,
  userID: string,
  _version?: number | null,
  programProgramTemplateId?: string | null,
};

export type ModelProgramConditionInput = {
  enrollmentDate?: ModelStringInput | null,
  completionDate?: ModelStringInput | null,
  complete?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelProgramConditionInput | null > | null,
  or?: Array< ModelProgramConditionInput | null > | null,
  not?: ModelProgramConditionInput | null,
  programProgramTemplateId?: ModelIDInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type Program = {
  __typename: "Program",
  id: string,
  enrollmentDate?: string | null,
  completionDate?: string | null,
  complete?: boolean | null,
  userID: string,
  sessions?: ModelSessionConnection | null,
  programTemplate?: ProgramTemplate | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  programProgramTemplateId?: string | null,
  owner?: string | null,
};

export type ModelSessionConnection = {
  __typename: "ModelSessionConnection",
  items:  Array<Session | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Session = {
  __typename: "Session",
  id: string,
  programID: string,
  datetime?: string | null,
  booked?: boolean | null,
  booking?: boolean | null,
  complete?: boolean | null,
  meetingUUID?: string | null,
  sessionTemplate?: SessionTemplate | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  sessionSessionTemplateId?: string | null,
  owner?: string | null,
};

export type SessionTemplate = {
  __typename: "SessionTemplate",
  id: string,
  name?: string | null,
  description?: string | null,
  length?: string | null,
  type?: SessionType | null,
  programTemplate?: ProgramTemplate | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  programTemplateSessionTemplatesId?: string | null,
  owner?: string | null,
};

export enum SessionType {
  ONE = "ONE",
  GROUP = "GROUP",
}


export type ProgramTemplate = {
  __typename: "ProgramTemplate",
  id: string,
  name?: string | null,
  description?: string | null,
  version?: string | null,
  sessionTemplates?: ModelSessionTemplateConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelSessionTemplateConnection = {
  __typename: "ModelSessionTemplateConnection",
  items:  Array<SessionTemplate | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateProgramInput = {
  id: string,
  enrollmentDate?: string | null,
  completionDate?: string | null,
  complete?: boolean | null,
  userID?: string | null,
  _version?: number | null,
  programProgramTemplateId?: string | null,
};

export type DeleteProgramInput = {
  id: string,
  _version?: number | null,
};

export type CreateSessionInput = {
  id?: string | null,
  programID: string,
  datetime?: string | null,
  booked?: boolean | null,
  booking?: boolean | null,
  complete?: boolean | null,
  meetingUUID?: string | null,
  _version?: number | null,
  sessionSessionTemplateId?: string | null,
};

export type ModelSessionConditionInput = {
  programID?: ModelIDInput | null,
  datetime?: ModelStringInput | null,
  booked?: ModelBooleanInput | null,
  booking?: ModelBooleanInput | null,
  complete?: ModelBooleanInput | null,
  meetingUUID?: ModelStringInput | null,
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
  sessionSessionTemplateId?: ModelIDInput | null,
};

export type UpdateSessionInput = {
  id: string,
  programID?: string | null,
  datetime?: string | null,
  booked?: boolean | null,
  booking?: boolean | null,
  complete?: boolean | null,
  meetingUUID?: string | null,
  _version?: number | null,
  sessionSessionTemplateId?: string | null,
};

export type DeleteSessionInput = {
  id: string,
  _version?: number | null,
};

export type CreateSessionTemplateInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  length?: string | null,
  type?: SessionType | null,
  _version?: number | null,
  programTemplateSessionTemplatesId?: string | null,
};

export type ModelSessionTemplateConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  length?: ModelStringInput | null,
  type?: ModelSessionTypeInput | null,
  and?: Array< ModelSessionTemplateConditionInput | null > | null,
  or?: Array< ModelSessionTemplateConditionInput | null > | null,
  not?: ModelSessionTemplateConditionInput | null,
  programTemplateSessionTemplatesId?: ModelIDInput | null,
};

export type ModelSessionTypeInput = {
  eq?: SessionType | null,
  ne?: SessionType | null,
};

export type UpdateSessionTemplateInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  length?: string | null,
  type?: SessionType | null,
  _version?: number | null,
  programTemplateSessionTemplatesId?: string | null,
};

export type DeleteSessionTemplateInput = {
  id: string,
  _version?: number | null,
};

export type CreateProgramTemplateInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  version?: string | null,
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
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  onboarded?: boolean | null,
  screened?: boolean | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
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
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  onboarded?: boolean | null,
  screened?: boolean | null,
  programs?: ModelProgramConnection | null,
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

export type ModelProgramFilterInput = {
  id?: ModelIDInput | null,
  enrollmentDate?: ModelStringInput | null,
  completionDate?: ModelStringInput | null,
  complete?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
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
  programID?: ModelIDInput | null,
  datetime?: ModelStringInput | null,
  booked?: ModelBooleanInput | null,
  booking?: ModelBooleanInput | null,
  complete?: ModelBooleanInput | null,
  meetingUUID?: ModelStringInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
  sessionSessionTemplateId?: ModelIDInput | null,
};

export type ModelSessionTemplateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  length?: ModelStringInput | null,
  type?: ModelSessionTypeInput | null,
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

export type ModelSubscriptionProgramFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  enrollmentDate?: ModelSubscriptionStringInput | null,
  completionDate?: ModelSubscriptionStringInput | null,
  complete?: ModelSubscriptionBooleanInput | null,
  userID?: ModelSubscriptionIDInput | null,
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
  programID?: ModelSubscriptionIDInput | null,
  datetime?: ModelSubscriptionStringInput | null,
  booked?: ModelSubscriptionBooleanInput | null,
  booking?: ModelSubscriptionBooleanInput | null,
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
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSessionTemplateFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionTemplateFilterInput | null > | null,
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
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  onboarded?: ModelSubscriptionBooleanInput | null,
  screened?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateProgramMutationVariables = {
  input: CreateProgramInput,
  condition?: ModelProgramConditionInput | null,
};

export type CreateProgramMutation = {
  createProgram?:  {
    __typename: "Program",
    id: string,
    enrollmentDate?: string | null,
    completionDate?: string | null,
    complete?: boolean | null,
    userID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        programID: string,
        datetime?: string | null,
        booked?: boolean | null,
        booking?: boolean | null,
        complete?: boolean | null,
        meetingUUID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        sessionSessionTemplateId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId?: string | null,
    owner?: string | null,
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
    enrollmentDate?: string | null,
    completionDate?: string | null,
    complete?: boolean | null,
    userID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        programID: string,
        datetime?: string | null,
        booked?: boolean | null,
        booking?: boolean | null,
        complete?: boolean | null,
        meetingUUID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        sessionSessionTemplateId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId?: string | null,
    owner?: string | null,
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
    enrollmentDate?: string | null,
    completionDate?: string | null,
    complete?: boolean | null,
    userID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        programID: string,
        datetime?: string | null,
        booked?: boolean | null,
        booking?: boolean | null,
        complete?: boolean | null,
        meetingUUID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        sessionSessionTemplateId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId?: string | null,
    owner?: string | null,
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
    programID: string,
    datetime?: string | null,
    booked?: boolean | null,
    booking?: boolean | null,
    complete?: boolean | null,
    meetingUUID?: string | null,
    sessionTemplate?:  {
      __typename: "SessionTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      length?: string | null,
      type?: SessionType | null,
      programTemplate?:  {
        __typename: "ProgramTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        version?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId?: string | null,
    owner?: string | null,
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
    programID: string,
    datetime?: string | null,
    booked?: boolean | null,
    booking?: boolean | null,
    complete?: boolean | null,
    meetingUUID?: string | null,
    sessionTemplate?:  {
      __typename: "SessionTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      length?: string | null,
      type?: SessionType | null,
      programTemplate?:  {
        __typename: "ProgramTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        version?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId?: string | null,
    owner?: string | null,
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
    programID: string,
    datetime?: string | null,
    booked?: boolean | null,
    booking?: boolean | null,
    complete?: boolean | null,
    meetingUUID?: string | null,
    sessionTemplate?:  {
      __typename: "SessionTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      length?: string | null,
      type?: SessionType | null,
      programTemplate?:  {
        __typename: "ProgramTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        version?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId?: string | null,
    owner?: string | null,
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
    name?: string | null,
    description?: string | null,
    length?: string | null,
    type?: SessionType | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
    owner?: string | null,
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
    name?: string | null,
    description?: string | null,
    length?: string | null,
    type?: SessionType | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
    owner?: string | null,
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
    name?: string | null,
    description?: string | null,
    length?: string | null,
    type?: SessionType | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
    owner?: string | null,
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
    name?: string | null,
    description?: string | null,
    version?: string | null,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        length?: string | null,
        type?: SessionType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
        owner?: string | null,
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

export type UpdateProgramTemplateMutationVariables = {
  input: UpdateProgramTemplateInput,
  condition?: ModelProgramTemplateConditionInput | null,
};

export type UpdateProgramTemplateMutation = {
  updateProgramTemplate?:  {
    __typename: "ProgramTemplate",
    id: string,
    name?: string | null,
    description?: string | null,
    version?: string | null,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        length?: string | null,
        type?: SessionType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
        owner?: string | null,
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

export type DeleteProgramTemplateMutationVariables = {
  input: DeleteProgramTemplateInput,
  condition?: ModelProgramTemplateConditionInput | null,
};

export type DeleteProgramTemplateMutation = {
  deleteProgramTemplate?:  {
    __typename: "ProgramTemplate",
    id: string,
    name?: string | null,
    description?: string | null,
    version?: string | null,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        length?: string | null,
        type?: SessionType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
        owner?: string | null,
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

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        enrollmentDate?: string | null,
        completionDate?: string | null,
        complete?: boolean | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId?: string | null,
        owner?: string | null,
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

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        enrollmentDate?: string | null,
        completionDate?: string | null,
        complete?: boolean | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId?: string | null,
        owner?: string | null,
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

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        enrollmentDate?: string | null,
        completionDate?: string | null,
        complete?: boolean | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId?: string | null,
        owner?: string | null,
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

export type GetProgramQueryVariables = {
  id: string,
};

export type GetProgramQuery = {
  getProgram?:  {
    __typename: "Program",
    id: string,
    enrollmentDate?: string | null,
    completionDate?: string | null,
    complete?: boolean | null,
    userID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        programID: string,
        datetime?: string | null,
        booked?: boolean | null,
        booking?: boolean | null,
        complete?: boolean | null,
        meetingUUID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        sessionSessionTemplateId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId?: string | null,
    owner?: string | null,
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
      enrollmentDate?: string | null,
      completionDate?: string | null,
      complete?: boolean | null,
      userID: string,
      sessions?:  {
        __typename: "ModelSessionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate?:  {
        __typename: "ProgramTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        version?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId?: string | null,
      owner?: string | null,
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
      enrollmentDate?: string | null,
      completionDate?: string | null,
      complete?: boolean | null,
      userID: string,
      sessions?:  {
        __typename: "ModelSessionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate?:  {
        __typename: "ProgramTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        version?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId?: string | null,
      owner?: string | null,
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
      enrollmentDate?: string | null,
      completionDate?: string | null,
      complete?: boolean | null,
      userID: string,
      sessions?:  {
        __typename: "ModelSessionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      programTemplate?:  {
        __typename: "ProgramTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        version?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programProgramTemplateId?: string | null,
      owner?: string | null,
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
    programID: string,
    datetime?: string | null,
    booked?: boolean | null,
    booking?: boolean | null,
    complete?: boolean | null,
    meetingUUID?: string | null,
    sessionTemplate?:  {
      __typename: "SessionTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      length?: string | null,
      type?: SessionType | null,
      programTemplate?:  {
        __typename: "ProgramTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        version?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId?: string | null,
    owner?: string | null,
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
      programID: string,
      datetime?: string | null,
      booked?: boolean | null,
      booking?: boolean | null,
      complete?: boolean | null,
      meetingUUID?: string | null,
      sessionTemplate?:  {
        __typename: "SessionTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        length?: string | null,
        type?: SessionType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionSessionTemplateId?: string | null,
      owner?: string | null,
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
      programID: string,
      datetime?: string | null,
      booked?: boolean | null,
      booking?: boolean | null,
      complete?: boolean | null,
      meetingUUID?: string | null,
      sessionTemplate?:  {
        __typename: "SessionTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        length?: string | null,
        type?: SessionType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionSessionTemplateId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SessionsByProgramIDQueryVariables = {
  programID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionsByProgramIDQuery = {
  sessionsByProgramID?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      programID: string,
      datetime?: string | null,
      booked?: boolean | null,
      booking?: boolean | null,
      complete?: boolean | null,
      meetingUUID?: string | null,
      sessionTemplate?:  {
        __typename: "SessionTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        length?: string | null,
        type?: SessionType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionSessionTemplateId?: string | null,
      owner?: string | null,
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
    name?: string | null,
    description?: string | null,
    length?: string | null,
    type?: SessionType | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
    owner?: string | null,
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
      name?: string | null,
      description?: string | null,
      length?: string | null,
      type?: SessionType | null,
      programTemplate?:  {
        __typename: "ProgramTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        version?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
      owner?: string | null,
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
      name?: string | null,
      description?: string | null,
      length?: string | null,
      type?: SessionType | null,
      programTemplate?:  {
        __typename: "ProgramTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        version?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
      owner?: string | null,
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
    name?: string | null,
    description?: string | null,
    version?: string | null,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        length?: string | null,
        type?: SessionType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
        owner?: string | null,
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
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        enrollmentDate?: string | null,
        completionDate?: string | null,
        complete?: boolean | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId?: string | null,
        owner?: string | null,
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
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      onboarded?: boolean | null,
      screened?: boolean | null,
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
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      onboarded?: boolean | null,
      screened?: boolean | null,
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

export type OnCreateProgramSubscriptionVariables = {
  filter?: ModelSubscriptionProgramFilterInput | null,
  owner?: string | null,
};

export type OnCreateProgramSubscription = {
  onCreateProgram?:  {
    __typename: "Program",
    id: string,
    enrollmentDate?: string | null,
    completionDate?: string | null,
    complete?: boolean | null,
    userID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        programID: string,
        datetime?: string | null,
        booked?: boolean | null,
        booking?: boolean | null,
        complete?: boolean | null,
        meetingUUID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        sessionSessionTemplateId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateProgramSubscriptionVariables = {
  filter?: ModelSubscriptionProgramFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProgramSubscription = {
  onUpdateProgram?:  {
    __typename: "Program",
    id: string,
    enrollmentDate?: string | null,
    completionDate?: string | null,
    complete?: boolean | null,
    userID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        programID: string,
        datetime?: string | null,
        booked?: boolean | null,
        booking?: boolean | null,
        complete?: boolean | null,
        meetingUUID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        sessionSessionTemplateId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteProgramSubscriptionVariables = {
  filter?: ModelSubscriptionProgramFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProgramSubscription = {
  onDeleteProgram?:  {
    __typename: "Program",
    id: string,
    enrollmentDate?: string | null,
    completionDate?: string | null,
    complete?: boolean | null,
    userID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        programID: string,
        datetime?: string | null,
        booked?: boolean | null,
        booking?: boolean | null,
        complete?: boolean | null,
        meetingUUID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        sessionSessionTemplateId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programProgramTemplateId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
  owner?: string | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession?:  {
    __typename: "Session",
    id: string,
    programID: string,
    datetime?: string | null,
    booked?: boolean | null,
    booking?: boolean | null,
    complete?: boolean | null,
    meetingUUID?: string | null,
    sessionTemplate?:  {
      __typename: "SessionTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      length?: string | null,
      type?: SessionType | null,
      programTemplate?:  {
        __typename: "ProgramTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        version?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession?:  {
    __typename: "Session",
    id: string,
    programID: string,
    datetime?: string | null,
    booked?: boolean | null,
    booking?: boolean | null,
    complete?: boolean | null,
    meetingUUID?: string | null,
    sessionTemplate?:  {
      __typename: "SessionTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      length?: string | null,
      type?: SessionType | null,
      programTemplate?:  {
        __typename: "ProgramTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        version?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession?:  {
    __typename: "Session",
    id: string,
    programID: string,
    datetime?: string | null,
    booked?: boolean | null,
    booking?: boolean | null,
    complete?: boolean | null,
    meetingUUID?: string | null,
    sessionTemplate?:  {
      __typename: "SessionTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      length?: string | null,
      type?: SessionType | null,
      programTemplate?:  {
        __typename: "ProgramTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        version?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      programTemplateSessionTemplatesId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionSessionTemplateId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateSessionTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionSessionTemplateFilterInput | null,
  owner?: string | null,
};

export type OnCreateSessionTemplateSubscription = {
  onCreateSessionTemplate?:  {
    __typename: "SessionTemplate",
    id: string,
    name?: string | null,
    description?: string | null,
    length?: string | null,
    type?: SessionType | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateSessionTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionSessionTemplateFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSessionTemplateSubscription = {
  onUpdateSessionTemplate?:  {
    __typename: "SessionTemplate",
    id: string,
    name?: string | null,
    description?: string | null,
    length?: string | null,
    type?: SessionType | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteSessionTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionSessionTemplateFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSessionTemplateSubscription = {
  onDeleteSessionTemplate?:  {
    __typename: "SessionTemplate",
    id: string,
    name?: string | null,
    description?: string | null,
    length?: string | null,
    type?: SessionType | null,
    programTemplate?:  {
      __typename: "ProgramTemplate",
      id: string,
      name?: string | null,
      description?: string | null,
      version?: string | null,
      sessionTemplates?:  {
        __typename: "ModelSessionTemplateConnection",
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    programTemplateSessionTemplatesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateProgramTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionProgramTemplateFilterInput | null,
  owner?: string | null,
};

export type OnCreateProgramTemplateSubscription = {
  onCreateProgramTemplate?:  {
    __typename: "ProgramTemplate",
    id: string,
    name?: string | null,
    description?: string | null,
    version?: string | null,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        length?: string | null,
        type?: SessionType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
        owner?: string | null,
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

export type OnUpdateProgramTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionProgramTemplateFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProgramTemplateSubscription = {
  onUpdateProgramTemplate?:  {
    __typename: "ProgramTemplate",
    id: string,
    name?: string | null,
    description?: string | null,
    version?: string | null,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        length?: string | null,
        type?: SessionType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
        owner?: string | null,
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

export type OnDeleteProgramTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionProgramTemplateFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProgramTemplateSubscription = {
  onDeleteProgramTemplate?:  {
    __typename: "ProgramTemplate",
    id: string,
    name?: string | null,
    description?: string | null,
    version?: string | null,
    sessionTemplates?:  {
      __typename: "ModelSessionTemplateConnection",
      items:  Array< {
        __typename: "SessionTemplate",
        id: string,
        name?: string | null,
        description?: string | null,
        length?: string | null,
        type?: SessionType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programTemplateSessionTemplatesId?: string | null,
        owner?: string | null,
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

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        enrollmentDate?: string | null,
        completionDate?: string | null,
        complete?: boolean | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId?: string | null,
        owner?: string | null,
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

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        enrollmentDate?: string | null,
        completionDate?: string | null,
        complete?: boolean | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId?: string | null,
        owner?: string | null,
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

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phone?: string | null,
    onboarded?: boolean | null,
    screened?: boolean | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      items:  Array< {
        __typename: "Program",
        id: string,
        enrollmentDate?: string | null,
        completionDate?: string | null,
        complete?: boolean | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        programProgramTemplateId?: string | null,
        owner?: string | null,
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
