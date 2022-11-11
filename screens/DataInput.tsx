import * as React from "react";
import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";

const DataInput = () => {
  return (
    <View style={styles.dataInputView}>
      <View style={styles.nameView}>
        <View style={styles.rectangleView} />
        <TextInput style={styles.nameInputTextInput} keyboardType="default" />
        <View style={styles.frameView}>
          <Text style={styles.nameText}>Name</Text>
        </View>
      </View>
      <View style={[styles.nameView1, styles.mt10]}>
        <View style={styles.rectangleView1} />
        <TextInput style={styles.nameInputTextInput1} keyboardType="default" />
        <View style={styles.frameView1}>
          <Text style={styles.ageText}>Age</Text>
        </View>
      </View>
      <Pressable style={[styles.continuePressable, styles.mt10]}>
        <View style={styles.rectangleView2} />
        <Text style={styles.continueText}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
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
  nameInputTextInput: {
    position: "absolute",
    top: 6,
    left: 25,
    width: 248,
    height: 48,
    color: "#B9B9B9",
  },
  nameText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "center",
  },
  frameView: {
    position: "absolute",
    top: -8.5,
    left: 23,
    backgroundColor: "#334166",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  nameView: {
    position: "relative",
    width: 312,
    height: 75,
    flexShrink: 0,
  },
  rectangleView1: {
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
  nameInputTextInput1: {
    position: "absolute",
    top: 6,
    left: 25,
    width: 248,
    height: 48,
    color: "#B9B9B9",
  },
  ageText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "center",
  },
  frameView1: {
    position: "absolute",
    top: -8.5,
    left: 23,
    backgroundColor: "#334166",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  nameView1: {
    position: "relative",
    width: 312,
    height: 75,
    flexShrink: 0,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    width: 312,
    height: 60,
  },
  continueText: {
    position: "absolute",
    top: 18,
    left: 24,
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
  },
  continuePressable: {
    position: "relative",
    width: 312,
    height: 60,
    flexShrink: 0,
  },
  dataInputView: {
    position: "relative",
    backgroundColor: "#334166",
    flex: 1,
    width: "100%",
    height: 812,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DataInput;
