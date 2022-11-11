import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

type ButtonConf = {
  text: string;
  onPress(): void;
};

const FilledButton = ({ text, onPress }: ButtonConf) => {
  return (
    <Pressable style={styles.button} onPress={onPress} >
      <View style={styles.rectangleView} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    marginTop: -30,
    marginLeft: -156,
    top: "50%",
    left: "50%",
    borderRadius: 16,
    backgroundColor: "#fff",
    width: 312,
    height: 60,
  },
  text: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -132.5,
    top: "50%",
    left: "50%",
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 264,
    height: 36,
  },
  button: {
    position: "relative",
    width: 312,
    height: 60,
    flexShrink: 0,
  }
});

export default FilledButton;
