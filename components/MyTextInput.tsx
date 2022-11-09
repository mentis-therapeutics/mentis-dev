import * as React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

type MyTextInputType = {
  secureText?: boolean;
  type?: string;
};

const MyTextInput = ({ secureText, type }: MyTextInputType) => {
  return (
    <View style={styles.emailView}>
      <View style={styles.rectangleView} />
      <TextInput
        style={styles.emailInputTextInput}
        keyboardType="default"
        secureTextEntry={secureText}
      />
      <View style={styles.frameView}>
        <Text style={styles.emailText}>{type}</Text>
      </View>
    </View>
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
  emailInputTextInput: {
    position: "absolute",
    top: 6,
    left: 25,
    width: 248,
    height: 48,
    color: "#B9B9B9",
  },
  emailText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#b9b9b9",
    textAlign: "center",
  },
  frameView: {
    position: "absolute",
    transform: [
      {
        translateY: -46,
      },
      {
        translateX: -116,
      },
    ],
    top: "50%",
    left: "50%",
    backgroundColor: "#181818",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  emailView: {
    position: "relative",
    width: 281,
    height: 75,
    flexShrink: 0,
  },
});

export default MyTextInput;
