import * as React from "react";
import { StyleSheet, View, Image, ScrollView, Text } from "react-native";
import JoinSessionModal from "../components/JoinSessionModal";
import NavigationBar from "../components/NavigationBar";
import SessionInfoModal from "../components/SessionInfoModal";

const Sessions = () => {
  return (
    <View style={styles.sessionsClient}>
      <View style={styles.headerView}>
        <View style={styles.unsafeHeaderHeight} />
        <View style={styles.safeHeaderView}>
          <View style={styles.leftView}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <Image
            style={styles.logoSvgIcon}
            resizeMode="cover"
            source={require("../assets/logo-svg.png")}
          />
          <View style={styles.rightView}>
            <Image
              style={styles.vectorIcon1}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.bodyScrollView}
        contentContainerStyle={styles.bodyScrollViewContent}
      >
        <Text style={styles.upcomingText}>Upcoming</Text>
        <JoinSessionModal />
        <SessionInfoModal session1Of2="Session 2 of 2" />
        <Text style={[styles.historyText, styles.mt25]}>History</Text>
        <View style={[styles.fillerView, styles.mt25]} />
      </ScrollView>
      <NavigationBar />
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