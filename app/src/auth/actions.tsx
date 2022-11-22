import { useNavigation } from "@react-navigation/core";
import { AuthenticationDetails, CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import { resolvePath } from "react-native-reanimated/lib/types/lib/reanimated2/animation/styleAnimation";

import { IAction } from "./reducer";

import {DataStore, Hub, Auth} from 'aws-amplify'
import { UserData } from "../models";

export const getSession = async (dispatch : React.Dispatch<IAction>) : Promise<void> => {
    try {
        const user = await Auth.currentAuthenticatedUser();
        console.log('user:', user)
        if (user) {
            dispatch({type: 'LOGIN_SUCCESS'})
        }   
    }catch{
        //console.log('No one logged in')
    }
}

const waitForDataStoreLoad = async () => {
	//promesa que se ejecuta cuando el datastore esta listo
	await new Promise<void>((resolve) => {
		Hub.listen('datastore', async (hubData) => {
			const { event } = hubData.payload;
			if (event === 'ready') {
				resolve();
			}
		});
	});
};

export const login = async (authDetails: {email: string, password: string}, dispatch : React.Dispatch<IAction>, navigation) : Promise<void>  => {

        dispatch({type: 'REQUEST_LOGIN'});
        try {
            const user = await Auth.signIn(authDetails.email, authDetails.password);
            
            if (user) {
                if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                    dispatch({ type: 'LOGIN_NEWPASS', payload:{user}});
                    navigation.navigate("CreatePassword");
                    return
                }

                /* Once the user successfully signs in, update the form state to show the signed in state */
                DataStore.configure();
                await DataStore.clear();
                await DataStore.start();
                await waitForDataStoreLoad();

                dispatch({ type: 'LOGIN_SUCCESS'});
                return
            }
            return
          } catch (err) { 
            console.log({ err });
            return
         }

}



export const createPassword = async (user: string, password: string, dispatch : React.Dispatch<IAction>) => {
    dispatch({type: 'REQUEST_LOGIN'});
    Auth.completeNewPassword( user, password, [])
    .then( (data) => {
        dispatch({ type: 'LOGIN_SUCCESS'});
    })
    .catch( (err) => {
        dispatch({ type: 'LOGIN_ERROR', error:err});
        console.log(err)
    })
}

export const confirmPassword = async (user: string, code: string, password: string, dispatch : React.Dispatch<IAction>) => {
    Auth.forgotPasswordSubmit(user, code, password)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

export const forgotPassword = async (user: string, dispatch : React.Dispatch<IAction>, navigation) => {
    //dispatch({type: 'REQUEST_LOGIN'});
    Auth.forgotPassword(user)
    .then( (res) => {
        dispatch({ type: 'LOGIN_NEWPASS', payload:{user}});
        navigation.navigate("ResetPassword")
    })
    .catch( (err) => {
        //dispatch({ type: 'LOGIN_ERROR', error:err});
        console.log(err)
    })

}

export async function logout(user: CognitoUser, dispatch: React.Dispatch<IAction>) {
    // TODO: Should clear cache but causes annoying sync issues
    await DataStore.clear()
    await Auth.signOut();
	dispatch({ type: 'LOGOUT' });
}

