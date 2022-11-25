/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStage = /* GraphQL */ `
  subscription OnCreateStage(
    $filter: ModelSubscriptionStageFilterInput
    $owner: String
  ) {
    onCreateStage(filter: $filter, owner: $owner) {
      id
      programID
      sessions {
        items {
          id
          stageID
          name
          description
          dateTime
          length
          scheduled
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateStage = /* GraphQL */ `
  subscription OnUpdateStage(
    $filter: ModelSubscriptionStageFilterInput
    $owner: String
  ) {
    onUpdateStage(filter: $filter, owner: $owner) {
      id
      programID
      sessions {
        items {
          id
          stageID
          name
          description
          dateTime
          length
          scheduled
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteStage = /* GraphQL */ `
  subscription OnDeleteStage(
    $filter: ModelSubscriptionStageFilterInput
    $owner: String
  ) {
    onDeleteStage(filter: $filter, owner: $owner) {
      id
      programID
      sessions {
        items {
          id
          stageID
          name
          description
          dateTime
          length
          scheduled
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram(
    $filter: ModelSubscriptionProgramFilterInput
    $owner: String
  ) {
    onCreateProgram(filter: $filter, owner: $owner) {
      id
      name
      stages {
        items {
          id
          programID
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          programId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram(
    $filter: ModelSubscriptionProgramFilterInput
    $owner: String
  ) {
    onUpdateProgram(filter: $filter, owner: $owner) {
      id
      name
      stages {
        items {
          id
          programID
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          programId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram(
    $filter: ModelSubscriptionProgramFilterInput
    $owner: String
  ) {
    onDeleteProgram(filter: $filter, owner: $owner) {
      id
      name
      stages {
        items {
          id
          programID
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          programId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onCreateSession(filter: $filter, owner: $owner) {
      id
      stageID
      name
      description
      dateTime
      length
      scheduled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onUpdateSession(filter: $filter, owner: $owner) {
      id
      stageID
      name
      description
      dateTime
      length
      scheduled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onDeleteSession(filter: $filter, owner: $owner) {
      id
      stageID
      name
      description
      dateTime
      length
      scheduled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      firstName
      lastName
      email
      phone
      accountType
      onboarded
      program {
        items {
          id
          programId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      firstName
      lastName
      email
      phone
      accountType
      onboarded
      program {
        items {
          id
          programId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      firstName
      lastName
      email
      phone
      accountType
      onboarded
      program {
        items {
          id
          programId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateUserProgram = /* GraphQL */ `
  subscription OnCreateUserProgram(
    $filter: ModelSubscriptionUserProgramFilterInput
    $owner: String
  ) {
    onCreateUserProgram(filter: $filter, owner: $owner) {
      id
      programId
      userId
      program {
        id
        name
        stages {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      user {
        id
        firstName
        lastName
        email
        phone
        accountType
        onboarded
        program {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUserProgram = /* GraphQL */ `
  subscription OnUpdateUserProgram(
    $filter: ModelSubscriptionUserProgramFilterInput
    $owner: String
  ) {
    onUpdateUserProgram(filter: $filter, owner: $owner) {
      id
      programId
      userId
      program {
        id
        name
        stages {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      user {
        id
        firstName
        lastName
        email
        phone
        accountType
        onboarded
        program {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUserProgram = /* GraphQL */ `
  subscription OnDeleteUserProgram(
    $filter: ModelSubscriptionUserProgramFilterInput
    $owner: String
  ) {
    onDeleteUserProgram(filter: $filter, owner: $owner) {
      id
      programId
      userId
      program {
        id
        name
        stages {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      user {
        id
        firstName
        lastName
        email
        phone
        accountType
        onboarded
        program {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
