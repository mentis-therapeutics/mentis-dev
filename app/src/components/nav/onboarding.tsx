import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserInput from "../../screens/onboarding/UserInput";
import Disclaimer from "../../screens/onboarding/Disclaimer";

import {ArrowLeft} from 'iconsax-react-native'
import { Pressable } from 'react-native';
const OnboaridngStackNavigator = createNativeStackNavigator();
export function OnboaridngStack() {
return (
    <OnboaridngStackNavigator.Navigator
    initialRouteName="OnboardingRoute"
    screenOptions={ ({ route, navigation}) => ({
        headerStyle: {
            backgroundColor: '#334166',
        },
        headerLeft: (props) => (
            <Pressable {...props} onPress={() => {
                navigation.goBack()
            }}  style={{alignSelf: "stretch",position: "relative",overflow: "hidden",width: "100%",height: "100%",}}>
                <ArrowLeft/>
            </Pressable>
            
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