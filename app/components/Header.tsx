import * as React from "react";
import { StyleSheet, View, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerView}>
      <View style={styles.unsafeHeaderHeight} />
      <View style={styles.safeHeaderView}>
        <View style={styles.leftView}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <Image
          style={styles.logoSvgIcon}
          resizeMode="cover"
          source={require("../assets/logo-svg.png")}
        />
        <View style={styles.rightView}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  unsafeHeaderHeight: {
    position: "relative",
    width: 374,
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
  },
  vectorIcon: {
    position: "relative",
    width: 12.34,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  leftView: {
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoSvgIcon: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
  },
  vectorIcon1: {
    position: "relative",
    width: 12.34,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  rightView: {
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  safeHeaderView: {
    alignSelf: "stretch",
    height: 59,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerView: {
    alignSelf: "stretch",
    backgroundColor: "#334166",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Header;
