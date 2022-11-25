import React, {useEffect} from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import SessionInfoModal from "../components/SessionInfoModal";
import NavigationBar from "../components/NavigationBar";
import FilledButton from "../components/FilledButton";
import { logout } from "../auth/actions";
import { useAuthDispatch, useAuthState } from "../auth/context";

import {
    auth as SpotifyAuth,
    remote as SpotifyRemote,
    ApiScope,
    ApiConfig,
  } from "react-native-spotify-remote";
  
  // Api Config object, replace with your own applications client id and urls
  const spotifyConfig: ApiConfig = {
    clientID: "674bc223be44498bb66abff0f1730300",
    redirectURL: "com.mentisapp://oauthredirect",
    //tokenRefreshURL: "SPOTIFY_TOKEN_REFRESH_URL",
    //tokenSwapURL: "SPOTIFY_TOKEN_SWAP_URL",
    scopes: [ApiScope.AppRemoteControlScope, ApiScope.UserFollowReadScope],
    showDialog: true,
  };
  
  // Initialize the library and connect the Remote
  // then play an epic song
  async function select() {
    try {
      console.log("Select")
      const session = await SpotifyAuth.authorize(spotifyConfig);


      await SpotifyRemote.connect(session.accessToken);
      await SpotifyRemote.playUri("spotify:track:6IA8E2Q5ttcpbuahIejO74");
      await SpotifyRemote.seek(58000);
    } catch {
      console.error("Couldn't authorize with or connect to Spotify");
    }
  }

  async function play() {
    try {
      console.log("Play")
      await SpotifyRemote.resume();
    } catch {
      console.error("Couldn't authorize with or connect to Spotify");
    }
  }
  async function pause() {
    try {
      console.log("Pause")
      await SpotifyRemote.pause()
    } catch {
      console.error("Couldn't authorize with or connect to Spotify");
    }
  }
  async function next() {
    try {
      console.log("Next")
      await SpotifyRemote.skipToNext();
    } catch {
      console.error("Couldn't authorize with or connect to Spotify");
    }
  }

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

            <FilledButton label="select" onPress={() => select()}/>
            <FilledButton label="play" onPress={() => play()}/>
            <FilledButton label="pause" onPress={() => pause()}/>
            <FilledButton label="next" onPress={() => next()}/>
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
