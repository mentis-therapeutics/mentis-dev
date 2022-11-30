import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum SessionType {
  ONE = "ONE",
  GROUP = "GROUP"
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
  readonly enrollmentDate?: string | null;
  readonly completionDate?: string | null;
  readonly complete?: boolean | null;
  readonly userID: string;
  readonly sessions?: (Session | null)[] | null;
  readonly programTemplate?: ProgramTemplate | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly programProgramTemplateId?: string | null;
}

type LazyProgram = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Program, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly enrollmentDate?: string | null;
  readonly completionDate?: string | null;
  readonly complete?: boolean | null;
  readonly userID: string;
  readonly sessions: AsyncCollection<Session>;
  readonly programTemplate: AsyncItem<ProgramTemplate | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly programProgramTemplateId?: string | null;
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
  readonly programID: string;
  readonly datetime?: string | null;
  readonly booked?: boolean | null;
  readonly booking?: boolean | null;
  readonly complete?: boolean | null;
  readonly meetingUUID?: string | null;
  readonly sessionTemplate?: SessionTemplate | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sessionSessionTemplateId?: string | null;
}

type LazySession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programID: string;
  readonly datetime?: string | null;
  readonly booked?: boolean | null;
  readonly booking?: boolean | null;
  readonly complete?: boolean | null;
  readonly meetingUUID?: string | null;
  readonly sessionTemplate: AsyncItem<SessionTemplate | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sessionSessionTemplateId?: string | null;
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
  readonly name?: string | null;
  readonly description?: string | null;
  readonly length?: string | null;
  readonly type?: SessionType | keyof typeof SessionType | null;
  readonly programTemplate?: ProgramTemplate | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly programTemplateSessionTemplatesId?: string | null;
}

type LazySessionTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SessionTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly length?: string | null;
  readonly type?: SessionType | keyof typeof SessionType | null;
  readonly programTemplate: AsyncItem<ProgramTemplate | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly programTemplateSessionTemplatesId?: string | null;
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
  readonly name?: string | null;
  readonly description?: string | null;
  readonly version?: string | null;
  readonly sessionTemplates?: (SessionTemplate | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProgramTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgramTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly version?: string | null;
  readonly sessionTemplates: AsyncCollection<SessionTemplate>;
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
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly onboarded?: boolean | null;
  readonly screened?: boolean | null;
  readonly programs?: (Program | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly onboarded?: boolean | null;
  readonly screened?: boolean | null;
  readonly programs: AsyncCollection<Program>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}