import * as React from "react";
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";

const SessionTab = () => {
  return (
    <View style={styles.sessionTabView}>
      <View style={styles.navView}>
        <View style={styles.leftView}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector11.png")}
          />
        </View>
        <View style={styles.navIndicatorView}>
          <View style={styles.circleView} />
          <View style={[styles.circleView1, styles.ml20]} />
        </View>
        <View style={styles.rightView}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector12.png")}
          />
        </View>
      </View>
      <ScrollView
        style={[styles.scrollSectionScrollView, styles.mt30]}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollSectionScrollViewContent}
      >
        <View style={styles.introView}>
          <View style={styles.frameView}>
            <View style={styles.titleView}>
              <Text style={styles.preperationText}>Preperation</Text>
              <Text style={styles.session1Text}>Session 1</Text>
            </View>
            <Text style={[styles.saturday7thAug12pm1pm, styles.mt5]}>
              <Text style={styles.saturday7thAug}>Saturday, 7th Aug</Text>
              <Text style={styles.pm1pm}>12pm - 1pm</Text>
            </Text>
          </View>
          <Text style={[styles.bodyText, styles.mt10]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            consectetur magna quis pellentesque. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed congue consectetur magna quis
            pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed congue consectetur magna quis pellentesque.
          </Text>
        </View>
        <View style={[styles.councilorBioView, styles.mt25]}>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-135.png")}
          />
          <View style={[styles.frameView1, styles.ml15]}>
            <Text style={styles.johnSmithText}>John Smith</Text>
            <Text style={styles.loremIpsumDolorSitAmetCo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue consectetur magna quis pellentesque.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ml20: {
    marginLeft: 20,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  ml15: {
    marginLeft: 15,
  },
  mt25: {
    marginTop: 25,
  },
  scrollSectionScrollViewContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  mt30: {
    marginTop: 30,
  },
  vectorIcon: {
    position: "relative",
    width: 12.34,
    height: 20,
    flexShrink: 0,
  },
  leftView: {
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  circleView: {
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#334166",
    borderWidth: 3,
    width: 10,
    height: 10,
    flexShrink: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  circleView1: {
    borderRadius: 10,
    backgroundColor: "#334166",
    width: 10,
    height: 10,
    flexShrink: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  navIndicatorView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorIcon1: {
    position: "relative",
    width: 12.34,
    height: 20,
    flexShrink: 0,
  },
  rightView: {
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  navView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  preperationText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "left",
  },
  session1Text: {
    position: "relative",
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "right",
  },
  titleView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  saturday7thAug: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pm1pm: {
    margin: 0,
  },
  saturday7thAug12pm1pm: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    display: "none",
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bodyText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "left",
  },
  introView: {
    width: 315,
    flexDirection: "column",
    paddingHorizontal: 5,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  ellipseIcon: {
    position: "relative",
    width: 80,
    height: 80,
    flexShrink: 0,
  },
  johnSmithText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "left",
  },
  loremIpsumDolorSitAmetCo: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "left",
  },
  frameView1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  councilorBioView: {
    width: 315,
    height: 100,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scrollSectionScrollView: {
    flexShrink: 0,
    flex: 1,
  },
  sessionTabView: {
    flex: 3,
    alignSelf: "stretch",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    overflow: "visible",
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingVertical: 25,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default SessionTab;
