import { useNavigation } from "@react-navigation/core";
import { AuthenticationDetails, CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import { resolvePath } from "react-native-reanimated/lib/types/lib/reanimated2/animation/styleAnimation";

import { IAction } from "./reducer";


export const getSession = (user: CognitoUser, dispatch : React.Dispatch<IAction>) : Promise<CognitoUserSession | null> => {
    return new Promise( (resolve, reject) => {
        dispatch({type: 'REQUEST_LOGIN'});
        user.getSession( (err, session) => {
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
}

export const login = (user: CognitoUser, authDetails: AuthenticationDetails, dispatch : React.Dispatch<IAction>, navigation) : Promise<void>  => {
    return new Promise( (resolve, reject) => {
        dispatch({type: 'REQUEST_LOGIN'});
        user.authenticateUser(authDetails, {
            onSuccess: async session => { 
                dispatch({ type: 'LOGIN_SUCCESS', payload:{user, session}});
                resolve
                //navigation.navigate('Disclaimer');
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
            */
            newPasswordRequired: function(userAttributes, requiredAttributes) {
                dispatch({ type: 'LOGIN_NEWPASS', payload:{user}});
                navigation.navigate("CreatePassword");
                resolve
            }
        }); 
    });
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
    user.signOut();
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