/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram(
    $filter: ModelSubscriptionProgramFilterInput
    $owner: String
  ) {
    onCreateProgram(filter: $filter, owner: $owner) {
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
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram(
    $filter: ModelSubscriptionProgramFilterInput
    $owner: String
  ) {
    onUpdateProgram(filter: $filter, owner: $owner) {
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
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram(
    $filter: ModelSubscriptionProgramFilterInput
    $owner: String
  ) {
    onDeleteProgram(filter: $filter, owner: $owner) {
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onCreateSession(filter: $filter, owner: $owner) {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onUpdateSession(filter: $filter, owner: $owner) {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onDeleteSession(filter: $filter, owner: $owner) {
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
export const onCreateSessionTemplate = /* GraphQL */ `
  subscription OnCreateSessionTemplate(
    $filter: ModelSubscriptionSessionTemplateFilterInput
    $owner: String
  ) {
    onCreateSessionTemplate(filter: $filter, owner: $owner) {
      id
      name
      description
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
export const onUpdateSessionTemplate = /* GraphQL */ `
  subscription OnUpdateSessionTemplate(
    $filter: ModelSubscriptionSessionTemplateFilterInput
    $owner: String
  ) {
    onUpdateSessionTemplate(filter: $filter, owner: $owner) {
      id
      name
      description
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
export const onDeleteSessionTemplate = /* GraphQL */ `
  subscription OnDeleteSessionTemplate(
    $filter: ModelSubscriptionSessionTemplateFilterInput
    $owner: String
  ) {
    onDeleteSessionTemplate(filter: $filter, owner: $owner) {
      id
      name
      description
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
export const onCreateProgramTemplate = /* GraphQL */ `
  subscription OnCreateProgramTemplate(
    $filter: ModelSubscriptionProgramTemplateFilterInput
    $owner: String
  ) {
    onCreateProgramTemplate(filter: $filter, owner: $owner) {
      id
      name
      description
      version
      sessionTemplates {
        items {
          id
          name
          description
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
export const onUpdateProgramTemplate = /* GraphQL */ `
  subscription OnUpdateProgramTemplate(
    $filter: ModelSubscriptionProgramTemplateFilterInput
    $owner: String
  ) {
    onUpdateProgramTemplate(filter: $filter, owner: $owner) {
      id
      name
      description
      version
      sessionTemplates {
        items {
          id
          name
          description
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
export const onDeleteProgramTemplate = /* GraphQL */ `
  subscription OnDeleteProgramTemplate(
    $filter: ModelSubscriptionProgramTemplateFilterInput
    $owner: String
  ) {
    onDeleteProgramTemplate(filter: $filter, owner: $owner) {
      id
      name
      description
      version
      sessionTemplates {
        items {
          id
          name
          description
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
