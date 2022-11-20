import { useNavigation } from "@react-navigation/core";
import { AuthenticationDetails, CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import { resolvePath } from "react-native-reanimated/lib/types/lib/reanimated2/animation/styleAnimation";

import { IAction } from "./reducer";

import {DataStore, Hub, Auth} from 'aws-amplify'
import { UserData } from "../models";

export const getSession = async (dispatch : React.Dispatch<IAction>) : Promise<void> => {
    const user = await Auth.currentAuthenticatedUser();
    console.log('user:', user)
    if (user) {
        dispatch({type: 'LOGIN_SUCCESS'})
    } 
    /*
    return new Promise( (resolve, reject) => {
        dispatch({type: 'REQUEST_LOGIN'});
        user.getSession( async (err, session) => {
            if (err) {
                dispatch({type: 'LOGIN_ERROR', error: err})
                console.log(err);
                reject(null);
            }
            if (!session) {
                dispatch({type: 'LOGIN_ERROR', error: "Session null"})
                console.log("Session null");
                reject(null);
            }
            if (session.isValid()) {
                
                dispatch({type: 'LOGIN_SUCCESS', payload: {user: user, session: session}})
                resolve(session);
            }else{
                dispatch({type: 'LOGIN_ERROR', error: "Session invalid"})
                console.log("Session invalid");
                reject(null);
            }
        });
    })
    */
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
            await Auth.signIn(authDetails.email, authDetails.password);
            /* Once the user successfully signs in, update the form state to show the signed in state */
            DataStore.configure();
            await DataStore.clear();
            await DataStore.start();
            await waitForDataStoreLoad();

            const user = await Auth.currentAuthenticatedUser();

            if (user) {
                dispatch({ type: 'LOGIN_SUCCESS'});
                return
            }
            return
          } catch (err) { 
            console.log({ err });
            return
         }
        
         /*
        user.authenticateUser(authDetails, {
            onSuccess: async session => { 
                DataStore.configure();
                await DataStore.clear();
                await DataStore.start();
                await waitForDataStoreLoad();

                console.log(session)
                dispatch({ type: 'LOGIN_SUCCESS', payload:{user, session}});
                resolve
            },
            onFailure: error => {
                if (error.name == "PasswordResetRequiredException") {
                    navigation.navigate("ForgotPassword");
                }else{
                    dispatch({ type: 'LOGIN_ERROR', error:error});

                }
                resolve
            },
            /*
            mfaRequired: function(codeDeliveryDetails) {
                // MFA is required to complete user authentication.
                // Get the code from user and call
                //user.sendMFACode(mfaCode, this)
            },
            
            newPasswordRequired: function(userAttributes, requiredAttributes) {
                dispatch({ type: 'LOGIN_NEWPASS', payload:{user}});
                navigation.navigate("CreatePassword");
                resolve
            }
        }); 

        */

}



export const createPassword = (user: CognitoUser, password: string, dispatch : React.Dispatch<IAction>) : Promise<string | null>  => {
    return new Promise( (resolve, reject) => {
        dispatch({type: 'REQUEST_LOGIN'});
        user.completeNewPasswordChallenge(password, {}, {
            onSuccess: async session => {
                dispatch({type:'LOGIN_SUCCESS', payload:{user, session}});
                resolve
            },
            onFailure: error => {
                dispatch({type: 'LOGIN_ERROR', error});
                reject(error.name);
            }
        });
    });
}

export const confirmPassword = (user: CognitoUser, code: string, password: string, dispatch : React.Dispatch<IAction>) : Promise<string | null> => {
    return new Promise( (resolve, reject) => {
        dispatch({type: 'REQUEST_LOGIN'});
        user.confirmPassword(code, password, {
            onSuccess: res => {
                // Login create session
                console.log("Password reset success")
                resolve
              },
            onFailure: error => {
                reject(error.name)
            },
        });
    });
}

export const forgotPassword = (user: CognitoUser, dispatch : React.Dispatch<IAction>) : Promise<string | null> => {
    return new Promise( (resolve, reject) => {
        dispatch({type: 'REQUEST_LOGIN'});
        user.forgotPassword({
            onSuccess: res => {
                dispatch({ type: 'LOGIN_NEWPASS', payload:{user}});
                resolve;
            },
            onFailure: error => {
                reject(error.name)
            },
        })
    });
}

export async function logout(user: CognitoUser, dispatch: React.Dispatch<IAction>) {
    // TODO: Should clear cache but causes annoying sync issues
    await DataStore.clear()

    await Auth.signOut();
    //user.signOut();
	dispatch({ type: 'LOGOUT' });
}




/*
export async function loginUser(dispatch, loginPayload) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(loginPayload),
	};

	try {
		dispatch({ type: 'REQUEST_LOGIN' });
		let response = await fetch(`${ROOT_URL}/login`, requestOptions);
		let data = await response.json();

		if (data.user) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			localStorage.setItem('currentUser', JSON.stringify(data));
			return data;
		}

		dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
		console.log(data.errors[0]);
		return;
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
	localStorage.removeItem('token');
}
*/