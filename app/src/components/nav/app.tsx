
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from '../../screens/Home'
import Calendly from '../../screens/Calendly'
import Progress from '../../screens/Progress'
import Sessions from '../../screens/Sessions'
import SessionDetail from '../../screens/SessionDetail'
import VideoCall from "../../screens/VideoCall";

import { stackScreenOptions, tabScreenOptions } from "./navOptions";

const SessionStackNavigator = createNativeStackNavigator()
const SessionStack = () => {
    return (
    <SessionStackNavigator.Navigator
            initialRouteName="OnboardingRoute"
            screenOptions={stackScreenOptions}>
        <SessionStackNavigator.Screen
            name="SessionsPage"
            component={Sessions}
            options={{ headerShown: false }}/>
        <SessionStackNavigator.Screen
            name="SessionDetail"
            component={SessionDetail}
            options={{}}/>
    </SessionStackNavigator.Navigator>
    );
}


const AppTabNavigator = createBottomTabNavigator();
export function AppStack() {
return (
    <AppTabNavigator.Navigator
    initialRouteName="AppRoute"
    screenOptions={tabScreenOptions}>
    <AppTabNavigator.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}/>
    <AppTabNavigator.Screen
        name="Progress"
        component={Progress}
        options={{ headerShown: false }}/>
    <AppTabNavigator.Screen
        name="Sessions"
        component={VideoCall}
        options={{ headerShown: false }}/>
    </AppTabNavigator.Navigator>
);
}