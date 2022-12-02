
import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { useAuthDispatch, useAuthState } from "../auth/context";

import { DataStore } from 'aws-amplify'

import { User } from "../models"

import { AppStack } from "./nav/app";
import { AuthStack } from "./nav/auth"
import { OnboaridngStack } from "./nav/onboarding";
import { getSession } from "../auth/actions";


export const NavManager = () => {
    const { onboarded, session } = useAuthState();
    const dispatch = useAuthDispatch();

    async function fetchOnboardedState() {   
        if (!session) return;

        let data = await DataStore.query(User);

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