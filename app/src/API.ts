/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStageInput = {
  id?: string | null,
  programID: string,
  name?: string | null,
  _version?: number | null,
};

export type ModelStageConditionInput = {
  programID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelStageConditionInput | null > | null,
  or?: Array< ModelStageConditionInput | null > | null,
  not?: ModelStageConditionInput | null,
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

export type Stage = {
  __typename: "Stage",
  id: string,
  programID: string,
  sessions?: ModelSessionConnection | null,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
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
  stageID: string,
  name?: number | null,
  description?: string | null,
  dateTime?: string | null,
  length?: string | null,
  scheduled?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateStageInput = {
  id: string,
  programID?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type DeleteStageInput = {
  id: string,
  _version?: number | null,
};

export type CreateProgramInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelProgramConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProgramConditionInput | null > | null,
  or?: Array< ModelProgramConditionInput | null > | null,
  not?: ModelProgramConditionInput | null,
};

export type Program = {
  __typename: "Program",
  id: string,
  name?: string | null,
  stages?: ModelStageConnection | null,
  users?: ModelUserProgramConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelStageConnection = {
  __typename: "ModelStageConnection",
  items:  Array<Stage | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserProgramConnection = {
  __typename: "ModelUserProgramConnection",
  items:  Array<UserProgram | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserProgram = {
  __typename: "UserProgram",
  id: string,
  programId: string,
  userId: string,
  program: Program,
  user: User,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  accountType?: AccountType | null,
  onboarded?: boolean | null,
  program?: ModelUserProgramConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export enum AccountType {
  SUPER_ADMIN = "SUPER_ADMIN",
  USER = "USER",
  SUPERVISOR = "SUPERVISOR",
  THERAPIST = "THERAPIST",
}


export type UpdateProgramInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteProgramInput = {
  id: string,
  _version?: number | null,
};

export type CreateSessionInput = {
  id?: string | null,
  stageID: string,
  name?: number | null,
  description?: string | null,
  dateTime?: string | null,
  length?: string | null,
  scheduled?: boolean | null,
  _version?: number | null,
};

export type ModelSessionConditionInput = {
  stageID?: ModelIDInput | null,
  name?: ModelIntInput | null,
  description?: ModelStringInput | null,
  dateTime?: ModelStringInput | null,
  length?: ModelStringInput | null,
  scheduled?: ModelBooleanInput | null,
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSessionInput = {
  id: string,
  stageID?: string | null,
  name?: number | null,
  description?: string | null,
  dateTime?: string | null,
  length?: string | null,
  scheduled?: boolean | null,
  _version?: number | null,
};

export type DeleteSessionInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  accountType?: AccountType | null,
  onboarded?: boolean | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  accountType?: ModelAccountTypeInput | null,
  onboarded?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelAccountTypeInput = {
  eq?: AccountType | null,
  ne?: AccountType | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  accountType?: AccountType | null,
  onboarded?: boolean | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserProgramInput = {
  id?: string | null,
  programId: string,
  userId: string,
  _version?: number | null,
};

export type ModelUserProgramConditionInput = {
  programId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserProgramConditionInput | null > | null,
  or?: Array< ModelUserProgramConditionInput | null > | null,
  not?: ModelUserProgramConditionInput | null,
};

export type UpdateUserProgramInput = {
  id: string,
  programId?: string | null,
  userId?: string | null,
  _version?: number | null,
};

export type DeleteUserProgramInput = {
  id: string,
  _version?: number | null,
};

export type ModelStageFilterInput = {
  id?: ModelIDInput | null,
  programID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelStageFilterInput | null > | null,
  or?: Array< ModelStageFilterInput | null > | null,
  not?: ModelStageFilterInput | null,
};

export type ModelProgramFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProgramFilterInput | null > | null,
  or?: Array< ModelProgramFilterInput | null > | null,
  not?: ModelProgramFilterInput | null,
};

export type ModelProgramConnection = {
  __typename: "ModelProgramConnection",
  items:  Array<Program | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSessionFilterInput = {
  id?: ModelIDInput | null,
  stageID?: ModelIDInput | null,
  name?: ModelIntInput | null,
  description?: ModelStringInput | null,
  dateTime?: ModelStringInput | null,
  length?: ModelStringInput | null,
  scheduled?: ModelBooleanInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  accountType?: ModelAccountTypeInput | null,
  onboarded?: ModelBooleanInput | null,
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

export type ModelUserProgramFilterInput = {
  id?: ModelIDInput | null,
  programId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserProgramFilterInput | null > | null,
  or?: Array< ModelUserProgramFilterInput | null > | null,
  not?: ModelUserProgramFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionStageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  programID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStageFilterInput | null > | null,
  or?: Array< ModelSubscriptionStageFilterInput | null > | null,
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

export type ModelSubscriptionProgramFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProgramFilterInput | null > | null,
  or?: Array< ModelSubscriptionProgramFilterInput | null > | null,
};

export type ModelSubscriptionSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  stageID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  dateTime?: ModelSubscriptionStringInput | null,
  length?: ModelSubscriptionStringInput | null,
  scheduled?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionFilterInput | null > | null,
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

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  accountType?: ModelSubscriptionStringInput | null,
  onboarded?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionUserProgramFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  programId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserProgramFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProgramFilterInput | null > | null,
};

export type CreateStageMutationVariables = {
  input: CreateStageInput,
  condition?: ModelStageConditionInput | null,
};

export type CreateStageMutation = {
  createStage?:  {
    __typename: "Stage",
    id: string,
    programID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        stageID: string,
        name?: number | null,
        description?: string | null,
        dateTime?: string | null,
        length?: string | null,
        scheduled?: boolean | null,
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
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateStageMutationVariables = {
  input: UpdateStageInput,
  condition?: ModelStageConditionInput | null,
};

export type UpdateStageMutation = {
  updateStage?:  {
    __typename: "Stage",
    id: string,
    programID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        stageID: string,
        name?: number | null,
        description?: string | null,
        dateTime?: string | null,
        length?: string | null,
        scheduled?: boolean | null,
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
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteStageMutationVariables = {
  input: DeleteStageInput,
  condition?: ModelStageConditionInput | null,
};

export type DeleteStageMutation = {
  deleteStage?:  {
    __typename: "Stage",
    id: string,
    programID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        stageID: string,
        name?: number | null,
        description?: string | null,
        dateTime?: string | null,
        length?: string | null,
        scheduled?: boolean | null,
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
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateProgramMutationVariables = {
  input: CreateProgramInput,
  condition?: ModelProgramConditionInput | null,
};

export type CreateProgramMutation = {
  createProgram?:  {
    __typename: "Program",
    id: string,
    name?: string | null,
    stages?:  {
      __typename: "ModelStageConnection",
      items:  Array< {
        __typename: "Stage",
        id: string,
        programID: string,
        name?: string | null,
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
    users?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    name?: string | null,
    stages?:  {
      __typename: "ModelStageConnection",
      items:  Array< {
        __typename: "Stage",
        id: string,
        programID: string,
        name?: string | null,
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
    users?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    name?: string | null,
    stages?:  {
      __typename: "ModelStageConnection",
      items:  Array< {
        __typename: "Stage",
        id: string,
        programID: string,
        name?: string | null,
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
    users?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    stageID: string,
    name?: number | null,
    description?: string | null,
    dateTime?: string | null,
    length?: string | null,
    scheduled?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    stageID: string,
    name?: number | null,
    description?: string | null,
    dateTime?: string | null,
    length?: string | null,
    scheduled?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    stageID: string,
    name?: number | null,
    description?: string | null,
    dateTime?: string | null,
    length?: string | null,
    scheduled?: boolean | null,
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
    accountType?: AccountType | null,
    onboarded?: boolean | null,
    program?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
    accountType?: AccountType | null,
    onboarded?: boolean | null,
    program?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
    accountType?: AccountType | null,
    onboarded?: boolean | null,
    program?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateUserProgramMutationVariables = {
  input: CreateUserProgramInput,
  condition?: ModelUserProgramConditionInput | null,
};

export type CreateUserProgramMutation = {
  createUserProgram?:  {
    __typename: "UserProgram",
    id: string,
    programId: string,
    userId: string,
    program:  {
      __typename: "Program",
      id: string,
      name?: string | null,
      stages?:  {
        __typename: "ModelStageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      accountType?: AccountType | null,
      onboarded?: boolean | null,
      program?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateUserProgramMutationVariables = {
  input: UpdateUserProgramInput,
  condition?: ModelUserProgramConditionInput | null,
};

export type UpdateUserProgramMutation = {
  updateUserProgram?:  {
    __typename: "UserProgram",
    id: string,
    programId: string,
    userId: string,
    program:  {
      __typename: "Program",
      id: string,
      name?: string | null,
      stages?:  {
        __typename: "ModelStageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      accountType?: AccountType | null,
      onboarded?: boolean | null,
      program?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteUserProgramMutationVariables = {
  input: DeleteUserProgramInput,
  condition?: ModelUserProgramConditionInput | null,
};

export type DeleteUserProgramMutation = {
  deleteUserProgram?:  {
    __typename: "UserProgram",
    id: string,
    programId: string,
    userId: string,
    program:  {
      __typename: "Program",
      id: string,
      name?: string | null,
      stages?:  {
        __typename: "ModelStageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      accountType?: AccountType | null,
      onboarded?: boolean | null,
      program?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetStageQueryVariables = {
  id: string,
};

export type GetStageQuery = {
  getStage?:  {
    __typename: "Stage",
    id: string,
    programID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        stageID: string,
        name?: number | null,
        description?: string | null,
        dateTime?: string | null,
        length?: string | null,
        scheduled?: boolean | null,
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
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListStagesQueryVariables = {
  filter?: ModelStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStagesQuery = {
  listStages?:  {
    __typename: "ModelStageConnection",
    items:  Array< {
      __typename: "Stage",
      id: string,
      programID: string,
      sessions?:  {
        __typename: "ModelSessionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
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

export type SyncStagesQueryVariables = {
  filter?: ModelStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStagesQuery = {
  syncStages?:  {
    __typename: "ModelStageConnection",
    items:  Array< {
      __typename: "Stage",
      id: string,
      programID: string,
      sessions?:  {
        __typename: "ModelSessionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
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

export type GetProgramQueryVariables = {
  id: string,
};

export type GetProgramQuery = {
  getProgram?:  {
    __typename: "Program",
    id: string,
    name?: string | null,
    stages?:  {
      __typename: "ModelStageConnection",
      items:  Array< {
        __typename: "Stage",
        id: string,
        programID: string,
        name?: string | null,
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
    users?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      name?: string | null,
      stages?:  {
        __typename: "ModelStageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserProgramConnection",
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
      name?: string | null,
      stages?:  {
        __typename: "ModelStageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserProgramConnection",
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

export type GetSessionQueryVariables = {
  id: string,
};

export type GetSessionQuery = {
  getSession?:  {
    __typename: "Session",
    id: string,
    stageID: string,
    name?: number | null,
    description?: string | null,
    dateTime?: string | null,
    length?: string | null,
    scheduled?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      stageID: string,
      name?: number | null,
      description?: string | null,
      dateTime?: string | null,
      length?: string | null,
      scheduled?: boolean | null,
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
      stageID: string,
      name?: number | null,
      description?: string | null,
      dateTime?: string | null,
      length?: string | null,
      scheduled?: boolean | null,
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
    accountType?: AccountType | null,
    onboarded?: boolean | null,
    program?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
      accountType?: AccountType | null,
      onboarded?: boolean | null,
      program?:  {
        __typename: "ModelUserProgramConnection",
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
      accountType?: AccountType | null,
      onboarded?: boolean | null,
      program?:  {
        __typename: "ModelUserProgramConnection",
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

export type GetUserProgramQueryVariables = {
  id: string,
};

export type GetUserProgramQuery = {
  getUserProgram?:  {
    __typename: "UserProgram",
    id: string,
    programId: string,
    userId: string,
    program:  {
      __typename: "Program",
      id: string,
      name?: string | null,
      stages?:  {
        __typename: "ModelStageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      accountType?: AccountType | null,
      onboarded?: boolean | null,
      program?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListUserProgramsQueryVariables = {
  filter?: ModelUserProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProgramsQuery = {
  listUserPrograms?:  {
    __typename: "ModelUserProgramConnection",
    items:  Array< {
      __typename: "UserProgram",
      id: string,
      programId: string,
      userId: string,
      program:  {
        __typename: "Program",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      user:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phone?: string | null,
        accountType?: AccountType | null,
        onboarded?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
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

export type SyncUserProgramsQueryVariables = {
  filter?: ModelUserProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserProgramsQuery = {
  syncUserPrograms?:  {
    __typename: "ModelUserProgramConnection",
    items:  Array< {
      __typename: "UserProgram",
      id: string,
      programId: string,
      userId: string,
      program:  {
        __typename: "Program",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      user:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phone?: string | null,
        accountType?: AccountType | null,
        onboarded?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
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

export type StagesByProgramIDQueryVariables = {
  programID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StagesByProgramIDQuery = {
  stagesByProgramID?:  {
    __typename: "ModelStageConnection",
    items:  Array< {
      __typename: "Stage",
      id: string,
      programID: string,
      sessions?:  {
        __typename: "ModelSessionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
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

export type SessionsByStageIDQueryVariables = {
  stageID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionsByStageIDQuery = {
  sessionsByStageID?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      stageID: string,
      name?: number | null,
      description?: string | null,
      dateTime?: string | null,
      length?: string | null,
      scheduled?: boolean | null,
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

export type UserProgramsByProgramIdQueryVariables = {
  programId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserProgramsByProgramIdQuery = {
  userProgramsByProgramId?:  {
    __typename: "ModelUserProgramConnection",
    items:  Array< {
      __typename: "UserProgram",
      id: string,
      programId: string,
      userId: string,
      program:  {
        __typename: "Program",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      user:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phone?: string | null,
        accountType?: AccountType | null,
        onboarded?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
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

export type UserProgramsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserProgramsByUserIdQuery = {
  userProgramsByUserId?:  {
    __typename: "ModelUserProgramConnection",
    items:  Array< {
      __typename: "UserProgram",
      id: string,
      programId: string,
      userId: string,
      program:  {
        __typename: "Program",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      user:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phone?: string | null,
        accountType?: AccountType | null,
        onboarded?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
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

export type OnCreateStageSubscriptionVariables = {
  filter?: ModelSubscriptionStageFilterInput | null,
  owner?: string | null,
};

export type OnCreateStageSubscription = {
  onCreateStage?:  {
    __typename: "Stage",
    id: string,
    programID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        stageID: string,
        name?: number | null,
        description?: string | null,
        dateTime?: string | null,
        length?: string | null,
        scheduled?: boolean | null,
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
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateStageSubscriptionVariables = {
  filter?: ModelSubscriptionStageFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStageSubscription = {
  onUpdateStage?:  {
    __typename: "Stage",
    id: string,
    programID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        stageID: string,
        name?: number | null,
        description?: string | null,
        dateTime?: string | null,
        length?: string | null,
        scheduled?: boolean | null,
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
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteStageSubscriptionVariables = {
  filter?: ModelSubscriptionStageFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStageSubscription = {
  onDeleteStage?:  {
    __typename: "Stage",
    id: string,
    programID: string,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        stageID: string,
        name?: number | null,
        description?: string | null,
        dateTime?: string | null,
        length?: string | null,
        scheduled?: boolean | null,
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
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    name?: string | null,
    stages?:  {
      __typename: "ModelStageConnection",
      items:  Array< {
        __typename: "Stage",
        id: string,
        programID: string,
        name?: string | null,
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
    users?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    name?: string | null,
    stages?:  {
      __typename: "ModelStageConnection",
      items:  Array< {
        __typename: "Stage",
        id: string,
        programID: string,
        name?: string | null,
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
    users?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    name?: string | null,
    stages?:  {
      __typename: "ModelStageConnection",
      items:  Array< {
        __typename: "Stage",
        id: string,
        programID: string,
        name?: string | null,
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
    users?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    stageID: string,
    name?: number | null,
    description?: string | null,
    dateTime?: string | null,
    length?: string | null,
    scheduled?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    stageID: string,
    name?: number | null,
    description?: string | null,
    dateTime?: string | null,
    length?: string | null,
    scheduled?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    stageID: string,
    name?: number | null,
    description?: string | null,
    dateTime?: string | null,
    length?: string | null,
    scheduled?: boolean | null,
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
    accountType?: AccountType | null,
    onboarded?: boolean | null,
    program?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
    accountType?: AccountType | null,
    onboarded?: boolean | null,
    program?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
    accountType?: AccountType | null,
    onboarded?: boolean | null,
    program?:  {
      __typename: "ModelUserProgramConnection",
      items:  Array< {
        __typename: "UserProgram",
        id: string,
        programId: string,
        userId: string,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateUserProgramSubscriptionVariables = {
  filter?: ModelSubscriptionUserProgramFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserProgramSubscription = {
  onCreateUserProgram?:  {
    __typename: "UserProgram",
    id: string,
    programId: string,
    userId: string,
    program:  {
      __typename: "Program",
      id: string,
      name?: string | null,
      stages?:  {
        __typename: "ModelStageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      accountType?: AccountType | null,
      onboarded?: boolean | null,
      program?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserProgramSubscriptionVariables = {
  filter?: ModelSubscriptionUserProgramFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserProgramSubscription = {
  onUpdateUserProgram?:  {
    __typename: "UserProgram",
    id: string,
    programId: string,
    userId: string,
    program:  {
      __typename: "Program",
      id: string,
      name?: string | null,
      stages?:  {
        __typename: "ModelStageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      accountType?: AccountType | null,
      onboarded?: boolean | null,
      program?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserProgramSubscriptionVariables = {
  filter?: ModelSubscriptionUserProgramFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserProgramSubscription = {
  onDeleteUserProgram?:  {
    __typename: "UserProgram",
    id: string,
    programId: string,
    userId: string,
    program:  {
      __typename: "Program",
      id: string,
      name?: string | null,
      stages?:  {
        __typename: "ModelStageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phone?: string | null,
      accountType?: AccountType | null,
      onboarded?: boolean | null,
      program?:  {
        __typename: "ModelUserProgramConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
