import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import { User } from "../models";


export type IAuth = {
    // Amplify returns any type !!! Woo
    user: any | null;
    userAtr: User | null;
	session: boolean;
	loading: boolean;
	errorMessage: string | null,
    onboarded: boolean,
}

export type IAction = {
    type: 'LOGIN_NEWPASS' | 'REQUEST_LOGIN' | 'LOGIN_SUCCESS' | 'LOGOUT' | 'LOGIN_ERROR' | "ONBOARDED" | "UPDATE_USER_ATR";
    payload?: {user?: any | null; session?: boolean; userAtr?: User}
    error?: string | null
}

export const initialState : IAuth = {
	user: null,
    userAtr: null,
	session: false,
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
                errorMessage: 'LOGIN_NEWPASS',
            }
		case 'REQUEST_LOGIN':
			return {
				...initialState,
				loading: true,
			};
		case 'LOGIN_SUCCESS':
            console.log(typeof action.payload!.user!)
			return {
				...initialState,
                user: action.payload!.user!,
				session: true,
				loading: false,
			};
		case 'LOGOUT':
			return {
				...initialState,
				user: null,
				session: false,
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