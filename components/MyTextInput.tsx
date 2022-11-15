import * as React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

type MyTextInputType = {
  secureText?: boolean;
  type?: string;
  inputError?: string
  hook(value: string): void;
};

const MyTextInput = ({ secureText, type, inputError, hook }: MyTextInputType) => {
  return (
    <View style={styles.emailView}>
      <View style={styles.rectangleView} />
      <TextInput
        style={styles.emailInputTextInput}
        keyboardType="default"
        secureTextEntry={secureText}
        onChangeText={(value : string) => {hook(value);}}
      />
      <View style={styles.frameView}>
        <Text style={styles.emailText}>{type}</Text>
      </View>
      <View style={styles.errorView}>
        <Text style={styles.emailErrorText}>{inputError}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    marginTop: -37.5,
    marginLeft: -156,
    top: "50%",
    left: "50%",
    borderRadius: 16,
    backgroundColor: "#334166",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 312,
    height: 60,
  },
  emailInputTextInput: {
    position: "absolute",
    top: 6,
    left: 20,
    width: 248,
    height: 48,
    color: "#B9B9B9",
  },
  emailText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "center",
  },
  frameView: {
    position: "absolute",
    top: -5,
    left: 23,
    backgroundColor: "#334166",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  emailView: {
    position: "relative",
    width: 312,
    height: 75,
    flexShrink: 0,
    marginBottom: 20,
  },
  errorView: {
    position: "absolute",
    top: 62,
    left: -0.5,
    width: 312,
    height: 23,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  emailErrorText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#ff0000",
    textAlign: "right",
  },
});

export default MyTextInput;
