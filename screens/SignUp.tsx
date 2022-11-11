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
  emailView: {
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
    color: "#fff",
    textAlign: "left",
  },
  frameView1: {
    position: "absolute",
    top: -8,
    left: 23,
    backgroundColor: "#334166",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  passwordView: {
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
  signUpWithEmail: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -133,
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
    backgroundColor: "#334166",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 312,
    height: 60,
  },
  signUpWithGoogle: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -139,
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
  loginGooglePressable: {
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: 312,
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
    color: "#fff",
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
    width: 375,
    flexDirection: "column",
    paddingHorizontal: 45,
    paddingVertical: 42,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoIcon: {
    position: "absolute",
    marginLeft: -93.5,
    top: 0,
    left: "50%",
    width: 200,
    height: 200,
  },
  signUpView: {
    position: "relative",
    backgroundColor: "#334166",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignUp;
