import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

type GeneralModalType = {
  bookSessions?: string;
};

const GeneralModal = ({ bookSessions }: GeneralModalType) => {
  return (
    <View style={[styles.generalModalView, styles.mt25]}>
      <View style={styles.frameView}>
        <Text style={styles.bookSessionsText}>{bookSessions}</Text>
      </View>
      <View style={styles.frameView1}>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-38.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: 29,
    height: 32,
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
  },
});

export default GeneralModal;
