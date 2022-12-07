"use strict";
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
const googleapis_1 = require("googleapis");
const key_1 = __importDefault(require("./key"));
/*
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const {google} = require("googleapis");
const key = require('./key.json')
*/
var calendar = googleapis_1.google.calendar('v3');
var scopes = ['https://www.googleapis.com/auth/calendar'];
var jwtClient;
async function auth() {
    jwtClient = new googleapis_1.google.auth.JWT(key_1.default.client_email, null, key_1.default.private_key, scopes, 'hello@getmentis.com');
    await jwtClient.authorize();
    console.log("Calendar Service Authorized");
}
// declare a new express app
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
//a.use(awsServerlessExpressMiddleware.eventContext())
// Enable CORS & auth for all methods
app.use(async function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    await auth();
    next();
});
async function listEvents() {
    const res = await calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
        auth: jwtClient,
    });
    console.log(res.data);
}
async function calendarList() {
    const res = await calendar.calendarList.list({
        maxResults: 100,
        auth: jwtClient
    });
    //console.log(res)
    console.log(res.data);
}
async function getBusytimes(calendarId, fromDate, toDate) {
    const res = await calendar.freebusy.query({
        requestBody: {
            calendarExpansionMax: 1,
            groupExpansionMax: 1,
            items: [{ id: calendarId }],
            timeMin: fromDate.toISOString(),
            timeMax: toDate.toISOString()
        },
        auth: jwtClient
    });
    return res.data.calendars[calendarId].busy;
}
async function createEvent() {
}
async function updateEvent() {
}
async function deleteEvent() {
}
/**********************
 * Example get method *
 **********************/
app.get('/item', function (req, res) {
    // Add your code here
    res.json({ success: 'get call succeed!', url: req.url });
});
app.get('/item/*', function (req, res) {
    // Add your code here
    res.json({ success: 'get call succeed!', url: req.url });
});
/****************************
* Example post method *
****************************/
app.post('/item', async function (req, res) {
    // Add your code here
    //await calendarList();
    const now = new Date();
    const later = new Date(Date.now() + 10 * 1000 * 60 * 60 * 24);
    console.log("hello");
    const times = await getBusytimes("hello@getmentis.com", now, later);
    console.log(times);
    res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});
app.post('/item/*', async function (req, res) {
    // Add your code here
    res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});
/****************************
* Example put method *
****************************/
app.put('/item', function (req, res) {
    // Add your code here
    res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});
app.put('/item/*', function (req, res) {
    // Add your code here
    res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});
/****************************
* Example delete method *
****************************/
app.delete('/item', function (req, res) {
    // Add your code here
    res.json({ success: 'delete call succeed!', url: req.url });
});
app.delete('/item/*', function (req, res) {
    // Add your code here
    res.json({ success: 'delete call succeed!', url: req.url });
});
app.listen(3000, function () {
    console.log("App started");
});
// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
