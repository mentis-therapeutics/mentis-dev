import { Auth , calendar_v3} from 'googleapis'
import { expressRequest } from 'ts/expressRequest'
export interface ICreateEvent extends expressRequest {
    req: {
        subject: string,
        summary : string
        attendees: string[]
        start: string,
        end: string

        location?: string
        description? : string
        timezone? : string
        recurrence?: string[]
    },
    res: calendar_v3.Schema$Event
}

export async function createEvent(client: Auth.JWT, calendar: calendar_v3.Calendar,
    {summary, attendees, start, end, location, description, timezone, recurrence} : ICreateEvent["req"]
    ) : Promise<ICreateEvent["res"]> {
    const event : calendar_v3.Schema$Event = {
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
        attendees: attendees.map( (attendant: string)  => { return {'email': attendant}}),
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
    })

    return res.data
}