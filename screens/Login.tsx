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
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt9: {
    marginTop: 9,
  },
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
  loginWithEmail: {
    position: "absolute",
    marginTop: -18,
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
  loginEmailPressable: {
    position: "relative",
    width: 312,
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
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 268,
    height: 35,
  },
  lineView: {
    position: "absolute",
    marginTop: -1,
    top: "50%",
    left: 156.5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 82,
    height: 1,
  },
  lineView1: {
    position: "absolute",
    marginTop: -1,
    top: "50%",
    left: 30.5,
    borderStyle: "solid",
    borderColor: "#fff",
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
    color: "#fff",
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
    marginLeft: -203,
    bottom: 0,
    left: "50%",
    flexDirection: "column",
    paddingHorizontal: 45,
    paddingVertical: 42,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  logoIcon: {
    position: "absolute",
    marginLeft: -93.5,
    top: 0,
    left: "50%",
    width: 200,
    height: 200,
  },
  loginView: {
    position: "relative",
    backgroundColor: "#334166",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login;
