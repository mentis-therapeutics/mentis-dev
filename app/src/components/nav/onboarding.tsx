import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserInput from "../../screens/onboarding/UserInput";
import Disclaimer from "../../screens/onboarding/Disclaimer";
import { stackScreenOptions } from './navOptions';


const OnboaridngStackNavigator = createNativeStackNavigator();
export function OnboaridngStack() {
return (
    <OnboaridngStackNavigator.Navigator
    initialRouteName="OnboardingRoute"
    screenOptions={stackScreenOptions}>
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