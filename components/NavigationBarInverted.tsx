import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";

type NavigationBarInvertedType = {
  routeSVG?: ImageSourcePropType;
};

const NavigationBarInverted = ({ routeSVG }: NavigationBarInvertedType) => {
  return (
    <View style={styles.navigationBarInverted}>
      <View style={styles.linkView}>
        <View style={styles.homeView}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector13.png")}
          />
        </View>
        <Text style={[styles.homeText, styles.mt1]}>Home</Text>
      </View>
      <View style={styles.linkView1}>
        <View style={styles.routeView}>
          <Image
            style={styles.routeSVGIcon}
            resizeMode="cover"
            source={routeSVG}
          />
        </View>
        <Text style={[styles.progressText, styles.mt1]}>Progress</Text>
      </View>
      <View style={styles.linkView2}>
        <View style={styles.meetingView}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector14.png")}
          />
        </View>
        <Text style={[styles.sessionsText, styles.mt1]}>Sessions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt1: {
    marginTop: 1,
  },
  vectorIcon: {
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
  vectorIcon1: {
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
});

export default NavigationBarInverted;
