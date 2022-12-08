import Lambda from 'aws-sdk/clients/lambda'
import { Auth } from 'aws-amplify'
import { ICredentials } from '@aws-amplify/core'

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
    if (!lambda) return

    lambda.invoke(InvocationRequest,
    (err, data) => {
        if (err){
            console.log(err)
            return
        }else{
            return data
        }
    });   
}

export const invokeExpress = async (fn: string, method: string, path: string, body) => {
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
    const data = await invoke(invocationRequest)
    return data
}
