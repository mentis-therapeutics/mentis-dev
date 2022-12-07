/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram($filter: ModelSubscriptionProgramFilterInput) {
    onCreateProgram(filter: $filter) {
      id
      userID
      sessions {
        items {
          id
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
          programSessionsId
          sessionSessionTemplateId
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
      sessions {
        items {
          id
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
          programSessionsId
          sessionSessionTemplateId
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
      sessions {
        items {
          id
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
          programSessionsId
          sessionSessionTemplateId
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
        id
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        programTemplateSessionTemplatesId
      }
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
      programSessionsId
      sessionSessionTemplateId
    }
  }
`;
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession($filter: ModelSubscriptionSessionFilterInput) {
    onUpdateSession(filter: $filter) {
      id
      program {
        id
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        programTemplateSessionTemplatesId
      }
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
      programSessionsId
      sessionSessionTemplateId
    }
  }
`;
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession($filter: ModelSubscriptionSessionFilterInput) {
    onDeleteSession(filter: $filter) {
      id
      program {
        id
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        programTemplateSessionTemplatesId
      }
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
      programSessionsId
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
