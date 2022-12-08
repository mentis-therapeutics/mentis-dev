import { useNavigation } from "@react-navigation/core";
import React, {useEffect, useState} from "react";
import { StyleSheet, View, Image, ScrollView, Text } from "react-native";
import FilledButton from "../components/FilledButton";
import SessionModal from "../components/SessionModal";

import { Auth, DataStore } from "aws-amplify";
import { LazySession, Program, Session } from "../models";
import { SessionStack } from "../components/nav/types";
import { useAuthState } from "../auth/context";

import Lambda from 'aws-sdk/clients/lambda'
import { invokeExpress } from "../utils/lambda";

import { IBusytimes, ICreateEvent } from "../../amplify/backend/types/functionTypes";

const Sessions = () => {
    const { userAtr } = useAuthState()

    const navigation = useNavigation<SessionStack.NavigatorProps>()

    const [sessions, setSessions] = useState<LazySession[]>()

    const joinSession = () => {
        navigation.navigate('SessionDetail')
    }

    //async function loadSessions() {
    //    const program = DataStore.query(Program, (c) => {c.userID.eq(user.attributes.sub)} )

    //}

    async function lambda(){
        /*
        const input =  {
            subject: "hello@getmentis.com", 
            fromDate: "2022-12-07T19:17:04Z", 
            toDate: "2022-12-17T19:17:04Z", 
            timezone: "America/New_York"
        } as IBusytimes['req']

        const data = await invokeExpress<IBusytimes>("googleCalendar", "GET", "/busytimes", input)

        console.log(typeof data)
        console.log(data[0].start)
        */

        const input = {
            subject: "hello@getmentis.com", 
            summary: "Mentis Therapeutics",
            attendees: ["hello@getmentis.com", 'sam@getmentis.com'],
            start: "2022-12-07T19:17:04Z",
            end: "2022-12-07T19:47:04Z",
        } as ICreateEvent['req']
        
        const data = await invokeExpress<ICreateEvent>("googleCalendar", "PUT", "/event", input)

        console.log(data.id)
        console.log(data.start)

    }

    useEffect(() => {
        // Session data
        const sub = DataStore.observeQuery(Program, 
            (c) => c.userID.eq(userAtr!.sub)
        ).subscribe(async ({ items }) => {
            if (items.length == 0) return;
            const s = await items[0].sessions.toArray()
            setSessions(s)
        });
        return () => {
            sub.unsubscribe();
        };  
    }, [])
     

    return (
        <View style={styles.sessionsClient}>
        <ScrollView
            style={styles.bodyScrollView}
            contentContainerStyle={styles.bodyScrollViewContent}
        >
            <Text style={styles.upcomingText}>Upcoming</Text>

            {sessions?.map((session) => <SessionModal key={session.id} session={session}/>)}
        

            
            <Text style={[styles.historyText, styles.mt25]}>History</Text>
            <View style={[styles.fillerView, styles.mt25]} />

            <FilledButton label="Join Call" onPress={() => {navigation.navigate("VideoCall", {url: "https://mentis-therapeutics.daily.co/QNmdsVJrwP0zELnHvOU7"})}} />
            <FilledButton label="Create Event" onPress={lambda} />
        </ScrollView>
        </View>
    );
    };

const styles = StyleSheet.create({
  mt25: {
    marginTop: 25,
  },
  bodyScrollViewContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  mt1: {
    marginTop: 1,
  },
  unsafeHeaderHeight: {
    position: "relative",
    width: 374,
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
  },
  vectorIcon: {
    position: "relative",
    width: 12.34,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  leftView: {
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoSvgIcon: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
  },
  vectorIcon1: {
    position: "relative",
    width: 12.34,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  rightView: {
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  safeHeaderView: {
    alignSelf: "stretch",
    height: 59,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerView: {
    alignSelf: "stretch",
    backgroundColor: "#334166",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  upcomingText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    height: 25,
  },
  historyText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    height: 25,
  },
  fillerView: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
  },
  bodyScrollView: {
    alignSelf: "stretch",
    flex: 1,
    boxSizing: "border-box",
  },
  vectorIcon2: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  homeView: {
    width: 23,
    height: 23,
    flexShrink: 0,
    flexDirection: "row",
    padding: 1,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  homeText: {
    position: "relative",
    fontSize: 8,
    lineHeight: 11,
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "center",
  },
  linkView: {
    width: 40,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  routeSVGIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  routeView: {
    width: 23,
    height: 23,
    flexShrink: 0,
    flexDirection: "row",
    padding: 1,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  progressText: {
    position: "relative",
    fontSize: 8,
    lineHeight: 11,
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "center",
  },
  linkView1: {
    width: 40,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorIcon3: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  meetingView: {
    width: 23,
    height: 23,
    flexShrink: 0,
    flexDirection: "column",
    padding: 1,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  sessionsText: {
    position: "relative",
    fontSize: 8,
    lineHeight: 11,
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "center",
  },
  linkView2: {
    width: 40,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  navigationBarInverted: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    height: 60,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 50,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sessionsClient: {
    position: "relative",
    backgroundColor: "#334166",
    flex: 1,
    width: "100%",
    height: 812,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Sessions;
