
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home as HomeIcon, Routing, Headphone } from 'iconsax-react-native'

import Home from '../../screens/Home'
import Progress from '../../screens/Progress'
import Sessions from '../../screens/Sessions'

const AppTabNavigator = createBottomTabNavigator();
export function AppStack() {
return (
    <AppTabNavigator.Navigator
    initialRouteName="AppRoute"
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon : any;

          if (route.name === 'Home') {
            icon = <HomeIcon color={ focused ? "#fff" : 'gray'} variant="Linear" size={30} />// <Icon name="home"/>
          } else if (route.name === 'Progress') {
            icon = <Routing color={ focused ? "#fff" : 'gray'}  variant="Linear" size={30} />
          } else {
            icon = <Headphone color={ focused ? "#fff" : 'gray'}  variant="Linear" size={30} />
          }
          // You can return any component that you like here!
          return icon;
        },
        tabBarStyle: {
            backgroundColor: "#334166",
            borderTopWidth: 0
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'gray',
    })}>
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
        component={Sessions}
        options={{ headerShown: false }}/>
    </AppTabNavigator.Navigator>
);
}