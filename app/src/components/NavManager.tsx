
import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";

import {
  StyleSheet,
} from "react-native";

import { useAuthDispatch, useAuthState } from "../auth/context";

import { DataStore } from 'aws-amplify'

import { UserData } from "../models"

import { AppStack } from "./nav/app";
import { AuthStack } from "./nav/auth"
import { OnboaridngStack } from "./nav/onboarding";


export const NavManager = () => {
    const { onboarded, session, user } = useAuthState();
    const dispatch = useAuthDispatch();

    async function fetchOnboardedState() {   
        if (!session) return;

        let data = await DataStore.query(UserData);

        if (data.length == 0) return;

        if (data[0].onboarded) {dispatch({type:'ONBOARDED'})};
    }

    useEffect(() => {
        // Check onboarded state
        fetchOnboardedState()
    }, [session])

    return (
        //<SafeAreaView>
        // This creates flickering on login. Need to resolve
            <NavigationContainer>
            {
        
                session
                ?
                    onboarded
                    ?
                    <AppStack/>
                    :
                    <OnboaridngStack/>
                :
                    <AuthStack/>
            }
            </NavigationContainer>
        //</SafeAreaView>
    );
};

const styles = StyleSheet.create({
    icon: {
      alignSelf: "stretch",
      position: "relative",
      overflow: "hidden",
      width: "100%",
      height: "100%",
}})