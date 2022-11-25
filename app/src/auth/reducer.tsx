import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';
import React, { useState, useReducer } from 'react';
import { resolvePath } from 'react-native-reanimated/lib/types/lib/reanimated2/animation/styleAnimation';



export type IAuth = {
    user: string | null;
	session: boolean;
	loading: boolean;
	errorMessage: string | null,
    onboarded: boolean,
}

export type IAction = {
    type: 'LOGIN_NEWPASS' | 'REQUEST_LOGIN' | 'LOGIN_SUCCESS' | 'LOGOUT' | 'LOGIN_ERROR' | "ONBOARDED";
    payload?: {user?: string | null; session?: boolean;}
    error?: string | null
}

export const initialState : IAuth = {
	user: null,
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
			return {
				...initialState,
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
        case 'ONBOARDED':
            return {
                ...initialState,
                onboarded: true
            }
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};