import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';
import React, { useState, useReducer } from 'react';
import { resolvePath } from 'react-native-reanimated/lib/types/lib/reanimated2/animation/styleAnimation';
import { cognitoPool } from '../utils/cognito_pool';

export const getStoredUser = () : Promise<CognitoUser | null> => {

    // TODO: this might only need to be done once? Use reject?

    return new Promise( (resolve, reject) => {
        cognitoPool.storage.sync(function(err, result) {
            if(result !== 'SUCCESS') { 
                console.log("Storage Error");
                resolve(null);
            }else{
                resolve(cognitoPool.getCurrentUser());
            }   
        });
    });
}

export type IAuth = {
    user: CognitoUser | null;
	session: boolean;
	loading: boolean;
	errorMessage: string | null,
    onboarded: boolean,
}

export type IAction = {
    type: 'LOGIN_NEWPASS' | 'REQUEST_LOGIN' | 'LOGIN_SUCCESS' | 'LOGOUT' | 'LOGIN_ERROR' | "ONBOARDED";
    payload?: {user?: CognitoUser | null; session?: boolean;}
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