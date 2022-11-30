import React, {useEffect, useState} from "react";
import { Text, StyleSheet, Image, View, ImageSourcePropType } from "react-native";
import SessionModalRender, { ModalState } from "./render/SessionModalRender";
import { Session } from "../models"

type ISessionModal = {
    session: Session
};

const SessionModal = ({session} : ISessionModal) => {
    
    const [state, setState]                 = useState(ModalState.UNBOOKED)
    const [sessionName, setSessionName]     = useState("")
    const [sessionDate, setSessionDate]     = useState("")
    const [sessionLength, setSessionLength] = useState("")
    const [therapist, setTherapist]         = useState("")

    function calcModalState() {
        if (session.booked === true) {
            const bookedDate = new Date(sessionDate).getTime()
            const now = new Date().getTime()

            const diff = now - bookedDate
            const sessionLen = new Date(sessionLength).getTime()
            
            // Make live for 10 mins before & after session
            // TODO: Does this work with timezones??
            if (diff > - 10 * 60 * 60 && diff < sessionLen + 10 * 60 * 60) {
                setState(ModalState.LIVE)
                 
            }else{
                setState(ModalState.BOOKED)
            }
        }else{
            setState(ModalState.UNBOOKED)
        }

    }

    async function loadState () {
        
        if (session.datetime) setSessionDate(session.datetime)
        setTherapist("John Smith")

        // Query session name
        if (sessionName == "") {
            const sessionTemplate = await session.sessionTemplate;
            if (sessionTemplate?.name)   setSessionName(sessionTemplate?.name)
            if (sessionTemplate?.length) setSessionLength(sessionTemplate?.length)
        }

        calcModalState()  
    }
    
    // Split this up
    useEffect( () => {
        loadState()

        // Every 15s recalc state, check if call becomes live
        const interval = setInterval(() => {
            calcModalState()
        }, 15 * 1000);

        return () => clearInterval(interval)
    }, [])



    if (state == ModalState.ERROR) {
        return(<></>);
    }


    return (
        <SessionModalRender {...{ state, sessionName, sessionDate, therapist}}  />
    );
};



export default SessionModal;
