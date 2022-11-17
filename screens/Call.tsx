import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import Header from "../components/Header";

const Call = () => {
  return (
    <View style={styles.sessionClient}>
      <Header />
      <View style={styles.videoCallView}>
        <View style={styles.seflieWindowView} />
        <View style={[styles.videoControlsView, styles.mt40]}>
          <View style={styles.controlView}>
            <Image
              style={styles.micOffIcon}
              resizeMode="cover"
              source={require("../assets/micoff.png")}
            />
            <Image
              style={styles.micIcon}
              resizeMode="cover"
              source={require("../assets/mic.png")}
            />
          </View>
          <View style={[styles.controlView1, styles.ml20]}>
            <Image
              style={styles.videoSlashIcon}
              resizeMode="cover"
              source={require("../assets/videoslash.png")}
            />
            <Image
              style={styles.videoIcon}
              resizeMode="cover"
              source={require("../assets/video.png")}
            />
          </View>
          <View style={[styles.controlView2, styles.ml20]}>
            <Image
              style={styles.musicIcon}
              resizeMode="cover"
              source={require("../assets/music.png")}
            />
          </View>
          <View style={[styles.controlView3, styles.ml20]}>
            <Image
              style={styles.crossIcon}
              resizeMode="cover"
              source={require("../assets/cross.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml20: {
    marginLeft: 20,
  },
  mt40: {
    marginTop: 40,
  },
  seflieWindowView: {
    position: "absolute",
    top: 46,
    right: 38,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 100,
    height: 150,
    flexShrink: 0,
    zIndex: 0,
  },
  micOffIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  micIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  controlView: {
    borderRadius: 100,
    backgroundColor: "#aaa",
    width: 50,
    height: 50,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  videoSlashIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  videoIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  controlView1: {
    borderRadius: 100,
    backgroundColor: "#aaa",
    width: 50,
    height: 50,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  musicIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  controlView2: {
    borderRadius: 100,
    backgroundColor: "#aaa",
    width: 50,
    height: 50,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  crossIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  controlView3: {
    borderRadius: 100,
    backgroundColor: "#d40000",
    width: 50,
    height: 50,
    flexShrink: 0,
    flexDirection: "column",
    padding: 15,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  videoControlsView: {
    position: "absolute",
    marginLeft: -150,
    bottom: 30,
    left: "50%",
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 300,
    flexDirection: "row",
    padding: 20,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  videoCallView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  sessionClient: {
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

export default Call;
