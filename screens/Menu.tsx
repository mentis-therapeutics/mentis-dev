import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Menu = () => {
  return (
    <View style={styles.menuView}>
      <View style={styles.containerView}>
        <Image
          style={styles.frame113Componentsvg}
          resizeMode="cover"
          source={require("../assets/frame-113-componentsvg.png")}
        />
        <View style={styles.groupView}>
          <View style={styles.frameView}>
            <Text style={styles.coloniseText}>Colonise</Text>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame-123.png")}
            />
          </View>
          <View style={styles.frameView1}>
            <Text style={styles.fruitText}>Fruit</Text>
            <Image
              style={styles.frameIcon1}
              resizeMode="cover"
              source={require("../assets/frame-125.png")}
            />
          </View>
          <View style={styles.frameView2}>
            <Text style={styles.dehydrateText}>Dehydrate</Text>
            <Image
              style={styles.frameIcon2}
              resizeMode="cover"
              source={require("../assets/frame-124.png")}
            />
          </View>
        </View>
        <View style={styles.groupView1}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <View style={styles.rectangleView1} />
          <View style={styles.rectangleView2} />
          <Text style={styles.fruitText1}>Fruit</Text>
          <Text style={styles.dehydrateText1}>Dehydrate</Text>
          <Text style={styles.settingsText}>Settings</Text>
          <Text style={styles.growText}>Grow</Text>
          <Image
            style={styles.frameIcon3}
            resizeMode="cover"
            source={require("../assets/frame-1241.png")}
          />
          <Image
            style={styles.frameIcon4}
            resizeMode="cover"
            source={require("../assets/frame-1251.png")}
          />
          <Image
            style={styles.frame123Componentsvg}
            resizeMode="cover"
            source={require("../assets/frame-123-componentsvg.png")}
          />
          <Image
            style={styles.frameIcon5}
            resizeMode="cover"
            source={require("../assets/frame-119.png")}
          />
        </View>
        <Image
          style={styles.logoComponentsvgIcon}
          resizeMode="cover"
          source={require("../assets/logo-componentsvg.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame113Componentsvg: {
    position: "absolute",
    top: 583,
    left: 0,
    width: 375,
    height: 112.97,
    overflow: "hidden",
  },
  coloniseText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#303033",
    textAlign: "left",
  },
  frameIcon: {
    position: "relative",
    width: 28,
    height: 28,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 32,
    backgroundColor: "#ffda85",
    width: 295,
    height: 64,
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 8,
    paddingRight: 18,
    paddingBottom: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fruitText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#303033",
    textAlign: "left",
  },
  frameIcon1: {
    position: "relative",
    width: 28,
    height: 28,
    flexShrink: 0,
  },
  frameView1: {
    position: "absolute",
    top: 80,
    left: 0,
    borderRadius: 32,
    backgroundColor: "#ffda85",
    width: 295,
    height: 64,
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 8,
    paddingRight: 18,
    paddingBottom: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dehydrateText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#303033",
    textAlign: "left",
  },
  frameIcon2: {
    position: "relative",
    width: 28,
    height: 28,
    flexShrink: 0,
  },
  frameView2: {
    position: "absolute",
    top: 160,
    left: 0,
    borderRadius: 32,
    backgroundColor: "#ffda85",
    width: 295,
    height: 64,
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 8,
    paddingRight: 18,
    paddingBottom: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  groupView: {
    position: "absolute",
    top: 371,
    left: 40,
    width: 295,
    height: 224,
    display: "none",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#181818",
    width: 155,
    height: 155,
  },
  rectangleIcon: {
    position: "absolute",
    top: 172,
    left: 0,
    borderRadius: 16,
    width: 155,
    height: 155,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 172,
    borderRadius: 16,
    backgroundColor: "#181818",
    width: 155,
    height: 155,
  },
  rectangleView2: {
    position: "absolute",
    top: 172,
    left: 172,
    borderRadius: 16,
    backgroundColor: "#181818",
    width: 155,
    height: 155,
  },
  fruitText1: {
    position: "absolute",
    top: 109,
    left: 192,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "800",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    width: 115,
  },
  dehydrateText1: {
    position: "absolute",
    top: 281,
    left: 20,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "800",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    width: 115,
  },
  settingsText: {
    position: "absolute",
    top: 281,
    left: 192,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "800",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    width: 115,
    height: 28,
  },
  growText: {
    position: "absolute",
    top: 109,
    left: 20,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "800",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    width: 115,
  },
  frameIcon3: {
    position: "absolute",
    top: 192,
    left: 20,
    width: 44,
    height: 44,
  },
  frameIcon4: {
    position: "absolute",
    top: 20,
    left: 191.5,
    width: 45,
    height: 44,
  },
  frame123Componentsvg: {
    position: "absolute",
    top: 16,
    left: 12,
    width: 65,
    height: 55,
  },
  frameIcon5: {
    position: "absolute",
    top: 192,
    left: 192,
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  groupView1: {
    position: "absolute",
    top: 208,
    left: 24,
    width: 327,
    height: 327,
  },
  logoComponentsvgIcon: {
    position: "absolute",
    top: 48,
    left: 123,
    width: 128,
    height: 127,
    overflow: "hidden",
  },
  containerView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 812,
    overflow: "hidden",
  },
  menuView: {
    position: "relative",
    backgroundColor: "#181818",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Menu;
