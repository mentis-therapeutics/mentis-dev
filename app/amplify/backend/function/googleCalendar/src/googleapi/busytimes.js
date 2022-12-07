"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBusytimes = void 0;
async function getBusytimes(client, calendar, { fromDate, toDate, timezone }) {
    const res = await calendar.freebusy.query({
        requestBody: {
            calendarExpansionMax: 1,
            groupExpansionMax: 1,
            items: [{ id: "primary" }],
            timeMin: fromDate,
            timeMax: toDate,
            timeZone: timezone
        },
        auth: client
    });
    return res.data.calendars["primary"].busy;
}
exports.getBusytimes = getBusytimes;
