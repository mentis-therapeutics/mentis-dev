import { ICredentials } from "@aws-amplify/core";
import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import { Auth } from "aws-amplify";
import { User } from "../models";


export type IAuth = {
    user: CognitoUser | null,
    username: string | null,
    session: CognitoUserSession | null,
    credentials: ICredentials | null,
    userAtr: User | null,
	loading: boolean;
	errorMessage: string | null,
    onboarded: boolean,
}

export type IAction = {
    type: 'LOGIN_NEWPASS' | 'REQUEST_LOGIN' | 'LOGIN_SUCCESS' | 'LOGOUT' | 'LOGIN_ERROR' | "ONBOARDED" | "UPDATE_USER_ATR";
    payload?: {user?: CognitoUser; username?: string, session?: CognitoUserSession; credentials?: ICredentials, userAtr?: User}
    error?: string | null
}

export const initialState : IAuth = {
	user: null,
    username: null,
    session: null,
    credentials: null,
    userAtr: null,
	loading: false,
	errorMessage: null,
    onboarded: false,
};

export const AuthReducer = (initialState : IAuth, action: IAction) : IAuth => {
	switch (action.type) {
        case 'LOGIN_NEWPASS':
            return {
                ...initialState,
                loading: false,
                user: action.payload!.user!,
                username: action.payload!.username!,
                errorMessage: 'LOGIN_NEWPASS',
            }
		case 'REQUEST_LOGIN':
			return {
				...initialState,
				loading: true,
			};
		case 'LOGIN_SUCCESS':
			return {
				...initialState,
                user: action.payload!.user!,
                username: action.payload!.username!,
				session: action.payload!.session!,
                credentials: action.payload!.credentials!,
				loading: false,
			};
		case 'LOGOUT':
			return {
				...initialState,
				user: null,
                username: null,
                session: null,
                credentials: null,
                userAtr: null,
                loading: false,
                errorMessage: null,
                onboarded: false,
			};
		case 'LOGIN_ERROR':
			return {
				...initialState,
				loading: false,
				errorMessage: action.error!,
			};
        case 'UPDATE_USER_ATR':
            return {
                ...initialState,
                userAtr: action.payload!.userAtr!
            }
        case 'ONBOARDED':
            return {
                ...initialState,
                onboarded: true
            }
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};