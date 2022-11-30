import React, {useEffect} from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import SessionInfoModal from "../components/SessionInfoModal";
import NavigationBar from "../components/NavigationBar";
import FilledButton from "../components/FilledButton";
import { logout } from "../auth/actions";
import { useAuthDispatch, useAuthState } from "../auth/context";



const Home = () => {
    const { user } = useAuthState()
    const dispatch = useAuthDispatch()

    

  return (
        <View style={styles.homeClient}>
        <Header />
        <ScrollView
            style={styles.bodyScrollView}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bodyScrollViewContent}
        >
            <Text style={styles.helloSamText}>Hello, Sam</Text>
            <Text style={[styles.upNext, styles.mt25]}>{`Up Next .. `}</Text>
            <SessionInfoModal session1Of2="Session 1 of 2" />
            <View style={[styles.fillerView, styles.mt25]} />
            <FilledButton label="Logout" onPress={() => logout(user, dispatch)}/>

        </ScrollView>
        </View>
  );
};

const styles = StyleSheet.create({
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
  helloSamText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 32,
    lineHeight: 45,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    height: 25,
  },
  upNext: {
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
  homeClient: {
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

export default Home;
