import React, {useEffect, useState} from "react";
import { Text, StyleSheet, Image, View, ImageSourcePropType, Pressable } from "react-native";
import SessionModalRender, { ModalState } from "./render/SessionModalRender";
import { Session } from "../models"
import { useNavigation } from "@react-navigation/core";
import { SessionStack } from "./nav/types";

type ISessionModal = {
    session: Session
};

const SessionModal = ({session} : ISessionModal) => {
    const navigator = useNavigation<SessionStack.NavigatorProps>()
    
    const [state, setState]                 = useState(ModalState.UNBOOKED)
    const [sessionName, setSessionName]     = useState("")
    const [sessionDate, setSessionDate]     = useState("")
    const [sessionLength, setSessionLength] = useState("")
    const [therapist, setTherapist]         = useState("")

    const onPress = () => {
        switch(state) {
            case ModalState.UNBOOKED:
                navigator.navigate("Calendly", {session})
                break
            case ModalState.BOOKED:
                navigator.navigate("SessionDetail")
                break
            case ModalState.LIVE:
                navigator.navigate("VideoCall", { url:`https://mentis-therapeutics.daily.co/${session.meetingUUID}` })
                break
        }
    }

    function calcModalState() {
        if (session.booked === true) {
            const bookedDate = new Date(sessionDate).getTime()
            const now = new Date().getTime()

            const diff = now - bookedDate

            const sessionLen = sessionLength.split(":")

            // (Hours * 60 + Mins) * 60 * 1000 -> ms
            const len = (Number(sessionLen[0]) * 60 + Number(sessionLen[1])) * 60 * 1000 
            
            // Make live for 10 mins before & after session
            // TODO: Does this work with timezones??
            if (diff < (10 * 60 * 1000) * -1){
                setState(ModalState.BOOKED)
            }else if (diff > (10 * 60 * 1000) * -1 && diff < (len + 10 * 60 * 1000)) {
                setState(ModalState.LIVE)
            }else{
                setState(ModalState.COMPLETE)
            }
        }else{
            setState(ModalState.UNBOOKED)
        }

    }

    async function loadState () {
        if (session.datetime) setSessionDate(session.datetime)
        setTherapist("John Smith")

        const sessionTemplate = await session.sessionTemplate;
        if (sessionTemplate?.name)   setSessionName(sessionTemplate?.name)
        if (sessionTemplate?.length) setSessionLength(sessionTemplate?.length)
        
        calcModalState()  
    }
    
    // Split this up
    useEffect( () => {
        loadState()

        // Every 15s recalc state -> check if call becomes live
        const interval = setInterval(() => {
            calcModalState()
        }, 15 * 1000);

        return () => clearInterval(interval)
    }, [session])



    if (state == ModalState.ERROR) {
        return(<></>);
    }


    return (
        <Pressable style={{alignSelf: "stretch"}} onPress={onPress}>
            <SessionModalRender {...{ state, sessionName, sessionDate, therapist}}  />
        </Pressable>
    );
};



export default SessionModal;
