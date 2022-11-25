import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum AccountType {
  SUPER_ADMIN = "SUPER_ADMIN",
  USER = "USER",
  SUPERVISOR = "SUPERVISOR",
  THERAPIST = "THERAPIST"
}



type EagerStage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programID: string;
  readonly sessions?: (Session | null)[] | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programID: string;
  readonly sessions: AsyncCollection<Session>;
  readonly name?: string | null;
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
  readonly stageID: string;
  readonly name?: number | null;
  readonly description?: string | null;
  readonly dateTime?: string | null;
  readonly length?: string | null;
  readonly scheduled?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly stageID: string;
  readonly name?: number | null;
  readonly description?: string | null;
  readonly dateTime?: string | null;
  readonly length?: string | null;
  readonly scheduled?: boolean | null;
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
  readonly stages?: (Stage | null)[] | null;
  readonly users?: (UserProgram | null)[] | null;
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
  readonly stages: AsyncCollection<Stage>;
  readonly users: AsyncCollection<UserProgram>;
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
  readonly accountType?: AccountType | keyof typeof AccountType | null;
  readonly onboarded?: boolean | null;
  readonly program?: (UserProgram | null)[] | null;
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
  readonly accountType?: AccountType | keyof typeof AccountType | null;
  readonly onboarded?: boolean | null;
  readonly program: AsyncCollection<UserProgram>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerUserProgram = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProgram, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programId?: string | null;
  readonly userId?: string | null;
  readonly program: Program;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProgram = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProgram, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programId?: string | null;
  readonly userId?: string | null;
  readonly program: AsyncItem<Program>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProgram = LazyLoading extends LazyLoadingDisabled ? EagerUserProgram : LazyUserProgram

export declare const UserProgram: (new (init: ModelInit<UserProgram>) => UserProgram) & {
  copyOf(source: UserProgram, mutator: (draft: MutableModel<UserProgram>) => MutableModel<UserProgram> | void): UserProgram;
}