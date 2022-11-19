const Stack = createNativeStackNavigator();
import * as React from "react";


import { NavigationContainer } from "@react-navigation/native";
import {HeaderBackButton} from '@react-navigation/elements';

import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { AuthProvider } from "./auth/context";
import { NavManager } from "./components/NavManager";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };
  return (
    <>
     <AuthProvider>
        <IconRegistry icons={[MaterialIconsPack]} />
        <ApplicationProvider {...eva} theme={eva.light}>
            <NavManager/>
        </ApplicationProvider>
      </AuthProvider>
    </>
  );
};

/*
<Stack.Navigator screenOptions={{ headerShown: false }}>
<Stack.Screen
name="Login"
component={Login}
options={{ headerShown: false }}
/>
<Stack.Screen
name="ForgotPassword"
component={ForgotPassword}
options={{ headerShown: false }}
/>
<Stack.Screen
name="Signup"
component={Signup}
options={{ headerShown: false }}
/>
<Stack.Screen
name="Disclaimer"
component={Disclaimer}
options={{ headerShown: false }}
/>
<Stack.Screen
name="CreatePassword"
component={CreatePassword}
options={{ headerShown: false }}
/>
<Stack.Screen
name="ResetPassword"
component={ResetPassword}
options={{ headerShown: false }}
/>
<Stack.Screen
name="Home"
component={Home}
options={{ headerShown: false }}
/>
<Stack.Screen
name="Sessions"
component={Sessions}
options={{ headerShown: false }}
/>
<Stack.Screen
name="SessionDetail"
component={SessionDetail}
options={{ headerShown: false }}
/>
<Stack.Screen
name="UserInput"
component={UserInput}
options={{ headerShown: false }}
/>
<Stack.Screen
name="Progress"
component={Progress}
options={{ headerShown: false }}
/>
<Stack.Screen
name="Call"
component={Call}
options={{ headerShown: false }}
/>
</Stack.Navigator>
*/
export default App;