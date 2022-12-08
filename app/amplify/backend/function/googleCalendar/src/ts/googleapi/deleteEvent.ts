import { Auth , calendar_v3 } from 'googleapis'
import { expressRequest } from 'ts/expressRequest'

export interface IDeleteEvent extends expressRequest {
    req: {
        subject: string,
        eventId: string
    },
    res: null
}

export async function deleteEvent(client: Auth.JWT, calendar: calendar_v3.Calendar,
    { eventId } : IDeleteEvent["req"]
    ) : Promise<IDeleteEvent["res"]>
    {
    await calendar.events.delete({
        calendarId: "primary",
        eventId,
        auth: client,
        sendUpdates: "all"
    })

    return null
}