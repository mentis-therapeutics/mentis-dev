import { useNavigation } from "@react-navigation/core";
import React, {useEffect, useState} from "react";
import { StyleSheet, View, Image, ScrollView, Text } from "react-native";
import FilledButton from "../components/FilledButton";
import SessionModal from "../components/SessionModal";

import { DataStore } from "aws-amplify";
import { LazySession, Program, Session } from "../models";
import { SessionStack } from "../components/nav/types";

const Sessions = () => {
    const navigation = useNavigation<SessionStack.NavigatorProps>()

    const [sessions, setSessions] = useState<LazySession[]>()

    const joinSession = () => {
        navigation.navigate('SessionDetail')
    }

    useEffect(() => {
        const sub = DataStore.observeQuery(Session, (c) =>
            c.programSessionsId.eq("")
        ).subscribe(async ({ items }) => {
            setSessions(items)
            console.log(items)
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
