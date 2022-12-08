import Lambda from 'aws-sdk/clients/lambda'
import { Auth } from 'aws-amplify'
import { ICredentials } from '@aws-amplify/core'

import type { expressRequest } from '../../amplify/backend/types/functionTypes'

let lambda : Lambda | null = null;
let env: string | null = null
export const authLambda = (credentials: ICredentials, region: string, environment: string) => {
    lambda = new Lambda({
        credentials: Auth.essentialCredentials(credentials),
        region
    });

    env = environment
}


export const invoke = async (InvocationRequest: Lambda.InvocationRequest) => {
    return await new Promise<Lambda.InvocationResponse>((resolve, reject) => {
        if (!lambda){
            reject("Lambda not initialized")
            return
        } 

        lambda.invoke(InvocationRequest,
        (err, data) => {
            if (err){
                console.log(err)
                reject(err)
                return
            }else{
                resolve(data)
                return
            }
        });   
    })
}

// Importing types from server files 
// Apparently ok to do security-wise -> https://colinhacks.com/essays/painless-typesafety
export const invokeExpress = async <T extends expressRequest>(fn: string, method: string, path: string, body: T['req']) : Promise<T['res']> => {
    const invocPayload = {
        httpMethod: `${method}`,
        path: `${path}`,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }

    const invocationRequest = { 
        FunctionName: `${fn}-${env}`,
        InvocationType: 'RequestResponse',
        LogType: 'None',
        Payload: JSON.stringify(invocPayload)
    }
    const dataString  = await invoke(invocationRequest)
    console.log(dataString)

    const data = JSON.parse(dataString.Payload as string)
    console.log(data)

    return JSON.parse(data['body']) as T['res']
}
