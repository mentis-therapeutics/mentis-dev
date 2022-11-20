import React,  { useState, useEffect } from "react";
import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import UserTextInput, {emailTextInputProps, passwordTextInputProps} from "../../components/UserTextInput";

import FilledButton from "../../components/FilledButton";

import {CognitoUser, AuthenticationDetails, CognitoUserPool, CognitoUserSession} from 'amazon-cognito-identity-js';
import {cognitoPool} from '../../utils/cognito_pool';

import { emailReg, passReg } from "../../utils/regex";
import { login, getSession } from "../../auth/actions";
import { useAuthDispatch, useAuthState } from "../../auth/context";
import { getStoredUser } from "../../auth/reducer";



type FormError = {
  emailError: string,
  passwordError: string
}

const Login = () => {
    const navigation = useNavigation();
    
    const dispatch = useAuthDispatch();
    const { session, loading, errorMessage } = useAuthState();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [formError, setFormError] = useState<FormError>({emailError: "", passwordError: ""})

    // -------------------- EFFECTS -------------------- //
    useEffect(() => {
        getSession(dispatch); 
    }, []);

    // -------------------- ACTIONS -------------------- //

    async function onLogin () {
        if (!emailReg.test(email)) {setFormError({emailError:"Invalid Email", passwordError: ""}); return}

        const user = new CognitoUser({
            Username: email,
            Pool: cognitoPool,
        });

        const authDetails = {
            email: email,
            Password: password,
        };
        /*
        Auth.signIn(email, password)
        .then(user => {
            /*if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                dispatch({ type: 'LOGIN_NEWPASS', payload:{user} })
                navigation.navigate("CreatePassword");
            } else {
                // other situations
            }
        }).catch(e => {
            if (e.name === 'PasswordResetRequiredException') {
                dispatch({ type: 'LOGIN_NEWPASS', payload:{user} })
                navigation.navigate("CreatePassword");
            } else {
                // other situations
            }
            
        });
        */
        
        login({email, password}, dispatch, navigation)
        .then( (error) => {
            setFormError({emailError: "", passwordError: "Unable to login, check email & password"});
        });
    






        
        /*
        dispatch({type: 'REQUEST_LOGIN'});
        user.authenticateUser(authDetails, {
            onSuccess: async session => { 
                dispatch({ type: 'LOGIN_SUCCESS', payload:{user, session}});
                //navigation.navigate('Disclaimer');
            },
            onFailure: error => {
                dispatch({ type: 'LOGIN_ERROR', error:error});
                // TODO: add proper checking to this
                console.log(error);
                setFormError({emailError: "", passwordError: "Unable to login, check email & password"});
            },
            /*
            mfaRequired: function(codeDeliveryDetails) {
                // MFA is required to complete user authentication.
                // Get the code from user and call
                //user.sendMFACode(mfaCode, this)
            },
            
            newPasswordRequired: function(userAttributes, requiredAttributes) {
                dispatch({ type: 'UPDATE_USER', payload:{user}});
                console.log('New password Required');
                navigation.navigate("CreatePassword");
            }
        });
        */

  }

    return (
    <View style={styles.loginView}>
        <View style={styles.bodyView}>
            <Pressable style={styles.fillerPressable} />
            <Text style={[styles.signUpText, styles.mt10]}>Login</Text>
            <UserTextInput labelText="Email" helpText={formError.emailError} hook={setEmail} props={emailTextInputProps} />
            <UserTextInput labelText="Password" helpText={formError.passwordError} hook={setPassword} icon={require("../../assets/icondefaultcalendar.png")} props={passwordTextInputProps}/>
            <Pressable
                style={[styles.forgotPasswordPressable, styles.mt10]}
                onPress={() => navigation.navigate("ForgotPassword")}
            >
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </Pressable>
            <FilledButton label="Login" onPress={onLogin} />
            {/* SIGN UP
            <Pressable
                style={[styles.loginPressable, styles.mt9]}
                onPress={() => navigation.navigate("Signup")}
                >
                <Text style={[styles.loginText, styles.mt10]}>
                {`New to Mentis? `}
                <Text style={styles.registerText}>Register</Text>
                </Text>
            </Pressable>
            */}
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
    display: "none",
    },
    leftView: {
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
    signUpText: {
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
    forgotPasswordText: {
    alignSelf: "stretch",
    fontSize: 14,
    textDecorationLine: "underline",
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
    },
    forgotPasswordPressable: {
    position: "relative",
        marginBottom: 30,
    },
    registerText: {
    textDecorationLine: "underline",
    },
    loginText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "center",
    },
    bodyView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingTop: 42,
    paddingBottom: 50,
    alignItems: "center",
    justifyContent: "flex-end",
    },
    loginView: {
    position: "relative",
    backgroundColor: "#334166",
    flex: 1,
    width: "100%",
    height: 812,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    },
  signUpPressable: {
    position: "relative",
    width: 310,
    height: 110,
    flexShrink: 0,
  },
  forgotPasswordPressable1: {
    position: "relative",
    width: 304,
    height: 5,
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
    marginLeft: -187.5,
    bottom: 20,
    left: "50%",
    width: 375,
    height: 490,
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
    top: 0,
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
    display: "none",
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

export default Login;
