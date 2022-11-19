import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserTextInput, { emailTextInputProps, passwordTextInputProps } from "../../components/UserTextInput";
import FilledButton from "../../components/FilledButton";

import { emailReg, passReg } from "../../utils/regex";

import { cognitoPool } from "../../utils/cognito_pool";

type FormError = {
    emailError: string,
    passwordError: string,
    confirmPasswordError: string,
  }

const Signup = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formError, setFormError] = useState<FormError>({emailError: "", passwordError: "", confirmPasswordError: ""})


    const onSubmit = () => {
        let fError: FormError = {emailError: "", passwordError: "", confirmPasswordError: ""};
        let errorRaised = false;

        if (!emailReg.test(email)) {
            fError.emailError = "Invalid Email";
            errorRaised = true;
        }

        /*if (!passReg.test(password)) {
            setFormError({...formError, passwordError : "Password must be more than 8 chars. Contain one uppercase & one number"});
            errorRaised = true;
        }*/

        if (password != confirmPassword) {
            fError.confirmPasswordError = "Passwords dont match";
            errorRaised = true;
        }

        if (errorRaised) { setFormError(fError); return; }

        // FIXME: NEED TO WORK OUT DISPATCH USER AND SESSION DATA
        cognitoPool.signUp(email, password, [], [], (err, data) => {
            if (err) {
                switch (err.name) {
                case 'InvalidParameterException':
                    setFormError({emailError:"Invalid Email", passwordError:"", confirmPasswordError:""})
                case 'InvalidPasswordException':
                    setFormError({emailError:"", passwordError:"Password must be more than 8 chars. Contain one uppercase & one number",  confirmPasswordError:""})
                case 'UsernameExistsException':
                    setFormError({emailError:"", passwordError:"", confirmPasswordError:"Account already exists"});
                default:
                    console.log(err)
                }
                return;
            }
            
            // Dispatch login
        });
        
    }

    return (
    <View style={styles.signupView}>
        <View style={styles.bodyView}>
            <Pressable style={styles.fillerPressable} />
            <Text style={[styles.signupText, styles.mt10]}>Sign up</Text>
            <UserTextInput labelText="Email" helpText={formError.emailError} hook={setEmail} props={emailTextInputProps}/>
            <UserTextInput labelText="Password" helpText={formError.passwordError} hook={setPassword} props={passwordTextInputProps}/>
            <UserTextInput labelText="Confirm Password" helpText={formError.confirmPasswordError} hook={setConfirmPassword} props={passwordTextInputProps}/>
            <Text style={[styles.tCText, styles.mt10]}>
                {`By signing up, you agree to our `}
                <Text style={styles.termsConditions}>{`Terms & Conditions`}</Text>
                {` & `}
                <Text style={styles.privacyPolicyText}>Privacy Policy</Text>
            </Text>
            <FilledButton text="Sign Up" onPress={onSubmit} />
            <Text style={[styles.loginText1, styles.mt10]}>
                <Text style={styles.loginTxtText}>
                {`Already have an account? `}
                <Text style={styles.loginText}>Login</Text>
                </Text>
            </Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
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
      signupText: {
        alignSelf: "stretch",
        position: "relative",
        fontSize: 24,
        lineHeight: 34,
        fontFamily: "Manrope",
        color: "#fff",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        height: 50,
      },
      termsConditions: {
        textDecorationLine: "underline",
      },
      privacyPolicyText: {
        textDecorationLine: "underline",
      },
      tCText: {
        alignSelf: "stretch",
        position: "relative",
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "500",
        fontFamily: "Manrope",
        color: "#fff",
        textAlign: "left",
        marginBottom: 20,
      },
      loginText: {
        textDecorationLine: "underline",
      },
      loginTxtText: {
        width: "100%",
      },
      loginText1: {
        position: "relative",
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
      bodyView: {
        alignSelf: "stretch",
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 30,
        paddingBottom: 50,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "flex-end",
      },
      signupView: {
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
    width: "100%",
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
  signUpPressable: {
    position: "relative",
    width: 310,
    height: 110,
    flexShrink: 0,
  },
  tCTxtText: {
    width: "100%",
  },
  tCPressable: {
    position: "relative",
    width: 304,
    height: 44,
    flexShrink: 0,
  },
  loginPressable: {
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
});

export default Signup;
