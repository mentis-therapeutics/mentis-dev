import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const JoinSessionModal = () => {
  return (
    <View style={[styles.joinSessionModalView, styles.mt25]}>
      <View style={styles.modalButtonView}>
        <Text style={styles.joinSessionText}>Join Session</Text>
        <View style={styles.sessionView}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector30.png")}
          />
        </View>
      </View>
      <View style={styles.modalButtonView1}>
        <View style={styles.progressView} />
      </View>
      <View style={styles.lowerSectionView}>
        <View style={styles.frameView}>
          <Text style={styles.preparationText}>Preparation</Text>
          <Text style={styles.today12pm1pm}>
            <Text style={styles.todayText}>Today</Text>
            <Text style={styles.pm1pm}>12pm - 1pm</Text>
          </Text>
        </View>
        <View style={styles.frameView1}>
          <Text style={styles.johnSmithText}>
            <Text style={styles.johnText}>John</Text>
            <Text style={styles.smithText}>Smith</Text>
          </Text>
          <Image
            style={[styles.ellipseIcon, styles.ml10]}
            resizeMode="cover"
            source={require("../assets/ellipse-1353.png")}
          />
        </View>
      </View>
      <View style={styles.lowerSectionView1}>
        <View style={styles.frameView2}>
          <Text style={styles.preparationText1}>Preparation</Text>
          <Text style={styles.today12pm1pm1}>
            <Text style={styles.todayText1}>Today</Text>
            <Text style={styles.pm1pm1}>12pm - 1pm</Text>
          </Text>
        </View>
        <View style={styles.frameView3}>
          <Text style={styles.sessionWithJohnSmith}>
            <Text style={styles.sessionWithText}>Session with</Text>
            <Text style={styles.johnSmithText1}>John Smith</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: 10,
  },
  joinSessionText: {
    position: "relative",
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "left",
  },
  vectorIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  sessionView: {
    width: 25,
    height: 25,
    flexShrink: 0,
    flexDirection: "column",
    padding: 1,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  modalButtonView: {
    alignSelf: "stretch",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
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
    width: 50,
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
    display: "none",
  },
  preparationText: {
    position: "relative",
    fontSize: 24,
    lineHeight: 34,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  todayText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pm1pm: {
    margin: 0,
  },
  today12pm1pm: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
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
  johnText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  smithText: {
    margin: 0,
  },
  johnSmithText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  ellipseIcon: {
    position: "relative",
    width: 60,
    height: 60,
    flexShrink: 0,
  },
  frameView1: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    boxSizing: "border-box",
    alignItems: "center",
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
    display: "none",
  },
  preparationText1: {
    position: "relative",
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  todayText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pm1pm1: {
    margin: 0,
  },
  today12pm1pm1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  frameView2: {
    height: 74,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  sessionWithText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  johnSmithText1: {
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
  frameView3: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  lowerSectionView1: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  joinSessionModalView: {
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

export default JoinSessionModal;
