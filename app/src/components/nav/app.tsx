
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
import { SessionNavigatorParamList } from "./types";
import { getFocusedRouteNameFromRoute, useRoute } from "@react-navigation/core";



const SessionStackNavigator = createNativeStackNavigator<SessionNavigatorParamList>()
const SessionStack = ({ navigation, route }) => {
    const tabHiddenRoutes = ["VideoCall","Calendly"];

    if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
        navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
        // This is shit
        navigation.setOptions({tabBarStyle: {display: 'flex', backgroundColor: "#334166", borderTopWidth: 0}});
    }

    return (
    <SessionStackNavigator.Navigator
            initialRouteName="Session"
            screenOptions={stackScreenOptions}>
        <SessionStackNavigator.Screen
            name="Session"
            component={Sessions}
            options={{ headerShown: false }}/>
        <SessionStackNavigator.Screen
            name="SessionDetail"
            component={SessionDetail}
            options={{ headerShown: true }}/>
        <SessionStackNavigator.Screen
            name="Calendly"
            component={Calendly}
            options={{ headerShown: true }}/>
        <SessionStackNavigator.Screen
            name="VideoCall"
            component={VideoCall}
            options={{ headerShown: false }}/>
    </SessionStackNavigator.Navigator>
    );
}


const AppTabNavigator = createBottomTabNavigator();
export function AppStack() {
    return (
        <AppTabNavigator.Navigator
        initialRouteName="Home"
        screenOptions={tabScreenOptions}>
        <AppTabNavigator.Screen
            name="Home"
            component={Home}
            options={{ headerShown: true }}/>
        <AppTabNavigator.Screen
            name="Progress"
            component={Progress}
            options={{ headerShown: true }}/>
        <AppTabNavigator.Screen
            name="Sessions"
            component={SessionStack}
            options={{ 
                headerShown: false,
            }}/>
        </AppTabNavigator.Navigator>
    );
}