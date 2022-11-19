import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Header from "../components/Header";
import SessionTab from "../components/SessionTab";
import NavigationBarInverted from "../components/NavigationBar";

const SessionDetail = () => {
  return (
    <View style={styles.sessionDetailClient}>
      <Header />
      <View style={styles.fillerView}>
        <View style={styles.sessionInfoView}>
          <Text style={styles.bookedText}>Booked</Text>
          <Text style={[styles.saturday7thAug12pm1pm, styles.mt5]}>
            <Text style={styles.saturday7thAug}>Saturday, 7th Aug</Text>
            <Text style={styles.pm1pm}>12pm - 1pm</Text>
          </Text>
          <Text style={[styles.resheduleOrCancel, styles.mt5]}>
            Reshedule or Cancel
          </Text>
        </View>
        <View style={[styles.generalModalView, styles.mt20]}>
          <View style={styles.frameView}>
            <Text style={styles.bookSessionsText}>Session Tasks</Text>
          </View>
          <View style={styles.frameView1}>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-38.png")}
            />
          </View>
        </View>
      </View>
      <SessionTab />
      <NavigationBarInverted routeSVG={`{{uri:"route-svg@3x.png"}}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt5: {
    marginTop: 5,
  },
  mt20: {
    marginTop: 20,
  },
  bookedText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  saturday7thAug: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pm1pm: {
    margin: 0,
  },
  saturday7thAug12pm1pm: {
    position: "relative",
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  resheduleOrCancel: {
    position: "relative",
    fontSize: 16,
    textDecoration: "underline",
    lineHeight: 22,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  sessionInfoView: {
    alignSelf: "stretch",
    borderRadius: 20,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  bookSessionsText: {
    position: "relative",
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupIcon: {
    position: "relative",
    width: 27,
    height: 30,
    flexShrink: 0,
  },
  frameView1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  generalModalView: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  fillerView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingBottom: 50,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  sessionDetailClient: {
    position: "relative",
    backgroundColor: "#334166",
    flex: 1,
    width: "100%",
    height: 812,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default SessionDetail;
