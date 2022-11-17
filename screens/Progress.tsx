import * as React from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";
import Header from "../components/Header";
import SessionExpandingModal from "../components/SessionExpandingModal";
import NavigationBarInverted from "../components/NavigationBar";

const Progress = () => {
  return (
    <View style={styles.progressClient}>
      <Header />
      <ScrollView
        style={styles.bodyScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.bodyScrollViewContent}
      >
        <Text style={styles.yourProgressText}>Your Progress</Text>
        <View style={[styles.sessionExpandingModalView, styles.mt25]}>
          <View style={styles.frameView}>
            <Text style={styles.stageText}>Preparation</Text>
            <Text
              style={[styles.sessionsCompletedXOfX, styles.ml10]}
            >{`  Sessions Completed: 2 of 2 `}</Text>
            <View style={[styles.dropdownView, styles.ml10]}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector31.png")}
              />
            </View>
          </View>
          <View style={styles.frameView1}>
            <Text style={styles.session1Text}>Session 1</Text>
            <Text
              style={[styles.completed211297Text, styles.ml10]}
            >{`Completed: 21/12/97 `}</Text>
            <View style={[styles.dropdownView1, styles.ml10]}>
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector32.png")}
              />
            </View>
          </View>
          <View style={styles.frameView2}>
            <Text style={styles.session2Text}>Session 2</Text>
            <Text
              style={[styles.sheduled211297Text, styles.ml10]}
            >{`Completed: 21/12/97 `}</Text>
            <View style={[styles.dropdownView2, styles.ml10]}>
              <Image
                style={styles.vectorIcon2}
                resizeMode="cover"
                source={require("../assets/vector32.png")}
              />
            </View>
          </View>
          <View style={styles.frameView3}>
            <Text style={styles.session3Text}>Session 3</Text>
            <Text
              style={[styles.sheduled211297Text1, styles.ml10]}
            >{`Sheduled: 21/12/97 `}</Text>
            <View style={[styles.dropdownView3, styles.ml10]}>
              <Image
                style={styles.vectorIcon3}
                resizeMode="cover"
                source={require("../assets/vector32.png")}
              />
            </View>
          </View>
          <View style={styles.frameView4}>
            <Text style={styles.session4Text}>Session 4</Text>
            <Text
              style={[styles.sheduled211297Text2, styles.ml10]}
            >{`Sheduled: 21/12/97 `}</Text>
            <View style={[styles.dropdownView4, styles.ml10]}>
              <Image
                style={styles.vectorIcon4}
                resizeMode="cover"
                source={require("../assets/vector32.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.sessionExpandingModalView1, styles.mt25]}>
          <View style={styles.frameView5}>
            <Text style={styles.stageText1}>Trip</Text>
            <Text
              style={[styles.sessionsCompletedXOfX1, styles.ml10]}
            >{`  Sessions Completed: 0 of 1 `}</Text>
            <View style={[styles.dropdownView5, styles.ml10]}>
              <Image
                style={styles.vectorIcon5}
                resizeMode="cover"
                source={require("../assets/vector31.png")}
              />
            </View>
          </View>
          <View style={styles.frameView6}>
            <Text style={styles.session1Text1}>Session 1</Text>
            <Text
              style={[styles.completed211297Text1, styles.ml10]}
            >{`Sheduled: 21/12/97 `}</Text>
            <View style={[styles.dropdownView6, styles.ml10]}>
              <Image
                style={styles.vectorIcon6}
                resizeMode="cover"
                source={require("../assets/vector32.png")}
              />
            </View>
          </View>
          <View style={styles.frameView7}>
            <Text style={styles.session2Text1}>Session 2</Text>
            <Text
              style={[styles.sheduled211297Text3, styles.ml10]}
            >{`Sheduled: 21/12/97 `}</Text>
            <View style={[styles.dropdownView7, styles.ml10]}>
              <Image
                style={styles.vectorIcon7}
                resizeMode="cover"
                source={require("../assets/vector32.png")}
              />
            </View>
          </View>
          <View style={styles.frameView8}>
            <Text style={styles.session3Text1}>Session 3</Text>
            <Text
              style={[styles.sheduled211297Text4, styles.ml10]}
            >{`Sheduled: 21/12/97 `}</Text>
            <View style={[styles.dropdownView8, styles.ml10]}>
              <Image
                style={styles.vectorIcon8}
                resizeMode="cover"
                source={require("../assets/vector32.png")}
              />
            </View>
          </View>
          <View style={styles.frameView9}>
            <Text style={styles.session4Text1}>Session 4</Text>
            <Text
              style={[styles.sheduled211297Text5, styles.ml10]}
            >{`Sheduled: 21/12/97 `}</Text>
            <View style={[styles.dropdownView9, styles.ml10]}>
              <Image
                style={styles.vectorIcon9}
                resizeMode="cover"
                source={require("../assets/vector32.png")}
              />
            </View>
          </View>
        </View>
        <SessionExpandingModal />
        <View style={[styles.fillerView, styles.mt25]} />
      </ScrollView>
      <NavigationBarInverted />
    </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: 10,
  },
  mt25: {
    marginTop: 25,
  },
  bodyScrollViewContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  yourProgressText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    height: 25,
  },
  stageText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  sessionsCompletedXOfX: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon: {
    position: "relative",
    width: 6.18,
    height: 10,
    flexShrink: 0,
  },
  dropdownView: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  session1Text: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  completed211297Text: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon1: {
    position: "relative",
    width: 6.18,
    height: 10,
    flexShrink: 0,
  },
  dropdownView1: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView1: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  session2Text: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  sheduled211297Text: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon2: {
    position: "relative",
    width: 6.18,
    height: 10,
    flexShrink: 0,
  },
  dropdownView2: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView2: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  session3Text: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  sheduled211297Text1: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon3: {
    position: "relative",
    width: 6.17,
    height: 10,
    flexShrink: 0,
  },
  dropdownView3: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView3: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  session4Text: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  sheduled211297Text2: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon4: {
    position: "relative",
    width: 6.17,
    height: 10,
    flexShrink: 0,
  },
  dropdownView4: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView4: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  sessionExpandingModalView: {
    alignSelf: "stretch",
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  stageText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  sessionsCompletedXOfX1: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon5: {
    position: "relative",
    width: 6.18,
    height: 10,
    flexShrink: 0,
  },
  dropdownView5: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView5: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  session1Text1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  completed211297Text1: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon6: {
    position: "relative",
    width: 6.18,
    height: 10,
    flexShrink: 0,
  },
  dropdownView6: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView6: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  session2Text1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  sheduled211297Text3: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon7: {
    position: "relative",
    width: 6.17,
    height: 10,
    flexShrink: 0,
  },
  dropdownView7: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView7: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  session3Text1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  sheduled211297Text4: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon8: {
    position: "relative",
    width: 6.17,
    height: 10,
    flexShrink: 0,
  },
  dropdownView8: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView8: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  session4Text1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  sheduled211297Text5: {
    flex: 1,
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  vectorIcon9: {
    position: "relative",
    width: 6.17,
    height: 10,
    flexShrink: 0,
  },
  dropdownView9: {
    width: 15,
    height: 15,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView9: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  sessionExpandingModalView1: {
    alignSelf: "stretch",
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  fillerView: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
  },
  bodyScrollView: {
    alignSelf: "stretch",
    flex: 1,
    boxSizing: "border-box",
  },
  progressClient: {
    position: "relative",
    backgroundColor: "#334166",
    flex: 1,
    width: "100%",
    height: 812,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Progress;
