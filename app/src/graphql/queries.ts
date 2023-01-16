/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProgram = /* GraphQL */ `
  query GetProgram($id: ID!) {
    getProgram(id: $id) {
      id
      userID
      facilitatorID
      cohortID
      sessions {
        items {
          id
          programId
          sessionId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      programTemplate {
        id
        sessionTemplates {
          nextToken
          startedAt
        }
        name
        description
        version
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      enrollmentDate
      completionDate
      complete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      programProgramTemplateId
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
        userID
        facilitatorID
        cohortID
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
        }
        enrollmentDate
        completionDate
        complete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        programProgramTemplateId
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
        userID
        facilitatorID
        cohortID
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
        }
        enrollmentDate
        completionDate
        complete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        programProgramTemplateId
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
        userID
        facilitatorID
        cohortID
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
        }
        enrollmentDate
        completionDate
        complete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        programProgramTemplateId
      }
      nextToken
      startedAt
    }
  }
`;
export const programsByFacilitatorID = /* GraphQL */ `
  query ProgramsByFacilitatorID(
    $facilitatorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    programsByFacilitatorID(
      facilitatorID: $facilitatorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        facilitatorID
        cohortID
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
        }
        enrollmentDate
        completionDate
        complete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        programProgramTemplateId
      }
      nextToken
      startedAt
    }
  }
`;
export const programsByCohortID = /* GraphQL */ `
  query ProgramsByCohortID(
    $cohortID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    programsByCohortID(
      cohortID: $cohortID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        facilitatorID
        cohortID
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
        }
        enrollmentDate
        completionDate
        complete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        programProgramTemplateId
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
      program {
        items {
          id
          programId
          sessionId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      sessionTemplate {
        id
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
        }
        name
        description
        length
        precedence
        type
        group
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        programTemplateSessionTemplatesId
      }
      start
      end
      booked
      complete
      meetingUUID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sessionSessionTemplateId
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
        program {
          nextToken
          startedAt
        }
        sessionTemplate {
          id
          name
          description
          length
          precedence
          type
          group
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programTemplateSessionTemplatesId
        }
        start
        end
        booked
        complete
        meetingUUID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sessionSessionTemplateId
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
        program {
          nextToken
          startedAt
        }
        sessionTemplate {
          id
          name
          description
          length
          precedence
          type
          group
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programTemplateSessionTemplatesId
        }
        start
        end
        booked
        complete
        meetingUUID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sessionSessionTemplateId
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
      programTemplate {
        id
        sessionTemplates {
          nextToken
          startedAt
        }
        name
        description
        version
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      name
      description
      length
      precedence
      type
      group
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      programTemplateSessionTemplatesId
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
        }
        name
        description
        length
        precedence
        type
        group
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        programTemplateSessionTemplatesId
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
        }
        name
        description
        length
        precedence
        type
        group
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        programTemplateSessionTemplatesId
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
      sessionTemplates {
        items {
          id
          name
          description
          length
          precedence
          type
          group
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programTemplateSessionTemplatesId
        }
        nextToken
        startedAt
      }
      name
      description
      version
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        sessionTemplates {
          nextToken
          startedAt
        }
        name
        description
        version
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        sessionTemplates {
          nextToken
          startedAt
        }
        name
        description
        version
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      sub
      programs {
        items {
          id
          userID
          facilitatorID
          cohortID
          enrollmentDate
          completionDate
          complete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programProgramTemplateId
        }
        nextToken
        startedAt
      }
      firstName
      lastName
      email
      phone
      onboarded
      screened
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
        sub
        programs {
          nextToken
          startedAt
        }
        firstName
        lastName
        email
        phone
        onboarded
        screened
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
        sub
        programs {
          nextToken
          startedAt
        }
        firstName
        lastName
        email
        phone
        onboarded
        screened
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
export const getFacilitator = /* GraphQL */ `
  query GetFacilitator($id: ID!) {
    getFacilitator(id: $id) {
      id
      sub
      programs {
        items {
          id
          userID
          facilitatorID
          cohortID
          enrollmentDate
          completionDate
          complete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programProgramTemplateId
        }
        nextToken
        startedAt
      }
      firstName
      lastName
      email
      phone
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listFacilitators = /* GraphQL */ `
  query ListFacilitators(
    $filter: ModelFacilitatorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacilitators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        programs {
          nextToken
          startedAt
        }
        firstName
        lastName
        email
        phone
        description
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
export const syncFacilitators = /* GraphQL */ `
  query SyncFacilitators(
    $filter: ModelFacilitatorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFacilitators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sub
        programs {
          nextToken
          startedAt
        }
        firstName
        lastName
        email
        phone
        description
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
export const getCohort = /* GraphQL */ `
  query GetCohort($id: ID!) {
    getCohort(id: $id) {
      id
      programs {
        items {
          id
          userID
          facilitatorID
          cohortID
          enrollmentDate
          completionDate
          complete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programProgramTemplateId
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
export const listCohorts = /* GraphQL */ `
  query ListCohorts(
    $filter: ModelCohortFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCohorts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
export const syncCohorts = /* GraphQL */ `
  query SyncCohorts(
    $filter: ModelCohortFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCohorts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
export const getProgramSessions = /* GraphQL */ `
  query GetProgramSessions($id: ID!) {
    getProgramSessions(id: $id) {
      id
      programId
      sessionId
      program {
        id
        userID
        facilitatorID
        cohortID
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
        }
        enrollmentDate
        completionDate
        complete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        programProgramTemplateId
      }
      session {
        id
        program {
          nextToken
          startedAt
        }
        sessionTemplate {
          id
          name
          description
          length
          precedence
          type
          group
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programTemplateSessionTemplatesId
        }
        start
        end
        booked
        complete
        meetingUUID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sessionSessionTemplateId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProgramSessions = /* GraphQL */ `
  query ListProgramSessions(
    $filter: ModelProgramSessionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgramSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        programId
        sessionId
        program {
          id
          userID
          facilitatorID
          cohortID
          enrollmentDate
          completionDate
          complete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programProgramTemplateId
        }
        session {
          id
          start
          end
          booked
          complete
          meetingUUID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sessionSessionTemplateId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProgramSessions = /* GraphQL */ `
  query SyncProgramSessions(
    $filter: ModelProgramSessionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProgramSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        programId
        sessionId
        program {
          id
          userID
          facilitatorID
          cohortID
          enrollmentDate
          completionDate
          complete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programProgramTemplateId
        }
        session {
          id
          start
          end
          booked
          complete
          meetingUUID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sessionSessionTemplateId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const programSessionsByProgramId = /* GraphQL */ `
  query ProgramSessionsByProgramId(
    $programId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProgramSessionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    programSessionsByProgramId(
      programId: $programId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        programId
        sessionId
        program {
          id
          userID
          facilitatorID
          cohortID
          enrollmentDate
          completionDate
          complete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programProgramTemplateId
        }
        session {
          id
          start
          end
          booked
          complete
          meetingUUID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sessionSessionTemplateId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const programSessionsBySessionId = /* GraphQL */ `
  query ProgramSessionsBySessionId(
    $sessionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProgramSessionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    programSessionsBySessionId(
      sessionId: $sessionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        programId
        sessionId
        program {
          id
          userID
          facilitatorID
          cohortID
          enrollmentDate
          completionDate
          complete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          programProgramTemplateId
        }
        session {
          id
          start
          end
          booked
          complete
          meetingUUID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sessionSessionTemplateId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
