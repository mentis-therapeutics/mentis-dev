
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {HeaderBackButton} from '@react-navigation/elements';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Login from "../screens/auth/Login";
import ForgotPassword from "../screens/auth/ForgotPassword";
import Signup from "../screens/auth/Signup";
import CreatePassword from "../screens/auth/CreatePassword";
import ResetPassword from "../screens/auth/ResetPassword";

import UserInput from "../screens/onboarding/UserInput";
import Disclaimer from "../screens/onboarding/Disclaimer";
import { goBack } from "@react-navigation/routers/lib/typescript/src/CommonActions";
import { AuthProvider, useAuthState } from "../auth/context";
import { SafeAreaView } from "react-native-safe-area-context";


const AuthStackNavigator = createNativeStackNavigator();
function AuthStack() {
    return (
        <AuthStackNavigator.Navigator
        initialRouteName="LoginRoute"
        screenOptions={ ({ route, navigation}) => ({
            headerStyle: {
                backgroundColor: '#334166',
            },
            headerLeft: (props) => (
                <HeaderBackButton
                    {...props}
                    style={{marginLeft: 5, padding: 5}}
                    onPress={() => {
                        navigation.goBack()
                    }}  
                />
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
    
const OnboaridngStackNavigator = createNativeStackNavigator();
function OnboaridngStack() {
return (
    <OnboaridngStackNavigator.Navigator
    initialRouteName="LoginRoute"
    screenOptions={ ({ route, navigation}) => ({
        headerStyle: {
            backgroundColor: '#334166',
        },
        headerLeft: (props) => (
            <HeaderBackButton
                {...props}
                style={{marginLeft: 5, padding: 5}}
                onPress={() => {
                    navigation.goBack()
                }}  
            />
        ),
        headerBackVisible: false,
        headerTintColor: "#fff",
        headerShadowVisible: false,
        headerTitle: (props) => <></>,
    })}>
    <OnboaridngStackNavigator.Screen
        name="Disclaimer"
        component={Disclaimer}
        options={{ headerShown: false }}/>
    <OnboaridngStackNavigator.Screen
        name="UserInput"
        component={UserInput}
        options={{}}/>
    </OnboaridngStackNavigator.Navigator>
);
}
    
export const NavManager = () => {
    const { session } = useAuthState();

    return (
        //<SafeAreaView>
            <NavigationContainer>
            {
                session ? <OnboaridngStack/> : <AuthStack/>
            }
            </NavigationContainer>
        //</SafeAreaView>
    );
};