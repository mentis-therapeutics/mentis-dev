"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = void 0;
async function deleteEvent(client, calendar, { eventId }) {
    await calendar.events.delete({
        calendarId: "primary",
        eventId,
        auth: client,
        sendUpdates: "all"
    });
    return null;
}
exports.deleteEvent = deleteEvent;
