import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const SessionExpandingModal = () => {
  return (
    <View style={[styles.sessionExpandingModalView, styles.mt25]}>
      <View style={styles.frameView}>
        <Text style={styles.stageText}>Integration</Text>
        <Text
          style={[styles.sessionsCompletedXOfX, styles.ml10]}
        >{`  Sessions Completed: 0 of 4 `}</Text>
        <View style={[styles.dropdownView, styles.ml10]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector31.png")}
          />
        </View>
      </View>
      <View style={styles.frameView1}>
        <Text style={styles.session1Text}>Session 1</Text>
        <Text style={[styles.completed211297Text, styles.ml10]}>
          Estimated: 21/12/97
        </Text>
        <View style={[styles.dropdownView1, styles.ml10]}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector32.png")}
          />
        </View>
      </View>
      <View style={styles.frameView2}>
        <Text style={styles.session2Text}>Session 2</Text>
        <Text style={[styles.sheduled211297Text, styles.ml10]}>
          Estimated: 21/12/97
        </Text>
        <View style={[styles.dropdownView2, styles.ml10]}>
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector32.png")}
          />
        </View>
      </View>
      <View style={styles.frameView3}>
        <Text style={styles.session3Text}>Session 3</Text>
        <Text
          style={[styles.sheduled211297Text1, styles.ml10]}
        >{`Estimated: 21/12/97 `}</Text>
        <View style={[styles.dropdownView3, styles.ml10]}>
          <Image
            style={styles.vectorIcon3}
            resizeMode="cover"
            source={require("../assets/vector32.png")}
          />
        </View>
      </View>
      <View style={styles.frameView4}>
        <Text style={styles.session4Text}>Session 4</Text>
        <Text
          style={[styles.sheduled211297Text2, styles.ml10]}
        >{`Estimaded: 21/12/97 `}</Text>
        <View style={[styles.dropdownView4, styles.ml10]}>
          <Image
            style={styles.vectorIcon4}
            resizeMode="cover"
            source={require("../assets/vector32.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: 10,
  },
  stageText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  sessionsCompletedXOfX: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon: {
    position: "relative",
    width: 6.18,
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
  frameView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  session1Text: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  completed211297Text: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon1: {
    position: "relative",
    width: 6.18,
    height: 10,
    flexShrink: 0,
  },
  dropdownView1: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView1: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  session2Text: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  sheduled211297Text: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon2: {
    position: "relative",
    width: 6.18,
    height: 10,
    flexShrink: 0,
  },
  dropdownView2: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView2: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  session3Text: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  sheduled211297Text1: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon3: {
    position: "relative",
    width: 6.18,
    height: 10,
    flexShrink: 0,
  },
  dropdownView3: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView3: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  session4Text: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  sheduled211297Text2: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon4: {
    position: "relative",
    width: 6.18,
    height: 10,
    flexShrink: 0,
  },
  dropdownView4: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView4: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sessionExpandingModalView: {
    alignSelf: "stretch",
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SessionExpandingModal;
