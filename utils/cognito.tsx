import AsyncStorage from '@react-native-async-storage/async-storage';
import {CognitoUser, AuthenticationDetails, CognitoUserPool, CognitoUserSession} from 'amazon-cognito-identity-js';
import {cognitoPool} from '../utils/cognito_pool';



export const cognitoSession =  () : boolean => {

    const user = cognitoPool.getCurrentUser();

    console.log(user)

    if (!user) return false;

    user.getSession( (err: Error, session: null | CognitoUserSession) => {
        if (err) {
            console.log(err);
            return false;
        }

        if (!session) return false;

        return session.isValid();
    });

    return false;
};
