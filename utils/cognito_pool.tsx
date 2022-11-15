import {CognitoUserPool} from 'amazon-cognito-identity-js';
import {COGNITO_USER_POOL_ID, COGNITO_CLIENT_ID} from '../env-vars';

const poolData = {
  UserPoolId: COGNITO_USER_POOL_ID,
  ClientId:   COGNITO_CLIENT_ID,
};

export const cognitoPool = new CognitoUserPool(poolData);



