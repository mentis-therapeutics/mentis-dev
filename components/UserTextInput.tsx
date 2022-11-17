import * as React from "react";
import { Image, StyleSheet, View, TextInput, TextInputProps, Text, ImageSourcePropType } from "react-native";


export const emailTextInputProps : TextInputProps = {autoComplete: "email", textContentType:'emailAddress', autoCapitalize: "none", spellCheck: false, autoCorrect: false};
export const passwordTextInputProps : TextInputProps = {autoComplete: "password", textContentType:'password', autoCapitalize: "none", spellCheck: false, secureTextEntry: true};

type MyTextInputType = {
  labelText: string;
  helpText: string;
  hook(value: string): void;
  icon?: ImageSourcePropType,
  props?: TextInputProps;
};

const UserTextInput = ({ labelText, helpText, hook, icon, props }: MyTextInputType) => {
    return (
        <View style={[styles.userInputField, styles.mt10]}>
      <View style={styles.mainLaoutView}>
        <View style={styles.bodyView}>
            <TextInput
                style={styles.inputText}
                keyboardType="default"
                onChangeText={(value : string) => {hook(value);}}
                {...props}/>
            { icon 
                ? <View style={[styles.iconDefaultcalendarView, styles.ml4]}>
                    <Image
                            style={styles.vectorIcon}
                            resizeMode="cover"
                            source={icon}
                            />
                    </View>
                : null
            }
            
        </View>
      </View>
      <View style={styles.helpLayoutView}>
        <Text style={styles.helperText}>{helpText}</Text>
      </View>
      <View style={styles.labelLayoutView}>
        <Text style={styles.labelText}>{labelText}</Text>
        {/* Required asterix?
        
        <Image
          style={[styles.vectorIcon1, styles.ml4]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    ml4: {
      marginLeft: 4,
    },
    mt10: {
        marginTop: 10,
    },
    helperText: {
      position: "relative",
      fontSize: 14,
      lineHeight: 16,
      fontFamily: "Manrope",
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
      fontFamily: "Manrope",
      color: "#fff",
      textAlign: "left",
      flex: 1,
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
      fontFamily: "Manrope",
      color: "#fff",
      textAlign: "left",
    },
    vectorIcon: {
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
    },
    userInputField: {
      alignSelf: "stretch",
      position: "relative",
      height: 80,
      flexShrink: 0,
    },
    iconDefaultcalendarView: {
    width: 25,
    height: 25,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    },
    bodyView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    },
    mainLaoutView: {
    alignSelf: "stretch",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    height: 48,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 0,
    },
    helpLayoutView: {
    flexDirection: "column",
    paddingLeft: 16,
    paddingTop: 6,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 1,
    },
    vectorIcon1: {
    position: "relative",
    width: 6,
    height: 6,
    flexShrink: 0,
    display: "none",
    },
    labelLayoutView: {
    position: "absolute",
    top: -8,
    left: 12,
    backgroundColor: "#334166",
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 2,
    },
});


export default UserTextInput;
