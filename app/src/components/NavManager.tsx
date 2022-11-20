
import React, { useEffect } from "react";

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

import Home from "../screens/Home";
import Progress from "../screens/Progress";
import Sessions from "../screens/Sessions";

import { goBack } from "@react-navigation/routers/lib/typescript/src/CommonActions";
import { AuthProvider, useAuthState } from "../auth/context";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataStore } from "@aws-amplify/datastore";

import { UserData } from "../models"

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
    initialRouteName="OnboardingRoute"
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

const AppStackNavigator = createNativeStackNavigator();
function AppStack() {
return (
    <AppStackNavigator.Navigator
    initialRouteName="AppRoute"
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
    <AppStackNavigator.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}/>
    </AppStackNavigator.Navigator>
);
}


    
export const NavManager = () => {
    const { session } = useAuthState();

    let onboarded = false;

    async function fetchOnboardedState() {
        const data = await DataStore.query(UserData)
        console.log(data)
        return false
    }

    useEffect(() => {
        // Check onboarded state
        fetchOnboardedState()
        .then( (result) => {
            onboarded = result;
        });
        //onboarded = true;
    },[session])

    return (
        //<SafeAreaView>
            <NavigationContainer>
            {
                session 
                ?
                    onboarded
                    ?
                    <OnboaridngStack/>
                    :
                    <AppStack/>
                :
                <AuthStack/>
            }
            </NavigationContainer>
        //</SafeAreaView>
    );
};