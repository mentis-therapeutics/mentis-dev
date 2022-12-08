import {Auth, calendar_v3 } from 'googleapis'
import { expressRequest } from 'ts/expressRequest'
export interface IBusytimes extends expressRequest {
    req: {
        subject: string,
        fromDate : string
        toDate : string
        timezone? : string
    }
    res: calendar_v3.Schema$TimePeriod[]
}

export async function getBusytimes(client: Auth.JWT, calendar: calendar_v3.Calendar,
    {fromDate, toDate, timezone}: IBusytimes["req"]
    ) : Promise<IBusytimes["res"]>{

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