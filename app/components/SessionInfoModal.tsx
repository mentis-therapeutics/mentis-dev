import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

type SessionInfoModalType = {
  session1Of2?: string;
};

const SessionInfoModal = ({ session1Of2 }: SessionInfoModalType) => {
  return (
    <View style={[styles.sessionInfoModalView, styles.mt25]}>
      <View style={styles.modalButtonView}>
        <Text style={styles.session1Of2}>{session1Of2}</Text>
        <View style={styles.dropdownView}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector50.png")}
          />
        </View>
      </View>
      <View style={styles.modalButtonView1}>
        <View style={styles.progressView} />
      </View>
      <View style={styles.lowerSectionView}>
        <View style={styles.frameView}>
          <Text style={styles.tripText}>Preparation</Text>
          <Text style={styles.saturday7thAug12pm1pm}>
            <Text style={styles.saturday7thAug}>Saturday, 7th Aug</Text>
            <Text style={styles.pm1pm}>12pm - 1pm</Text>
          </Text>
        </View>
        <View style={styles.frameView1}>
          <Text style={styles.sessionWithJohnSmith}>
            <Text style={styles.sessionWithText}>Session with</Text>
            <Text style={styles.johnSmithText}>John Smith</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  session1Of2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  vectorIcon: {
    position: "relative",
    width: 6.17,
    height: 10,
    flexShrink: 0,
  },
  dropdownView: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  modalButtonView: {
    alignSelf: "stretch",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressView: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#fff",
    width: 160,
    flexShrink: 0,
    overflow: "hidden",
  },
  modalButtonView1: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    height: 5,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tripText: {
    position: "relative",
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "600",
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
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  frameView: {
    height: 74,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  sessionWithText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  johnSmithText: {
    margin: 0,
  },
  sessionWithJohnSmith: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  frameView1: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  lowerSectionView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sessionInfoModalView: {
    alignSelf: "stretch",
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default SessionInfoModal;
