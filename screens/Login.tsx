import * as React from "react";
import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyTextInput from "../components/MyTextInput";
import OutlineButton from "../components/OutlineButton";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginView}>
      <View style={styles.inputsView}>
        <MyTextInput type="Email" />
        <MyTextInput secureText type="Password" />
        <Pressable style={[styles.loginEmailPressable, styles.mt9]}>
          <View style={styles.rectangleView} />
          <Text style={styles.loginWithEmail}>Login with Email</Text>
        </Pressable>
        <View style={[styles.frameView, styles.mt9]}>
          <Text style={styles.oRText}>OR</Text>
          <View style={styles.lineView} />
          <View style={styles.lineView1} />
        </View>
        <OutlineButton />
        <Pressable
          style={[styles.signUpPressable1, styles.mt9]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Pressable
            style={styles.signUpPressable}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.signUpTxt}>
              {`Dont have an account? `}
              <Text style={styles.signUpText}>Sign up</Text>
            </Text>
          </Pressable>
        </Pressable>
      </View>
      <View style={styles.logoView}>
        <Image
          style={styles.logoIcon}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
      </View>
    </View>
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
    backgroundColor: "#b9b9b9",
    width: 281,
    height: 60,
  },
  loginWithEmail: {
    position: "absolute",
    top: 12,
    left: 8,
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#181818",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 264,
    height: 36,
  },
  loginEmailPressable: {
    position: "relative",
    width: 281,
    height: 60,
    flexShrink: 0,
  },
  oRText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Manrope",
    color: "#b9b9b9",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 268,
    height: 35,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  lineView: {
    position: "absolute",
    transform: [
      {
        translateY: -1,
      },
    ],
    top: "50%",
    left: 156.5,
    borderStyle: "solid",
    borderColor: "#b9b9b9",
    borderTopWidth: 1,
    width: 82,
    height: 1,
  },
  lineView1: {
    position: "absolute",
    transform: [
      {
        translateY: -1,
      },
    ],
    top: "50%",
    left: 30.5,
    borderStyle: "solid",
    borderColor: "#b9b9b9",
    borderTopWidth: 1,
    width: 82,
    height: 1,
  },
  frameView: {
    position: "relative",
    width: 268,
    height: 35,
    flexShrink: 0,
  },
  signUpText: {
    textDecoration: "underline",
  },
  signUpTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  signUpPressable: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Manrope",
    color: "#b9b9b9",
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    width: 268,
    height: 35,
  },
  signUpPressable1: {
    position: "relative",
    width: 268,
    height: 35,
    flexShrink: 0,
  },
  inputsView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "column",
    paddingHorizontal: 45,
    paddingVertical: 42,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoIcon: {
    position: "relative",
    width: 176.43,
    height: 178,
    flexShrink: 0,
  },
  logoView: {
    position: "absolute",
    top: 0,
    left: 88,
    width: 199,
    height: 266,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 33,
    paddingBottom: 34,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  loginView: {
    position: "relative",
    backgroundColor: "#181818",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login;
