import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum SessionType {
  ONE = "ONE",
  GROUP = "GROUP"
}

export enum SessionGroup {
  SCREENING = "SCREENING",
  PREPARATION = "PREPARATION",
  TRIP = "TRIP",
  INTEGRATION = "INTEGRATION"
}

export enum AccountType {
  SUPER_ADMIN = "SUPER_ADMIN",
  USER = "USER",
  SUPERVISOR = "SUPERVISOR",
  THERAPIST = "THERAPIST"
}



type EagerProgram = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Program, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly facilitatorID: string;
  readonly cohortID?: string | null;
  readonly sessions?: (ProgramSessions | null)[] | null;
  readonly programTemplate: ProgramTemplate;
  readonly enrollmentDate: string;
  readonly completionDate?: string | null;
  readonly complete: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly programProgramTemplateId: string;
}

type LazyProgram = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Program, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly facilitatorID: string;
  readonly cohortID?: string | null;
  readonly sessions: AsyncCollection<ProgramSessions>;
  readonly programTemplate: AsyncItem<ProgramTemplate>;
  readonly enrollmentDate: string;
  readonly completionDate?: string | null;
  readonly complete: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly programProgramTemplateId: string;
}

export declare type Program = LazyLoading extends LazyLoadingDisabled ? EagerProgram : LazyProgram

export declare const Program: (new (init: ModelInit<Program>) => Program) & {
  copyOf(source: Program, mutator: (draft: MutableModel<Program>) => MutableModel<Program> | void): Program;
}

type EagerSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly program?: (ProgramSessions | null)[] | null;
  readonly sessionTemplate: SessionTemplate;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly booked: boolean;
  readonly complete: boolean;
  readonly meetingUUID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sessionSessionTemplateId: string;
}

type LazySession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly program: AsyncCollection<ProgramSessions>;
  readonly sessionTemplate: AsyncItem<SessionTemplate>;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly booked: boolean;
  readonly complete: boolean;
  readonly meetingUUID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sessionSessionTemplateId: string;
}

export declare type Session = LazyLoading extends LazyLoadingDisabled ? EagerSession : LazySession

export declare const Session: (new (init: ModelInit<Session>) => Session) & {
  copyOf(source: Session, mutator: (draft: MutableModel<Session>) => MutableModel<Session> | void): Session;
}

type EagerSessionTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SessionTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programTemplate: ProgramTemplate;
  readonly name: string;
  readonly description: string;
  readonly length: string;
  readonly precedence: number;
  readonly type: SessionType | keyof typeof SessionType;
  readonly group: SessionGroup | keyof typeof SessionGroup;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly programTemplateSessionTemplatesId: string;
}

type LazySessionTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SessionTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programTemplate: AsyncItem<ProgramTemplate>;
  readonly name: string;
  readonly description: string;
  readonly length: string;
  readonly precedence: number;
  readonly type: SessionType | keyof typeof SessionType;
  readonly group: SessionGroup | keyof typeof SessionGroup;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly programTemplateSessionTemplatesId: string;
}

export declare type SessionTemplate = LazyLoading extends LazyLoadingDisabled ? EagerSessionTemplate : LazySessionTemplate

export declare const SessionTemplate: (new (init: ModelInit<SessionTemplate>) => SessionTemplate) & {
  copyOf(source: SessionTemplate, mutator: (draft: MutableModel<SessionTemplate>) => MutableModel<SessionTemplate> | void): SessionTemplate;
}

type EagerProgramTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgramTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sessionTemplates?: (SessionTemplate | null)[] | null;
  readonly name: string;
  readonly description: string;
  readonly version: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProgramTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgramTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sessionTemplates: AsyncCollection<SessionTemplate>;
  readonly name: string;
  readonly description: string;
  readonly version: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProgramTemplate = LazyLoading extends LazyLoadingDisabled ? EagerProgramTemplate : LazyProgramTemplate

export declare const ProgramTemplate: (new (init: ModelInit<ProgramTemplate>) => ProgramTemplate) & {
  copyOf(source: ProgramTemplate, mutator: (draft: MutableModel<ProgramTemplate>) => MutableModel<ProgramTemplate> | void): ProgramTemplate;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly programs?: (Program | null)[] | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly onboarded?: boolean | null;
  readonly screened?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly programs: AsyncCollection<Program>;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly onboarded?: boolean | null;
  readonly screened?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerFacilitator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Facilitator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly programs?: (Program | null)[] | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFacilitator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Facilitator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly programs: AsyncCollection<Program>;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Facilitator = LazyLoading extends LazyLoadingDisabled ? EagerFacilitator : LazyFacilitator

export declare const Facilitator: (new (init: ModelInit<Facilitator>) => Facilitator) & {
  copyOf(source: Facilitator, mutator: (draft: MutableModel<Facilitator>) => MutableModel<Facilitator> | void): Facilitator;
}

type EagerCohort = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cohort, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programs?: (Program | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCohort = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cohort, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programs: AsyncCollection<Program>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cohort = LazyLoading extends LazyLoadingDisabled ? EagerCohort : LazyCohort

export declare const Cohort: (new (init: ModelInit<Cohort>) => Cohort) & {
  copyOf(source: Cohort, mutator: (draft: MutableModel<Cohort>) => MutableModel<Cohort> | void): Cohort;
}

type EagerProgramSessions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgramSessions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programId?: string | null;
  readonly sessionId?: string | null;
  readonly program: Program;
  readonly session: Session;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProgramSessions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgramSessions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programId?: string | null;
  readonly sessionId?: string | null;
  readonly program: AsyncItem<Program>;
  readonly session: AsyncItem<Session>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProgramSessions = LazyLoading extends LazyLoadingDisabled ? EagerProgramSessions : LazyProgramSessions

export declare const ProgramSessions: (new (init: ModelInit<ProgramSessions>) => ProgramSessions) & {
  copyOf(source: ProgramSessions, mutator: (draft: MutableModel<ProgramSessions>) => MutableModel<ProgramSessions> | void): ProgramSessions;
}