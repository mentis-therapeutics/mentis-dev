
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware'
import { google, calendar_v3, Auth } from 'googleapis'
import key from './key'
import { getBusytimes } from './googleapi/busytimes'
import { createEvent } from './googleapi/createEvent'
import { deleteEvent } from './googleapi/deleteEvent'

var calendar = google.calendar('v3');
var scopes = ['https://www.googleapis.com/auth/calendar'];
var client : Auth.JWT;

async function auth(subject: string){
    client = new google.auth.JWT(
        key.client_email, 
        null, 
        key.private_key, 
        scopes,
        subject
    );
    
    await client.authorize();
    console.log("Calendar Service Authorized");
}

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS & auth for all methods
app.use(async function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")

    try {
        await auth(req.body.subject)
        next()
    }catch(error){
        res.status(400).send({
            msg: error.message
        })
    }
});

/**********************
 * Example get method *
 **********************/

app.get('/busytimes', async function(req: Request, res: Response) {
    try {
        const data = await getBusytimes(client, calendar, req.body)
        res.json(data);
    }catch(error){
        res.status(400).send({
            msg: error.message
        })
    }
});

/****************************
* Example post method *
****************************/

//TODO: UPDATE METHOD
/*
app.post('/event', async function(req: Request, res: Response) {
    //const data = await createEvent(client, calendar, req.body.payload)
    //res.json({data})
});
*/

/****************************
* Example put method *
****************************/

app.put('/event', async function(req : Request, res : Response) {
    try {
        const data = await createEvent(client, calendar, req.body)
        res.json(data)
    }catch(error){
        res.status(400).send({
            msg: error.message
        })
    }
});


/****************************
* Example delete method *
****************************/

app.delete('/event', async function(req : Request, res : Response) {
    try {
        await deleteEvent(client, calendar, req.body)
        res.json(null);
    }catch(error){
        res.status(400).send({
            msg: error.message
        })
    }
});


app.listen(3000, function() {
    console.log("App started")
});

module.exports = app
