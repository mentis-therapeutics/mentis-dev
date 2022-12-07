"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = void 0;
async function createEvent(client, calendar, { summary, attendees, start, end, location, description, timezone, recurrence }) {
    const event = {
        summary,
        location,
        description,
        start: {
            dateTime: start,
            timeZone: timezone
        },
        end: {
            dateTime: end,
            timeZone: timezone
        },
        recurrence,
        attendees: attendees.map((attendant) => { return { 'email': attendant }; }),
        reminders: {
            useDefault: true,
            /*overrides: [
              {method: 'email', minutes: 24 * 60},
              {method: 'popup', minutes: 10}
            ]
            */
        }
    };
    const res = await calendar.events.insert({
        calendarId: "primary",
        sendNotifications: true,
        sendUpdates: "all",
        supportsAttachments: false,
        requestBody: event,
        auth: client
    });
    return res.data;
}
exports.createEvent = createEvent;
