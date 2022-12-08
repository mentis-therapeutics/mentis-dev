import {Auth, calendar_v3 } from 'googleapis'

type IBusytimes = {
    fromDate : string
    toDate : string
    timezone? : string
}

export async function getBusytimes(client: Auth.JWT, calendar: calendar_v3.Calendar,
    {fromDate, toDate, timezone}: IBusytimes
    ){

    const res = await calendar.freebusy.query({
        requestBody: {
            calendarExpansionMax: 1,
            groupExpansionMax: 1,
            items: [{id:"primary"}],
            timeMin: fromDate,
            timeMax: toDate,
            timeZone: timezone
        },
        auth: client
    });

    return res.data.calendars["primary"].busy
}