import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

type ButtonConf = {
  text: string;
  onPress(): void;
};

const OutlineButton = ({ text, onPress }: ButtonConf) => {
  return (
    <Pressable style={styles.button} onPress={onPress} >
      <View style={styles.rectangleView} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt9: {
    marginTop: 9,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#334166",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 312,
    height: 60,
  },
  text: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -138.5,
    top: "50%",
    left: "50%",
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 277,
    height: 36,
  },
  button: {
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: 312,
    height: 60,
    flexShrink: 0,
  },
});

export default OutlineButton;
