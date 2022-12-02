/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProgram = /* GraphQL */ `
  mutation CreateProgram(
    $input: CreateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    createProgram(input: $input, condition: $condition) {
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
          owner
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
        owner
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
      owner
    }
  }
`;
export const updateProgram = /* GraphQL */ `
  mutation UpdateProgram(
    $input: UpdateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    updateProgram(input: $input, condition: $condition) {
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
          owner
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
        owner
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
      owner
    }
  }
`;
export const deleteProgram = /* GraphQL */ `
  mutation DeleteProgram(
    $input: DeleteProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    deleteProgram(input: $input, condition: $condition) {
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
          owner
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
        owner
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
      owner
    }
  }
`;
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
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
          owner
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
        owner
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
          owner
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
        owner
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
      owner
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
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
          owner
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
        owner
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
          owner
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
        owner
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
      owner
    }
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
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
          owner
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
        owner
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
          owner
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
        owner
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
      owner
    }
  }
`;
export const createSessionTemplate = /* GraphQL */ `
  mutation CreateSessionTemplate(
    $input: CreateSessionTemplateInput!
    $condition: ModelSessionTemplateConditionInput
  ) {
    createSessionTemplate(input: $input, condition: $condition) {
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
        owner
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
      owner
    }
  }
`;
export const updateSessionTemplate = /* GraphQL */ `
  mutation UpdateSessionTemplate(
    $input: UpdateSessionTemplateInput!
    $condition: ModelSessionTemplateConditionInput
  ) {
    updateSessionTemplate(input: $input, condition: $condition) {
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
        owner
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
      owner
    }
  }
`;
export const deleteSessionTemplate = /* GraphQL */ `
  mutation DeleteSessionTemplate(
    $input: DeleteSessionTemplateInput!
    $condition: ModelSessionTemplateConditionInput
  ) {
    deleteSessionTemplate(input: $input, condition: $condition) {
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
        owner
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
      owner
    }
  }
`;
export const createProgramTemplate = /* GraphQL */ `
  mutation CreateProgramTemplate(
    $input: CreateProgramTemplateInput!
    $condition: ModelProgramTemplateConditionInput
  ) {
    createProgramTemplate(input: $input, condition: $condition) {
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
          owner
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
      owner
    }
  }
`;
export const updateProgramTemplate = /* GraphQL */ `
  mutation UpdateProgramTemplate(
    $input: UpdateProgramTemplateInput!
    $condition: ModelProgramTemplateConditionInput
  ) {
    updateProgramTemplate(input: $input, condition: $condition) {
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
          owner
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
      owner
    }
  }
`;
export const deleteProgramTemplate = /* GraphQL */ `
  mutation DeleteProgramTemplate(
    $input: DeleteProgramTemplateInput!
    $condition: ModelProgramTemplateConditionInput
  ) {
    deleteProgramTemplate(input: $input, condition: $condition) {
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
          owner
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
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
          owner
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
          owner
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
          owner
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
