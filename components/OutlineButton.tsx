import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

const OutlineButton = () => {
  return (
    <Pressable style={[styles.loginGooglePressable, styles.mt9]}>
      <View style={styles.rectangleView} />
      <Text style={styles.loginWithGoogle}>Login with Google</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#181818",
    borderStyle: "solid",
    borderColor: "#b9b9b9",
    borderWidth: 1,
    width: 281,
    height: 60,
  },
  loginWithGoogle: {
    position: "absolute",
    top: 12,
    left: 2,
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#b9b9b9",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 277,
    height: 36,
  },
  loginGooglePressable: {
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: 281,
    height: 60,
    flexShrink: 0,
  },
});

export default OutlineButton;
