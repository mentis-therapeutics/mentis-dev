import { CognitoUser } from "amazon-cognito-identity-js";
import { Auth, Hub } from 'aws-amplify'

// Cognito work around
export const getEmail = async (user: CognitoUser) => {
    return await new Promise<string>((resolve, reject) => {
		user.getUserAttributes((error, attributes) => {
            if (error || !attributes){
                console.log(error)
                reject()
            }
            else{
                const email = attributes.find(o => o.Name === 'email');
                if (!email) {
                    reject()
                }else{
                    resolve(email.Value)
                }
            }
        })
    }
    );
}

export const getAuthData = async (u? : CognitoUser, uname?: string) => {
    const user: CognitoUser = u ? u : await Auth.currentAuthenticatedUser();
    const username          = uname ? uname : await getEmail(user);
    const session           = await Auth.currentSession();
    const credentials       = await Auth.currentCredentials();

    return {user, username, session, credentials}
}

export const waitForDataStoreLoad = async () => {
	await new Promise<void>((resolve) => {
		Hub.listen('datastore', async (hubData) => {
			const { event } = hubData.payload;
			if (event === 'ready') {
				resolve();
			}
		});
	});
};