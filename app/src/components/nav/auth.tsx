import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../screens/auth/Login";
import ForgotPassword from "../../screens/auth/ForgotPassword";
import Signup from "../../screens/auth/Signup";
import CreatePassword from "../../screens/auth/CreatePassword";
import ResetPassword from "../../screens/auth/ResetPassword";

import { ArrowLeft2 } from 'iconsax-react-native'
import { Pressable } from "react-native";

const AuthStackNavigator = createNativeStackNavigator();
export function AuthStack() {
    return (
        <AuthStackNavigator.Navigator
        initialRouteName="LoginRoute"
        screenOptions={ ({ route, navigation}) => ({
            headerStyle: {
                backgroundColor: '#334166',
            },
            headerLeft: (props) => (
                <Pressable {...props} onPress={() => {
                    navigation.goBack()
                }}  style={{alignSelf: "stretch",position: "relative",overflow: "hidden",width: "100%",height: "100%",}}>
                    <ArrowLeft2/>
                </Pressable>
                
            ),
            headerBackVisible: false,
            headerTintColor: "#fff",
            headerShadowVisible: false,
            headerTitle: (props) => <></>,
        })}>
        <AuthStackNavigator.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}/>
        <AuthStackNavigator.Screen
            name="Signup"
            component={Signup}
            options={{}}/>
        <AuthStackNavigator.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{}}/>
        <AuthStackNavigator.Screen
            name="CreatePassword"
            component={CreatePassword}
            options={{}}/>
        <AuthStackNavigator.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{}}/>
        </AuthStackNavigator.Navigator>
    );
    }
    