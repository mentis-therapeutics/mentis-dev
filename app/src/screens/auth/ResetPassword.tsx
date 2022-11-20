import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserTextInput, { passwordTextInputProps } from "../../components/UserTextInput";
import FilledButton from "../../components/FilledButton";

import { emailReg, passReg } from "../../utils/regex";

import { cognitoPool } from "../../utils/cognito_pool";

import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { useAuthDispatch, useAuthState } from "../../auth/context";

import { confirmPassword, login } from "../../auth/actions";

type FormError = {
    codeError: string,
    passwordError: string,
    confirmPasswordError: string,
  }

const ResetPassword = () => {

    const dispatch = useAuthDispatch();
    const { user } = useAuthState();

    const navigation = useNavigation();

    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPassword] = useState('');
    const [formError, setFormError] = useState<FormError>({codeError: "", passwordError: "", confirmPasswordError: ""})


    const onSubmit = async () => {
        let fError: FormError = {codeError: "", passwordError: "", confirmPasswordError: ""};
        let errorRaised = false;

        /*if (!passReg.test(password)) {
            setFormError({...formError, passwordError : "Password must be more than 8 chars. Contain one uppercase & one number"});
            errorRaised = true;
        }*/

        if (password != confirmPass) {
            fError.confirmPasswordError = "Passwords dont match";
            errorRaised = true;
        }

        if (errorRaised) {setFormError(fError); return;}

        if (!user) return

        await confirmPassword(user, code, password, dispatch)
        await login({email: user, password}, dispatch, navigation)
    }

    return (
    <View style={styles.resetPasswordView}>
        <View style={styles.bodyView}>
            <Pressable style={styles.fillerPressable} />
            <Text style={[styles.resetYourPassword, styles.mt10]}>
                Reset your password
            </Text>
            <Text style={[styles.yourPasswordMustBeDifferen, styles.mt10]}>
                Please create a new password for your account.
            </Text>
            <UserTextInput labelText="Verification Code" helpText={formError.codeError} hook={setCode} props={{autoCapitalize: "none", spellCheck: false}}/>
            <UserTextInput labelText="New Password" helpText={formError.passwordError} hook={setPassword} props={passwordTextInputProps}/>
            <UserTextInput labelText="Confirm Password" helpText={formError.confirmPasswordError} hook={setConfirmPassword} props={passwordTextInputProps}/>
            <FilledButton label="Submit" onPress={onSubmit} />
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
      resetYourPassword: {
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
      },
      userInputField: {
        alignSelf: "stretch",
        position: "relative",
        height: 80,
        flexShrink: 0,
      },
      helperText1: {
        position: "relative",
        fontSize: 14,
        lineHeight: 16,
        fontFamily: "Roboto",
        color: "#de0000",
        textAlign: "left",
      },
      masterhelperdefaultView1: {
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
      rectangleView1: {
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
      masterborderdefaultView1: {
        position: "absolute",
        top: 7,
        right: 0,
        left: 0,
        height: 48,
      },
      inputText1: {
        position: "relative",
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Roboto",
        color: "#fff",
        textAlign: "left",
      },
      mastertextInputTextView1: {
        position: "absolute",
        top: 19,
        left: 16,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      },
      labelText1: {
        position: "relative",
        fontSize: 14,
        lineHeight: 16,
        fontFamily: "Roboto",
        color: "#fff",
        textAlign: "left",
      },
      vectorIcon3: {
        position: "relative",
        width: 6,
        height: 6,
        flexShrink: 0,
        display: "none",
      },
      masterlabeltextfieldView1: {
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
      iconDefaultcalendar1: {
        position: "absolute",
        top: 19,
        right: 12,
        width: 24,
        height: 24,
      },
      userInputField1: {
        alignSelf: "stretch",
        position: "relative",
        height: 80,
        flexShrink: 0,
      },
      labelText2: {
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
      resetPasswordView: {
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
  signUpText: {
    fontSize: 24,
  },
  signUpText1: {
  },
  text: {
    fontSize: 10,
  },
  text1: {
    margin: 0,
  },
  signUpTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  signUpPressable: {
    position: "relative",
    width: 310,
    height: 110,
    flexShrink: 0,
  },
  signUpText2: {
    position: "absolute",
    top: 13,
    left: 12.5,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    width: 297,
    height: 83,
  },
  forgotPasswordText: {
    fontSize: 24,
    color: "#fff",
  },
  forgotPasswordText1: {
  },
  dontWorryIt: {
    fontSize: 16,
    color: "#fff",
  },
  termsConditions: {
  },
  privacyPolicyText: {
  },
  tCTxtText: {
    width: "100%",
  },
  tCText: {
    position: "absolute",
    top: -7,
    left: -0.5,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    width: 321,
    height: 42,
  },
  tCPressable: {
    position: "relative",
    width: 304,
    height: 44,
    flexShrink: 0,
  },
  loginText: {
  },
  loginTxtText: {
    width: "100%",
  },
  loginText1: {
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
  loginPressable: {
    position: "relative",
    width: 268,
    height: 35,
    flexShrink: 0,
  },
  inputsView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    width: 375,
    flexDirection: "column",
    paddingHorizontal: 45,
    paddingTop: 42,
    paddingBottom: 25,
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
  signupView: {
    position: "relative",
    backgroundColor: "#334166",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ResetPassword;
