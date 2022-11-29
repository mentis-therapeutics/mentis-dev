import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum AccountType {
  SUPER_ADMIN = "SUPER_ADMIN",
  USER = "USER",
  SUPERVISOR = "SUPERVISOR",
  THERAPIST = "THERAPIST"
}



type EagerUserProgram = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProgram, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programID: string;
  readonly completionDate?: string | null;
  readonly completed?: boolean | null;
  readonly userSessions?: (UserSession | null)[] | null;
  readonly enrolmentDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProgram = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProgram, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programID: string;
  readonly completionDate?: string | null;
  readonly completed?: boolean | null;
  readonly userSessions: AsyncCollection<UserSession>;
  readonly enrolmentDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProgram = LazyLoading extends LazyLoadingDisabled ? EagerUserProgram : LazyUserProgram

export declare const UserProgram: (new (init: ModelInit<UserProgram>) => UserProgram) & {
  copyOf(source: UserProgram, mutator: (draft: MutableModel<UserProgram>) => MutableModel<UserProgram> | void): UserProgram;
}

type EagerUserSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSession, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userprogramID: string;
  readonly sessionID: string;
  readonly userID: string;
  readonly booked?: boolean | null;
  readonly complete?: boolean | null;
  readonly datetime?: string | null;
  readonly meetingURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSession, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userprogramID: string;
  readonly sessionID: string;
  readonly userID: string;
  readonly booked?: boolean | null;
  readonly complete?: boolean | null;
  readonly datetime?: string | null;
  readonly meetingURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserSession = LazyLoading extends LazyLoadingDisabled ? EagerUserSession : LazyUserSession

export declare const UserSession: (new (init: ModelInit<UserSession>) => UserSession) & {
  copyOf(source: UserSession, mutator: (draft: MutableModel<UserSession>) => MutableModel<UserSession> | void): UserSession;
}

type EagerStage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly session?: (Session | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly session: AsyncCollection<Session>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Stage = LazyLoading extends LazyLoadingDisabled ? EagerStage : LazyStage

export declare const Stage: (new (init: ModelInit<Stage>) => Stage) & {
  copyOf(source: Stage, mutator: (draft: MutableModel<Stage>) => MutableModel<Stage> | void): Stage;
}

type EagerSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programID: string;
  readonly stageID: string;
  readonly name?: string | null;
  readonly order?: number | null;
  readonly description?: string | null;
  readonly userSessions?: (UserSession | null)[] | null;
  readonly length?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programID: string;
  readonly stageID: string;
  readonly name?: string | null;
  readonly order?: number | null;
  readonly description?: string | null;
  readonly userSessions: AsyncCollection<UserSession>;
  readonly length?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Session = LazyLoading extends LazyLoadingDisabled ? EagerSession : LazySession

export declare const Session: (new (init: ModelInit<Session>) => Session) & {
  copyOf(source: Session, mutator: (draft: MutableModel<Session>) => MutableModel<Session> | void): Session;
}

type EagerProgram = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Program, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly sessions?: (Session | null)[] | null;
  readonly version?: string | null;
  readonly userPrograms?: (UserProgram | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProgram = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Program, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly sessions: AsyncCollection<Session>;
  readonly version?: string | null;
  readonly userPrograms: AsyncCollection<UserProgram>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Program = LazyLoading extends LazyLoadingDisabled ? EagerProgram : LazyProgram

export declare const Program: (new (init: ModelInit<Program>) => Program) & {
  copyOf(source: Program, mutator: (draft: MutableModel<Program>) => MutableModel<Program> | void): Program;
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
  readonly userSessions?: (UserSession | null)[] | null;
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
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly onboarded?: boolean | null;
  readonly userSessions: AsyncCollection<UserSession>;
  readonly screened?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}