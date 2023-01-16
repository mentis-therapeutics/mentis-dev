/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram($filter: ModelSubscriptionProgramFilterInput) {
    onCreateProgram(filter: $filter) {
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
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram($filter: ModelSubscriptionProgramFilterInput) {
    onUpdateProgram(filter: $filter) {
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
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram($filter: ModelSubscriptionProgramFilterInput) {
    onDeleteProgram(filter: $filter) {
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession($filter: ModelSubscriptionSessionFilterInput) {
    onCreateSession(filter: $filter) {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession($filter: ModelSubscriptionSessionFilterInput) {
    onUpdateSession(filter: $filter) {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession($filter: ModelSubscriptionSessionFilterInput) {
    onDeleteSession(filter: $filter) {
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
export const onCreateSessionTemplate = /* GraphQL */ `
  subscription OnCreateSessionTemplate(
    $filter: ModelSubscriptionSessionTemplateFilterInput
  ) {
    onCreateSessionTemplate(filter: $filter) {
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
export const onUpdateSessionTemplate = /* GraphQL */ `
  subscription OnUpdateSessionTemplate(
    $filter: ModelSubscriptionSessionTemplateFilterInput
  ) {
    onUpdateSessionTemplate(filter: $filter) {
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
export const onDeleteSessionTemplate = /* GraphQL */ `
  subscription OnDeleteSessionTemplate(
    $filter: ModelSubscriptionSessionTemplateFilterInput
  ) {
    onDeleteSessionTemplate(filter: $filter) {
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
export const onCreateProgramTemplate = /* GraphQL */ `
  subscription OnCreateProgramTemplate(
    $filter: ModelSubscriptionProgramTemplateFilterInput
  ) {
    onCreateProgramTemplate(filter: $filter) {
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
export const onUpdateProgramTemplate = /* GraphQL */ `
  subscription OnUpdateProgramTemplate(
    $filter: ModelSubscriptionProgramTemplateFilterInput
  ) {
    onUpdateProgramTemplate(filter: $filter) {
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
export const onDeleteProgramTemplate = /* GraphQL */ `
  subscription OnDeleteProgramTemplate(
    $filter: ModelSubscriptionProgramTemplateFilterInput
  ) {
    onDeleteProgramTemplate(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateFacilitator = /* GraphQL */ `
  subscription OnCreateFacilitator(
    $filter: ModelSubscriptionFacilitatorFilterInput
    $owner: String
  ) {
    onCreateFacilitator(filter: $filter, owner: $owner) {
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
export const onUpdateFacilitator = /* GraphQL */ `
  subscription OnUpdateFacilitator(
    $filter: ModelSubscriptionFacilitatorFilterInput
    $owner: String
  ) {
    onUpdateFacilitator(filter: $filter, owner: $owner) {
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
export const onDeleteFacilitator = /* GraphQL */ `
  subscription OnDeleteFacilitator(
    $filter: ModelSubscriptionFacilitatorFilterInput
    $owner: String
  ) {
    onDeleteFacilitator(filter: $filter, owner: $owner) {
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
export const onCreateCohort = /* GraphQL */ `
  subscription OnCreateCohort(
    $filter: ModelSubscriptionCohortFilterInput
    $owner: String
  ) {
    onCreateCohort(filter: $filter, owner: $owner) {
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
export const onUpdateCohort = /* GraphQL */ `
  subscription OnUpdateCohort(
    $filter: ModelSubscriptionCohortFilterInput
    $owner: String
  ) {
    onUpdateCohort(filter: $filter, owner: $owner) {
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
export const onDeleteCohort = /* GraphQL */ `
  subscription OnDeleteCohort(
    $filter: ModelSubscriptionCohortFilterInput
    $owner: String
  ) {
    onDeleteCohort(filter: $filter, owner: $owner) {
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
export const onCreateProgramSessions = /* GraphQL */ `
  subscription OnCreateProgramSessions(
    $filter: ModelSubscriptionProgramSessionsFilterInput
  ) {
    onCreateProgramSessions(filter: $filter) {
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
export const onUpdateProgramSessions = /* GraphQL */ `
  subscription OnUpdateProgramSessions(
    $filter: ModelSubscriptionProgramSessionsFilterInput
  ) {
    onUpdateProgramSessions(filter: $filter) {
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
export const onDeleteProgramSessions = /* GraphQL */ `
  subscription OnDeleteProgramSessions(
    $filter: ModelSubscriptionProgramSessionsFilterInput
  ) {
    onDeleteProgramSessions(filter: $filter) {
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
