/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProgram = /* GraphQL */ `
  query GetProgram($id: ID!) {
    getProgram(id: $id) {
      id
      enrollmentDate
      completionDate
      complete
      userID
      sessions {
        items {
          id
          programID
          datetime
          booked
          booking
          complete
          meetingUUID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sessionSessionTemplateId
          owner
        }
        nextToken
        startedAt
      }
      programTemplate {
        id
        name
        description
        version
        sessionTemplates {
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
      programProgramTemplateId
      owner
    }
  }
`;
export const listPrograms = /* GraphQL */ `
  query ListPrograms(
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        enrollmentDate
        completionDate
        complete
        userID
        sessions {
          nextToken
          startedAt
        }
        programTemplate {
          id
          name
          description
          version
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
        programProgramTemplateId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrograms = /* GraphQL */ `
  query SyncPrograms(
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrograms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        enrollmentDate
        completionDate
        complete
        userID
        sessions {
          nextToken
          startedAt
        }
        programTemplate {
          id
          name
          description
          version
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
        programProgramTemplateId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const programsByUserID = /* GraphQL */ `
  query ProgramsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    programsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        enrollmentDate
        completionDate
        complete
        userID
        sessions {
          nextToken
          startedAt
        }
        programTemplate {
          id
          name
          description
          version
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
        programProgramTemplateId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
      id
      programID
      datetime
      booked
      booking
      complete
      meetingUUID
      sessionTemplate {
        id
        name
        description
        length
        type
        programTemplate {
          id
          name
          description
          version
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
        programTemplateSessionTemplatesId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sessionSessionTemplateId
      owner
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        programID
        datetime
        booked
        booking
        complete
        meetingUUID
        sessionTemplate {
          id
          name
          description
          length
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programTemplateSessionTemplatesId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sessionSessionTemplateId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSessions = /* GraphQL */ `
  query SyncSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        programID
        datetime
        booked
        booking
        complete
        meetingUUID
        sessionTemplate {
          id
          name
          description
          length
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programTemplateSessionTemplatesId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sessionSessionTemplateId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const sessionsByProgramID = /* GraphQL */ `
  query SessionsByProgramID(
    $programID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sessionsByProgramID(
      programID: $programID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        programID
        datetime
        booked
        booking
        complete
        meetingUUID
        sessionTemplate {
          id
          name
          description
          length
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programTemplateSessionTemplatesId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sessionSessionTemplateId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getSessionTemplate = /* GraphQL */ `
  query GetSessionTemplate($id: ID!) {
    getSessionTemplate(id: $id) {
      id
      name
      description
      length
      type
      programTemplate {
        id
        name
        description
        version
        sessionTemplates {
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
      programTemplateSessionTemplatesId
      owner
    }
  }
`;
export const listSessionTemplates = /* GraphQL */ `
  query ListSessionTemplates(
    $filter: ModelSessionTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessionTemplates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        length
        type
        programTemplate {
          id
          name
          description
          version
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
        programTemplateSessionTemplatesId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSessionTemplates = /* GraphQL */ `
  query SyncSessionTemplates(
    $filter: ModelSessionTemplateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSessionTemplates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        length
        type
        programTemplate {
          id
          name
          description
          version
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
        programTemplateSessionTemplatesId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getProgramTemplate = /* GraphQL */ `
  query GetProgramTemplate($id: ID!) {
    getProgramTemplate(id: $id) {
      id
      name
      description
      version
      sessionTemplates {
        items {
          id
          name
          description
          length
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programTemplateSessionTemplatesId
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
export const listProgramTemplates = /* GraphQL */ `
  query ListProgramTemplates(
    $filter: ModelProgramTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgramTemplates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        version
        sessionTemplates {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProgramTemplates = /* GraphQL */ `
  query SyncProgramTemplates(
    $filter: ModelProgramTemplateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProgramTemplates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        version
        sessionTemplates {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      phone
      onboarded
      screened
      programs {
        items {
          id
          enrollmentDate
          completionDate
          complete
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programProgramTemplateId
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        phone
        onboarded
        screened
        programs {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        email
        phone
        onboarded
        screened
        programs {
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
      nextToken
      startedAt
    }
  }
`;
