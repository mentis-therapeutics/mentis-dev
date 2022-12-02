import React from "react"
import {Home, Routing, Headphone, ArrowLeft2} from 'iconsax-react-native'
import { Pressable } from 'react-native';

export const stackScreenOptions =  ({ route, navigation}) => ({
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
})

export const tabScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      if (route.name === 'Home') {
        return <Home color={ focused ? "#fff" : 'gray'} variant="Linear" size={30} />// <Icon name="home"/>
      } else if (route.name === 'Progress') {
        return <Routing color={ focused ? "#fff" : 'gray'}  variant="Linear" size={30} />
      } else {
        return <Headphone color={ focused ? "#fff" : 'gray'}  variant="Linear" size={30} />
      }
    },
    tabBarStyle: {
        backgroundColor: "#334166",
        borderTopWidth: 0
    },
    tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: 'gray',
}) 