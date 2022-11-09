import * as React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpView}>
      <View style={styles.inputsView}>
        <View style={styles.emailView}>
          <View style={styles.rectangleView} />
          <TextInput
            style={styles.emailInputTextInput}
            keyboardType="default"
          />
          <View style={styles.frameView}>
            <Text style={styles.emailText}>Email</Text>
          </View>
        </View>
        <View style={[styles.passwordView, styles.mt9]}>
          <View style={styles.rectangleView1} />
          <TextInput
            style={styles.passwordInputTextInput}
            keyboardType="default"
            secureTextEntry
          />
          <View style={styles.frameView1}>
            <Text style={styles.passwordText}>Password</Text>
          </View>
        </View>
        <Pressable style={[styles.loginEmailPressable, styles.mt9]}>
          <View style={styles.rectangleView2} />
          <Text style={styles.signUpWithEmail}>Sign up with Email</Text>
        </Pressable>
        <View style={[styles.frameView2, styles.mt9]}>
          <Text style={styles.oRText}>OR</Text>
          <View style={styles.lineView} />
          <View style={styles.lineView1} />
        </View>
        <Pressable style={[styles.loginGooglePressable, styles.mt9]}>
          <View style={styles.rectangleView3} />
          <Text style={styles.signUpWithGoogle}>Sign up with Google</Text>
        </Pressable>
        <Pressable
          style={[styles.loginPressable1, styles.mt9]}
          onPress={() => navigation.navigate("Login")}
        >
          <Pressable
            style={styles.loginPressable}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginTxtText}>
              {`Already have an account? `}
              <Text style={styles.loginText}>Login</Text>
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
  rectangleView1: {
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
  passwordInputTextInput: {
    position: "absolute",
    top: 6,
    left: 25,
    width: 248,
    height: 48,
    color: "#B9B9B9",
  },
  passwordText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#b9b9b9",
    textAlign: "left",
  },
  frameView1: {
    position: "absolute",
    transform: [
      {
        translateY: -45.5,
      },
      {
        translateX: -116.5,
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
  passwordView: {
    position: "relative",
    width: 281,
    height: 75,
    flexShrink: 0,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#b9b9b9",
    width: 281,
    height: 60,
  },
  signUpWithEmail: {
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
  frameView2: {
    position: "relative",
    width: 268,
    height: 35,
    flexShrink: 0,
  },
  rectangleView3: {
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
  signUpWithGoogle: {
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
  loginText: {
    textDecoration: "underline",
  },
  loginTxtText: {
    lineBreak: "anywhere",
    width: "100%",
  },
  loginPressable: {
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
  loginPressable1: {
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
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 33,
    paddingBottom: 34,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  signUpView: {
    position: "relative",
    backgroundColor: "#181818",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignUp;
