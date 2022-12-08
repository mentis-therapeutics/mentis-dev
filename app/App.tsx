
import React from "react";


import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";


import { AuthProvider } from "./src/auth/context";
import { NavManager } from "./src/components/NavManager";

import {Amplify, AuthModeStrategyType} from "aws-amplify";

import awsmobile from "./src/aws-exports";
import { getSession } from "./src/auth/actions";
import { LogBox } from "react-native";

import { AUTH_CONFIG } from "./src/.env";


// Annoying amplify issue
LogBox.ignoreLogs(['Require cycle: node_modules'])

Amplify.configure({...awsmobile,
    Auth: AUTH_CONFIG,
    DataStore: {
        authModeStrategyType: AuthModeStrategyType.DEFAULT
    }
})


const App = () => {
  return (
    <AuthProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
            <NavManager/>
        </ApplicationProvider>
    </AuthProvider>
  );
};

export default App;
