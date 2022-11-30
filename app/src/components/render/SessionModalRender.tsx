import React, { useEffect, useState } from "react";
import { Text, StyleSheet, Image, View, ImageSourcePropType } from "react-native";
import { Calendar, ArrowRight2, Headphone } from "iconsax-react-native";

export enum ModalState { "UNBOOKED" , "BOOKED", "LIVE", "ERROR" }

type ISessionModalRender = {
    state: ModalState,
    sessionName: String,
    datetime?: String,
    therapist?: String
};

const SessionModalRender = ({state, sessionName, datetime, therapist} : ISessionModalRender) => {
    const [title, setTitle] = useState("");
    const [icon, setIcon] = useState<JSX.Element>(<></>)
    const [booked, setBooked] = useState(false);

    useEffect(() => {
        if (state == ModalState.UNBOOKED) {
            setTitle("Book Session")
            setIcon(<Calendar color="#334166" size={32}/>)
            setBooked(false)
        } else if (state == ModalState.BOOKED){
            // TITLE ?
            setTitle("Session Booked")
            setIcon(<ArrowRight2 color="#334166" size={24}/>)
            setBooked(true)
        } else {
            setTitle("Join Session")
            setIcon(<Headphone color="#334166" size={32}/>)
            setBooked(true)
        }
    },[])


    return (
        <View style={[styles.sessionModal, styles.mt25]}>
        <View style={styles.modalButtonView}>
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.headerView}>
                {icon}
            </View>
        </View>
        <View style={styles.lowerSectionView}>
            {
                booked ? 
                
                <>
                <View style={styles.frameView2}>
                    <Text style={styles.subtitleText}>{sessionName}</Text>
                    <Text style={styles.datetimeText}>{datetime}</Text>
                </View>
                <View style={styles.frameView3}>
                    <Text style={styles.sessionWithText}>Session with {"\n"} {therapist}</Text>
                </View>
                </>
    
                :
                
                <Text style={styles.subtitleText}>{sessionName}</Text>
            }
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mt25: {
        marginTop: 25,
    },
  ml10: {
    marginLeft: 10,
  },
  headerText: {
    position: "relative",
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "left",
  },
  vectorIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  headerView: {
    width: 25,
    height: 25,
    flexShrink: 0,
    flexDirection: "column",
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalButtonView: {
    alignSelf: "stretch",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalButtonView1: {
    alignSelf: "stretch",
    borderStyle: "solid",
    height: 5,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  preparationText: {
    position: "relative",
    fontSize: 24,
    lineHeight: 34,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  todayText: {
  },
  pm1pm: {
    margin: 0,
  },
  today12pm1pm: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  johnText: {
  },
  smithText: {
    margin: 0,
  },
  johnSmithText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  ellipseIcon: {
    position: "relative",
    width: 60,
    height: 60,
    flexShrink: 0,
  },
  frameView1: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  lowerSectionView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  subtitleText: {
    position: "relative",
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  todayText1: {
  },
  pm1pm1: {
    margin: 0,
  },
  datetimeText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  frameView2: {
    height: 74,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  sessionWithText: {
  },
  johnSmithText1: {
    margin: 0,
  },
  sessionWithText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  frameView3: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  lowerSectionView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sessionModal: {
    alignSelf: "stretch",
    borderRadius: 21,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default SessionModalRender;
