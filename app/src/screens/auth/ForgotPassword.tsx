import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserTextInput, { emailTextInputProps } from "../../components/UserTextInput";
import FilledButton from "../../components/FilledButton";

import { CognitoUser } from "amazon-cognito-identity-js";

import { cognitoPool } from "../../utils/cognito_pool";


import { emailReg } from "../../utils/regex";
import { useAuthDispatch, useAuthState } from "../../auth/context";
import { forgotPassword } from "../../auth/actions";

const ForgotPassword = () => {
    const dispatch = useAuthDispatch();
    const { user } = useAuthState();

    const navigation = useNavigation();

    const [email, setEmail] = useState('');

    const [emailError, setEmailError] = useState('')

    async function onsubmit () {
        if (!emailReg.test(email)) {setEmailError("Invalid Email"); return}

        const user = new CognitoUser({
            Username: email,
            Pool: cognitoPool,
        });

        forgotPassword(email, dispatch, navigation)
    }
    
    return (
    <View style={styles.forgotPasswordView}>
        <View style={styles.bodyView}>
            <Pressable style={styles.fillerPressable} />
            <Text style={[styles.forgotPasswordText, styles.mt10]}>
            Forgot password?
            </Text>
            <Text style={[styles.yourPasswordMustBeDifferen, styles.mt10]}>
            Dont worry! It happens. Please enter the email associated with your
            account.
            </Text>
            <UserTextInput labelText="Email" helpText={emailError} hook={setEmail} props={emailTextInputProps}/>
            <FilledButton label="Submit" onPress={onsubmit} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    ml4: {
        marginLeft: 4,
      },
      mt10: {
        marginTop: 10,
      },
      unsafeHeaderHeight: {
        position: "relative",
        width: 374,
        height: 44,
        flexShrink: 0,
        overflow: "hidden",
      },
      vectorIcon: {
        position: "relative",
        width: 12.34,
        height: 20,
        flexShrink: 0,
      },
      leftPressable: {
        width: 20,
        height: 20,
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      logoSvgIcon: {
        position: "relative",
        width: 50,
        height: 50,
        flexShrink: 0,
      },
      vectorIcon1: {
        position: "relative",
        width: 12.34,
        height: 20,
        flexShrink: 0,
        display: "none",
      },
      rightView: {
        width: 20,
        height: 20,
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      safeHeaderView: {
        alignSelf: "stretch",
        height: 59,
        flexShrink: 0,
        flexDirection: "row",
        paddingHorizontal: 30,
        paddingVertical: 0,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "space-between",
      },
      headerView: {
        alignSelf: "stretch",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      },
      fillerPressable: {
        alignSelf: "stretch",
        flex: 1,
        position: "relative",
      },
      forgotPasswordText: {
        alignSelf: "stretch",
        position: "relative",
        fontSize: 24,
        lineHeight: 34,
        fontWeight: "600",
        fontFamily: "Manrope",
        color: "#fff",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        height: 50,
      },
      yourPasswordMustBeDifferen: {
        alignSelf: "stretch",
        position: "relative",
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "600",
        fontFamily: "Manrope",
        color: "#fff",
        textAlign: "left",
        marginBottom: 20,
      },
      helperText: {
        position: "relative",
        fontSize: 14,
        lineHeight: 16,
        fontFamily: "Roboto",
        color: "#de0000",
        textAlign: "left",
      },
      masterhelperdefaultView: {
        position: "absolute",
        top: 55,
        left: 0,
        flexDirection: "column",
        paddingLeft: 16,
        paddingTop: 6,
        boxSizing: "border-box",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      },
      rectangleView: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        borderRadius: 10,
        borderStyle: "solid",
        borderColor: "#fff",
        borderWidth: 1,
        height: 48,
      },
      masterborderdefaultView: {
        position: "absolute",
        top: 7,
        right: 0,
        left: 0,
        height: 48,
      },
      inputText: {
        position: "relative",
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Roboto",
        color: "#fff",
        textAlign: "left",
      },
      mastertextInputTextView: {
        position: "absolute",
        top: 19,
        left: 16,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      },
      labelText: {
        position: "relative",
        fontSize: 14,
        lineHeight: 16,
        fontFamily: "Roboto",
        color: "#fff",
        textAlign: "left",
      },
      vectorIcon2: {
        position: "relative",
        width: 6,
        height: 6,
        flexShrink: 0,
        display: "none",
      },
      masterlabeltextfieldView: {
        position: "absolute",
        top: 0,
        left: 12,
        backgroundColor: "#334166",
        flexDirection: "row",
        paddingHorizontal: 4,
        paddingVertical: 0,
        boxSizing: "border-box",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      },
      iconDefaultcalendar: {
        position: "absolute",
        top: 19,
        right: 12,
        width: 24,
        height: 24,
        display: "none",
      },
      userInputField: {
        alignSelf: "stretch",
        position: "relative",
        height: 80,
        flexShrink: 0,
      },
      labelText1: {
        position: "relative",
        fontSize: 18,
        lineHeight: 25,
        fontWeight: "600",
        fontFamily: "Manrope",
        color: "#334166",
        textAlign: "center",
      },
      primaryCTAPressable: {
        alignSelf: "stretch",
        borderRadius: 20,
        backgroundColor: "#fff",
        height: 50,
        flexShrink: 0,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      bodyView: {
        alignSelf: "stretch",
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 30,
        paddingTop: 42,
        paddingBottom: 50,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "flex-end",
      },
      forgotPasswordView: {
        position: "relative",
        backgroundColor: "#334166",
        flex: 1,
        width: "100%",
        height: 812,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      },
  mt9: {
    marginTop: 9,
  },
  forgotPasswordText1: {
  },
  text: {
    fontSize: 10,
  },
  text1: {
  },
  dontWorryIt: {
    fontSize: 16,
    color: "#fff",
  },
  dontWorryItHappensPlease: {
    margin: 0,
  },
  signUpTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  signUpText: {
    position: "absolute",
    top: 6,
    left: -0.5,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    width: 310,
    height: 83,
  },
  signUpPressable: {
    position: "relative",
    width: 310,
    height: 110,
    flexShrink: 0,
  },
  inputsView: {
    position: "absolute",
    marginLeft: -187.5,
    bottom: 0,
    left: "50%",
    width: 375,
    height: 490,
    flexDirection: "column",
    paddingHorizontal: 45,
    paddingVertical: 42,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
  },
  arrowLeftPressable: {
    position: "relative",
    width: 35,
    height: 35,
  },
  headerBarView: {
    position: "absolute",
    top: 30,
    left: 0,
    width: 67,
    height: 56,
    flexDirection: "row",
    paddingLeft: 17,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mentisText: {
    position: "absolute",
    top: 13,
    left: 5,
    fontSize: 40,
    lineHeight: 56,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 257,
    height: 46,
  },
  frameView: {
    position: "absolute",
    top: 46,
    left: 52,
    width: 268,
    height: 56,
  },
  frameView1: {
    position: "relative",
    width: 373,
    height: 165,
    flexShrink: 0,
  },
});

export default ForgotPassword;
