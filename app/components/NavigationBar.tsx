import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
  Pressable,
} from "react-native";

type IIcon = {
    label: string;
    icon: ImageSourcePropType;
    onPress(): void;
}

const Icon = ({label, icon, onPress} : IIcon) => {
    return (
        <Pressable style={styles.linkView} onPress={onPress}>
            <View style={styles.view}>
            <Image
                style={styles.icon}
                resizeMode="cover"
                source={icon}
            />
            </View>
            <Text style={styles.label}>{label}</Text>
    </Pressable>
    );
}


const NavigationBar = () => {
const navigation = useNavigation();

  return (
    <View style={styles.navigationBar}>
        <Icon label="Home" icon={require("../assets/vector13.png")} onPress={() => {navigation.navigate("Home")}} />
        <Icon label="Progress" icon={require("../assets/route-svg.png")} onPress={() => {navigation.navigate("Progress")}} />
        <Icon label="Sessions" icon={require("../assets/vector14.png")} onPress={() => {navigation.navigate("Sessions")}} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: "stretch",
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  view: {
    width: 30,
    height: 30,
    padding: 1,
    marginBottom: 3,
    flexDirection: "row",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  linkView: {
    width: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  label: {
    position: "relative",
    fontSize: 10,
    lineHeight: 11,
    fontWeight: "bold",
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "center",
  },
  navigationBar: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    flexShrink: 1,
    flexDirection: "row",
    paddingHorizontal: 50,
    paddingTop: 20,
    paddingBottom: 25,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default NavigationBar;
