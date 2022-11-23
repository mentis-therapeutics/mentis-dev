import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  Pressable,
} from "react-native";
import { logout } from "../../auth/actions";
import { useAuthDispatch, useAuthState } from "../../auth/context";
import FilledButton from "../../components/FilledButton";
import UserTextInput from "../../components/UserTextInput";

import { DataStore } from 'aws-amplify'

import { AccountType, UserData } from "../../models"

const UserInput = () => {

    const { session, user } = useAuthState()
    const dispatch = useAuthDispatch();

    async function setUserData() {
        const original = await DataStore.query(UserData);

        // Create or Update
        console.log(original)
        if (original.length > 0){
            await DataStore.save(
                UserData.copyOf(original[0], updated => {
                    updated.FirstName = "Sam";
                    updated.LastName = "Coleman";
                    updated.AccountType = AccountType.USER;
                    updated.onboarded = true;
                })
            );
        }else{
            await DataStore.save(
                new UserData({
                    FirstName : "Sam",
                    LastName : "Coleman",
                    AccountType : AccountType.USER,
                    onboarded : true,
                })
            );
        }

        dispatch({type:'ONBOARDED'});
    }


    return (
    <View style={styles.userInputView}>
        <ScrollView
        style={styles.boundsScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.boundsScrollViewContent}
        >
        <UserTextInput labelText="First Name" hook={() => {}} />
        <UserTextInput labelText="Last Name" hook={() => {}} />
        <UserTextInput labelText="Date of Birth" hook={() => {}} />
        <UserTextInput labelText="Language Preferance" hook={() => {}} />

        <Pressable style={[styles.fillerPressable, styles.mt15]} />
        </ScrollView>
        <View style={styles.baseView}>
        <View style={styles.frameView}>
            <FilledButton label="Submit" onPress={() => logout(user, dispatch)}/>
        </View>
        <Image
            style={[styles.sunEmoteIcon, styles.mt20]}
            resizeMode="cover"
            source={require("../../assets/sunemote.png")}
        />
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: 4,
  },
  mt15: {
    marginTop: 15,
  },
  boundsScrollViewContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  mt20: {
    marginTop: 20,
  },
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
    display: "none",
  },
  headerView: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  helperText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Roboto",
    color: "#de0000",
    textAlign: "left",
  },
  masterhelperdefaultView: {
    position: "absolute",
    top: 55,
    left: 0,
    flexDirection: "column",
    paddingLeft: 16,
    paddingTop: 6,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    height: 48,
  },
  masterborderdefaultView: {
    position: "absolute",
    top: 7,
    right: 0,
    left: 0,
    height: 48,
  },
  inputText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  mastertextInputTextView: {
    position: "absolute",
    top: 19,
    left: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  vectorIcon2: {
    position: "relative",
    width: 6,
    height: 6,
    flexShrink: 0,
    display: "none",
  },
  masterlabeltextfieldView: {
    position: "absolute",
    top: 0,
    left: 12,
    backgroundColor: "#334166",
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconDefaultcalendar: {
    position: "absolute",
    top: 19,
    right: 12,
    width: 24,
    height: 24,
    display: "none",
  },
  userInputField: {
    position: "relative",
    width: 307,
    height: 70,
    flexShrink: 0,
  },
  helperText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Roboto",
    color: "#de0000",
    textAlign: "left",
  },
  masterhelperdefaultView1: {
    position: "absolute",
    top: 55,
    left: 0,
    flexDirection: "column",
    paddingLeft: 16,
    paddingTop: 6,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    height: 48,
  },
  masterborderdefaultView1: {
    position: "absolute",
    top: 7,
    right: 0,
    left: 0,
    height: 48,
  },
  inputText1: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  mastertextInputTextView1: {
    position: "absolute",
    top: 19,
    left: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  vectorIcon3: {
    position: "relative",
    width: 6,
    height: 6,
    flexShrink: 0,
    display: "none",
  },
  masterlabeltextfieldView1: {
    position: "absolute",
    top: 0,
    left: 12,
    backgroundColor: "#334166",
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconDefaultcalendar1: {
    position: "absolute",
    top: 19,
    right: 12,
    width: 24,
    height: 24,
    display: "none",
  },
  userInputField1: {
    position: "relative",
    width: 307,
    height: 70,
    flexShrink: 0,
  },
  helperText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Roboto",
    color: "#de0000",
    textAlign: "left",
  },
  masterhelperdefaultView2: {
    position: "absolute",
    top: 55,
    left: 0,
    flexDirection: "column",
    paddingLeft: 16,
    paddingTop: 6,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    height: 48,
  },
  masterborderdefaultView2: {
    position: "absolute",
    top: 7,
    right: 0,
    left: 0,
    height: 48,
  },
  inputText2: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  mastertextInputTextView2: {
    position: "absolute",
    top: 19,
    left: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  vectorIcon4: {
    position: "relative",
    width: 6,
    height: 6,
    flexShrink: 0,
    display: "none",
  },
  masterlabeltextfieldView2: {
    position: "absolute",
    top: 0,
    left: 12,
    backgroundColor: "#334166",
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconDefaultcalendar2: {
    position: "absolute",
    top: 19,
    right: 12,
    width: 24,
    height: 24,
    display: "none",
  },
  userInputField2: {
    position: "relative",
    width: 307,
    height: 70,
    flexShrink: 0,
  },
  helperText3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Roboto",
    color: "#de0000",
    textAlign: "left",
  },
  masterhelperdefaultView3: {
    position: "absolute",
    top: 55,
    left: 0,
    flexDirection: "column",
    paddingLeft: 16,
    paddingTop: 6,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    height: 48,
  },
  masterborderdefaultView3: {
    position: "absolute",
    top: 7,
    right: 0,
    left: 0,
    height: 48,
  },
  inputText3: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  mastertextInputTextView3: {
    position: "absolute",
    top: 19,
    left: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  labelText3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  vectorIcon5: {
    position: "relative",
    width: 6,
    height: 6,
    flexShrink: 0,
    display: "none",
  },
  masterlabeltextfieldView3: {
    position: "absolute",
    top: 0,
    left: 12,
    backgroundColor: "#334166",
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconDefaultcalendar3: {
    position: "absolute",
    top: 19,
    right: 12,
    width: 24,
    height: 24,
  },
  userInputField3: {
    position: "relative",
    width: 307,
    height: 70,
    flexShrink: 0,
  },
  helperText4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Roboto",
    color: "#de0000",
    textAlign: "left",
  },
  masterhelperdefaultView4: {
    position: "absolute",
    top: 55,
    left: 0,
    flexDirection: "column",
    paddingLeft: 16,
    paddingTop: 6,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    height: 48,
  },
  masterborderdefaultView4: {
    position: "absolute",
    top: 7,
    right: 0,
    left: 0,
    height: 48,
  },
  inputText4: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  mastertextInputTextView4: {
    position: "absolute",
    top: 19,
    left: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  labelText4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  vectorIcon6: {
    position: "relative",
    width: 6,
    height: 6,
    flexShrink: 0,
    display: "none",
  },
  masterlabeltextfieldView4: {
    position: "absolute",
    top: 0,
    left: 12,
    backgroundColor: "#334166",
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconDefaultcalendar4: {
    position: "absolute",
    top: 19,
    right: 12,
    width: 24,
    height: 24,
  },
  userInputField4: {
    position: "relative",
    width: 307,
    height: 70,
    flexShrink: 0,
  },
  fillerPressable: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
  },
  boundsScrollView: {
    alignSelf: "stretch",
    flex: 1,
    boxSizing: "border-box",
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  sunEmoteIcon: {
    position: "relative",
    width: 375,
    height: 78,
    flexShrink: 0,
    overflow: "hidden",
  },
  baseView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 30,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  userInputView: {
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

export default UserInput;
