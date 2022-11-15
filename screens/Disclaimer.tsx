import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { CheckBox as RNKCheckBox } from "@ui-kitten/components";

import { cognitoPool } from "../utils/cognito_pool";

const Disclaimer = () => {
  const [checkboxchecked, setCheckboxchecked] = useState(undefined);

  const onSubmit = () => {

  }

  return (
    <View style={styles.disclaimerView}>
      <View style={styles.screenView}>
        <View style={styles.termsView}>
          <View style={styles.rectangleView} />
          <View style={styles.frameView}>
            <Text style={styles.termsText}>Terms</Text>
          </View>
        </View>
        <Pressable style={[styles.agreeToTerms1, styles.mt20]}>
          <RNKCheckBox
            style={styles.checkboxRNKCheckBox}
            status="basic"
            checked={checkboxchecked}
            onChange={() => setCheckboxchecked(!checkboxchecked)}
          />
          <Text style={styles.agreeToTerms}>
            I have read and agree to the terms.
          </Text>
        </Pressable>
        <Pressable style={[styles.continuePressable, styles.mt20]} onPress={onSubmit}>
          <View style={styles.rectangleView1} />
          <Text style={styles.continueText}>Continue</Text>
        </Pressable>
        <Image
          style={[styles.sunEmoteIcon, styles.mt20]}
          resizeMode="cover"
          source={require("../assets/sun-emote.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt20: {
    marginTop: 20,
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 16,
    backgroundColor: "#334166",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
  },
  termsText: {
    position: "absolute",
    top: 0,
    left: 5,
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  frameView: {
    position: "absolute",
    top: -9,
    left: 23,
    backgroundColor: "#334166",
    width: 45,
    height: 17,
  },
  termsView: {
    flex: 1,
    position: "relative",
    width: 312,
  },
  checkboxRNKCheckBox: {
    position: "relative",
    flexShrink: 0,
  },
  agreeToTerms: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Manrope",
    color: "#b9b9b9",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    width: 261,
    height: 35,
  },
  agreeToTerms1: {
    width: 293,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rectangleView1: {
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
  sunEmoteIcon: {
    position: "relative",
    width: 375,
    height: 72,
    flexShrink: 0,
    overflow: "hidden",
  },
  screenView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 50,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  disclaimerView: {
    position: "relative",
    backgroundColor: "#334166",
    flex: 1,
    width: "100%",
    height: 812,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Disclaimer;
