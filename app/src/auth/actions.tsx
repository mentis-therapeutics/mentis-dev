import { CognitoUser } from "amazon-cognito-identity-js";
import { IAction } from "./reducer";
import { DataStore, Auth } from 'aws-amplify'
import { authLambda } from "../utils/lambda";

import { AUTH_CONFIG } from '../.env'
import { getAuthData, waitForDataStoreLoad } from "./helpers";


const loginSuccess = async (dispatch: React.Dispatch<IAction>, u? : CognitoUser, uname?: string) => {
    const authData = await getAuthData(u, uname)
    //FIXME: this will break with different environments - needs to auto update
    authLambda(authData.credentials, AUTH_CONFIG.region, "staging")
    dispatch({type: 'LOGIN_SUCCESS', payload:{...authData}})
}

export const getSession = async (dispatch : React.Dispatch<IAction>) => {
    try {
        const user = await Auth.currentAuthenticatedUser();
        if (user) {
            loginSuccess(dispatch, user)
        }   
    }catch (err) {
        dispatch({ type: 'LOGIN_ERROR', error:err});
        console.log(err)
    }
}

export const login = async (authDetails: {email: string, password: string}, dispatch : React.Dispatch<IAction>, navigation) : Promise<void>  => {
        dispatch({type: 'REQUEST_LOGIN'});
        try {
            const user = await Auth.signIn(authDetails.email, authDetails.password);
            
            if (user) {
                if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                    dispatch({ type: 'LOGIN_NEWPASS', payload:{user, username: authDetails.email}});
                    navigation.navigate("CreatePassword")
                    return
                }

                await DataStore.clear();
                await DataStore.start();
                await waitForDataStoreLoad()
                loginSuccess(dispatch, user, authDetails.email)
            }
            return
          } catch (err) { 
            console.log({ err });
            return
         }

}

export const createPassword = async (user: CognitoUser, password: string, dispatch : React.Dispatch<IAction>) => {
    dispatch({type: 'REQUEST_LOGIN'});
    Auth.completeNewPassword(user, password, [])
    .then( async (data) => {
        loginSuccess(dispatch, user)
    })
    .catch( (err) => {
        dispatch({ type: 'LOGIN_ERROR', error:err});
        console.log(err)
    })
}

export const confirmPassword = async (username: string, code: string, password: string, dispatch : React.Dispatch<IAction>) => {
    Auth.forgotPasswordSubmit(username, code, password)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}


export const forgotPassword = async (username: string, dispatch : React.Dispatch<IAction>, navigation) => {
    //dispatch({type: 'REQUEST_LOGIN'});
    Auth.forgotPassword(username)
    .then( (res) => {
        dispatch({ type: 'LOGIN_NEWPASS', payload:{username}});
        navigation.navigate("ResetPassword")
    })
    .catch( (err) => {
        //dispatch({ type: 'LOGIN_ERROR', error:err});
        console.log(err)
    })

}

export async function logout(user: CognitoUser, dispatch: React.Dispatch<IAction>) {
    await DataStore.clear()
    await Auth.signOut();
	dispatch({ type: 'LOGOUT' });
}

