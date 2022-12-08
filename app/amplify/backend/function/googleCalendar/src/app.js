/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */"use strict";
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const middleware_1 = __importDefault(require("aws-serverless-express/middleware"));
const googleapis_1 = require("googleapis");
const key_1 = __importDefault(require("./key"));
const busytimes_1 = require("./googleapi/busytimes");
const createEvent_1 = require("./googleapi/createEvent");
const deleteEvent_1 = require("./googleapi/deleteEvent");
var calendar = googleapis_1.google.calendar('v3');
var scopes = ['https://www.googleapis.com/auth/calendar'];
var client;
async function auth(subject) {
    client = new googleapis_1.google.auth.JWT(key_1.default.client_email, null, key_1.default.private_key, scopes, subject);
    await client.authorize();
    console.log("Calendar Service Authorized");
}
// declare a new express app
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(middleware_1.default.eventContext());
// Enable CORS & auth for all methods
app.use(async function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    try {
        await auth(req.body.subject);
        next();
    }
    catch (error) {
        res.status(400).send({
            msg: error.message
        });
    }
});
/**********************
 * Example get method *
 **********************/
app.get('/busytimes', async function (req, res) {
    try {
        const data = await (0, busytimes_1.getBusytimes)(client, calendar, req.body.payload);
        res.json({ busy: data });
    }
    catch (error) {
        res.status(400).send({
            msg: error.message
        });
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
app.put('/event', async function (req, res) {
    try {
        const data = await (0, createEvent_1.createEvent)(client, calendar, req.body.payload);
        res.json(data);
    }
    catch (error) {
        res.status(400).send({
            msg: error.message
        });
    }
});
/****************************
* Example delete method *
****************************/
app.delete('/event', async function (req, res) {
    try {
        await (0, deleteEvent_1.deleteEvent)(client, calendar, req.body.payload);
        res.json({});
    }
    catch (error) {
        res.status(400).send({
            msg: error.message
        });
    }
});
app.listen(3000, function () {
    console.log("App started");
});
module.exports = app;
