import { Auth , calendar_v3 } from 'googleapis'


type IDeleteEvent = {
   eventId: string 
}

export async function deleteEvent(client: Auth.JWT, calendar: calendar_v3.Calendar,
    {eventId} : IDeleteEvent
    ){
    await calendar.events.delete({
        calendarId: "primary",
        eventId,
        auth: client,
        sendUpdates: "all"
    })
}