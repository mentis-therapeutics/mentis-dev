import React,  { useState } from "react";
import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from 'firebase/compat/app';

import { SignInWithEmail } from '../modules/auth';
import { Providers } from '../config/firebase';

import MyTextInput from "../components/MyTextInput";
import OutlineButton from "../components/OutlineButton";
import FilledButton from "../components/FilledButton";

import config from '../config/config';

type FormError = {
  emailError: string,
  passwordError: string
}

const Login = () => {
  const navigation = useNavigation();

  const [authenticating, setAuthenticating] = useState<boolean>(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [formError, setFormError] = useState<FormError>({emailError: "", passwordError: ""})

  const signInWithEmail = () => {
      let fError = {emailError: "", passwordError: ""} as FormError;
      

      const emailExp: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


      //setAuthenticating(true);

      SignInWithEmail(email, password)
          .then(result => {
            navigation.navigate("Disclaimer")
          })
          .catch(error => {
              fError.passwordError =  "Unable to login, check email & password";

              if(!emailExp.test(email)){
                fError.emailError = "Invalid email";
              }
        
              if (password.length < 6){
                fError.passwordError = "Password has to be at least 6 characters";
              }
              setFormError(fError);
          });
        

      
      //setAuthenticating(false);
  }

  return (
    <View style={styles.loginView}>
      <View style={styles.inputsView}>
        <MyTextInput type="Email" inputError={formError.emailError} hook={setEmail}/>
        <MyTextInput secureText type="Password" inputError={formError.passwordError} hook={setPassword}/>
        <FilledButton  text="Login with Email" onPress={signInWithEmail}/>
        <View style={[styles.frameView, styles.mt9]}>
          <Text style={styles.oRText}>OR</Text>
          <View style={styles.lineView} />
          <View style={styles.lineView1} />
        </View>
        <OutlineButton text="Login with Google" onPress={() => {console.log("Google Click")}}/>
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
    marginBottom: 30,
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
