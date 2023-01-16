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
export const updateProgram = /* GraphQL */ `
  mutation UpdateProgram(
    $input: UpdateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    updateProgram(input: $input, condition: $condition) {
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
export const deleteProgram = /* GraphQL */ `
  mutation DeleteProgram(
    $input: DeleteProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    deleteProgram(input: $input, condition: $condition) {
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
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
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
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
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
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
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
export const createFacilitator = /* GraphQL */ `
  mutation CreateFacilitator(
    $input: CreateFacilitatorInput!
    $condition: ModelFacilitatorConditionInput
  ) {
    createFacilitator(input: $input, condition: $condition) {
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
export const updateFacilitator = /* GraphQL */ `
  mutation UpdateFacilitator(
    $input: UpdateFacilitatorInput!
    $condition: ModelFacilitatorConditionInput
  ) {
    updateFacilitator(input: $input, condition: $condition) {
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
export const deleteFacilitator = /* GraphQL */ `
  mutation DeleteFacilitator(
    $input: DeleteFacilitatorInput!
    $condition: ModelFacilitatorConditionInput
  ) {
    deleteFacilitator(input: $input, condition: $condition) {
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
export const createCohort = /* GraphQL */ `
  mutation CreateCohort(
    $input: CreateCohortInput!
    $condition: ModelCohortConditionInput
  ) {
    createCohort(input: $input, condition: $condition) {
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
export const updateCohort = /* GraphQL */ `
  mutation UpdateCohort(
    $input: UpdateCohortInput!
    $condition: ModelCohortConditionInput
  ) {
    updateCohort(input: $input, condition: $condition) {
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
export const deleteCohort = /* GraphQL */ `
  mutation DeleteCohort(
    $input: DeleteCohortInput!
    $condition: ModelCohortConditionInput
  ) {
    deleteCohort(input: $input, condition: $condition) {
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
export const createProgramSessions = /* GraphQL */ `
  mutation CreateProgramSessions(
    $input: CreateProgramSessionsInput!
    $condition: ModelProgramSessionsConditionInput
  ) {
    createProgramSessions(input: $input, condition: $condition) {
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
export const updateProgramSessions = /* GraphQL */ `
  mutation UpdateProgramSessions(
    $input: UpdateProgramSessionsInput!
    $condition: ModelProgramSessionsConditionInput
  ) {
    updateProgramSessions(input: $input, condition: $condition) {
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
export const deleteProgramSessions = /* GraphQL */ `
  mutation DeleteProgramSessions(
    $input: DeleteProgramSessionsInput!
    $condition: ModelProgramSessionsConditionInput
  ) {
    deleteProgramSessions(input: $input, condition: $condition) {
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
