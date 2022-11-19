import React,  { useState, useEffect } from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserTextInput, { passwordTextInputProps } from "../../components/UserTextInput";
import FilledButton from "../../components/FilledButton";

import { AuthenticationDetails, CognitoUser, UserAgent } from "amazon-cognito-identity-js";

import { passReg } from "../../utils/regex";
import { cognitoPool } from "../../utils/cognito_pool";
import { useAuthDispatch, useAuthState } from "../../auth/context";
import { createPassword, login } from "../../auth/actions";
import { Auth } from "aws-amplify";

type FormError = {
    passwordError: string
    confirmPasswordError: string,
}

const CreatePassword = () => {
    const navigation = useNavigation();
    
    const dispatch = useAuthDispatch();

    const { user } = useAuthState();

    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const [formError, setFormError] = useState<FormError>({passwordError: "", confirmPasswordError: ""})


    async function onSubmit () {
        let fError = {passwordError: "", confirmPasswordError: ""}
        let errorRaised = false;

        if (!passReg.test(password)) {
            fError.passwordError = "Password must be more than 8 chars and contain one uppercase & one number";
            errorRaised = true;
        }

        if (password != confPassword) {
            fError.confirmPasswordError = "Passwords dont match";
            errorRaised = true;
        }

        if (errorRaised){ setFormError(fError); return }

        if (!user) return;

        createPassword(user, password, dispatch);
    }
  
    return (
    <View style={styles.createPasswordView}>
        <View style={styles.bodyView}>
            <Pressable style={styles.fillerPressable} />
            <Text style={[styles.createANewPassword, styles.mt10]}>
                Create a new password
            </Text>
            <Text style={[styles.yourPasswordMustBeDifferen, styles.mt10]}>
                Please create a new password for your account.
            </Text>
            <UserTextInput labelText="Password" helpText={formError.passwordError} hook={setPassword} props={passwordTextInputProps}/>
            <UserTextInput labelText="Confirm Password" helpText={formError.confirmPasswordError} hook={setConfPassword} props={passwordTextInputProps}/>
            <FilledButton label="Submit" onPress={onSubmit}/>
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
      createANewPassword: {
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
        marginBottom: 20
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
      createPasswordView: {
        position: "relative",
        backgroundColor: "#334166",
        flex: 1,
        width: "100%",
        height: 812,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      },
});

export default CreatePassword;
