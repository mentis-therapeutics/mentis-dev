import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  Pressable,
} from "react-native";
import { CheckBox as RNKCheckBox } from "@ui-kitten/components";
import FilledButton from "../../components/FilledButton";
import { useNavigation } from "@react-navigation/core";

const Disclaimer = () => {

    const navigation = useNavigation();
    const [checkboxchecked, setCheckboxchecked] = useState(undefined);

    return (
    <View style={styles.disclaimerView}>
        <View style={styles.bodyView}>
            <View style={styles.termsView}>
            <ScrollView
                style={styles.frameScrollView}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.frameScrollViewContent}
            >
                <Text style={styles.loremIpsumDolorSitAmetCo}>
                <Text style={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    ornare diam at posuere tempus. Nulla nec quam at odio fermentum
                    sodales quis id elit. In ac mollis tortor, auctor molestie
                    lorem. Nam eu dignissim est, id facilisis mi. Donec rhoncus
                    commodo sapien, nec lacinia neque aliquam vel. Phasellus at
                    sollicitudin orci. Duis convallis, sapien id convallis
                    vestibulum, magna nisi feugiat sem, ut sollicitudin massa elit
                    vitae sem. In tristique rhoncus ultricies. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    curae; Aliquam ut commodo turpis, non consectetur sem.
                </Text>
                <Text style={styles.fusceSedEuismod}>
                    Fusce sed euismod elit. Praesent id accumsan dui, sit amet
                    sollicitudin orci. Sed mauris orci, faucibus in augue vel,
                    pellentesque mattis lacus. Phasellus vulputate ut nisl sed
                    aliquet. Ut dolor turpis, tempus eu leo sit amet, facilisis
                    commodo magna. Fusce at pretium quam, sed egestas nibh. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus.
                </Text>
                <Text style={styles.maecenasEuNibh}>
                    Maecenas eu nibh eu ex malesuada suscipit. Phasellus imperdiet
                    nibh ac ante feugiat, vel pulvinar quam posuere. Maecenas et
                    tempus nisi. Duis gravida risus tellus, vel condimentum nulla
                    laoreet eget. Aliquam a magna ut nulla ullamcorper pharetra eget
                    ullamcorper enim. Donec vitae turpis et ligula mollis pharetra
                    non vel quam. Donec ut elit tellus. Morbi sagittis felis eu
                    aliquam suscipit. Praesent a orci maximus, ultrices lorem
                    varius, faucibus nulla. Nam nunc elit, ultricies et aliquet at,
                    maximus eget ante. Vivamus sed sollicitudin est. Cras sed libero
                    enim. Curabitur mollis viverra metus, ut faucibus dui tristique
                    quis.
                </Text>
                <Text style={styles.maecenasAcNunc}>
                    Maecenas ac nunc sem. Nullam luctus euismod ligula a commodo.
                    Aliquam ut bibendum leo. Praesent vel dictum orci. In ultrices
                    eros congue ex tempor molestie. Etiam ultrices mauris felis,
                    vitae lacinia enim feugiat ut. Pellentesque porta nulla vel
                    augue viverra, quis mollis metus tempus. Aliquam a elit
                    condimentum, tempus magna id, sagittis sem. In vitae elementum
                    elit. Aliquam a molestie dui, sit amet accumsan augue.
                    Pellentesque sem ipsum, consectetur ac ante nec, dignissim
                    pellentesque augue.
                </Text>
                <Text style={styles.morbiEgestasAccumsan}>
                    Morbi egestas accumsan elit in ullamcorper. Ut eu nunc eu nisi
                    porta efficitur ac vel nulla. Aenean iaculis accumsan aliquet.
                    Vivamus sit amet dignissim erat, sit amet convallis nulla.
                    Maecenas a orci nec nisi faucibus sagittis vel at lorem. Sed vel
                    facilisis libero, sed efficitur augue. Phasellus id fringilla
                    orci. Vivamus ut lectus nec tellus finibus vehicula. Nulla vitae
                    nunc semper, eleifend justo ac, molestie purus. Maecenas porta
                    nisi augue. Sed nec pretium urna, elementum suscipit nisl.
                    Phasellus eget viverra tellus, quis interdum libero. Vestibulum
                    rhoncus enim at hendrerit efficitur. In viverra felis ac massa
                    efficitur, vel consectetur nisi fringilla. Integer mollis, nibh
                    viverra bibendum mollis, nisi nibh euismod diam, non
                    sollicitudin lectus massa eu nisi.
                </Text>
                </Text>
            </ScrollView>
            <View style={[styles.labelView, styles.mt10]}>
                <Text style={styles.termsText}>Terms</Text>
            </View>
            </View>
            <Pressable style={[styles.agreeToTerms1, styles.mt15]}>
            <RNKCheckBox
                style={styles.checkboxRNKCheckBox}
                status="basic"
                checked={checkboxchecked}
                onChange={() => setCheckboxchecked(!checkboxchecked)}
            />
            <Text style={styles.agreeToTerms}>
                I have read and agree to the terms.
            </Text>
            </Pressable>
            <FilledButton label="Submit" onPress={() => navigation.navigate("UserInput")}/>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
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
  loremIpsumDolor: {
  },
  fusceSedEuismod: {
  },
  maecenasEuNibh: {
  },
  maecenasAcNunc: {
  },
  morbiEgestasAccumsan: {
  },
  loremIpsumDolorSitAmetCo: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    width: 255,
  },
  frameScrollView: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    zIndex: 0,
  },
  termsText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
  },
  labelView: {
    position: "absolute",
    top: -9,
    left: 26,
    backgroundColor: "#334166",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
    zIndex: 1,
  },
  termsView: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 16,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingVertical: 20,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
  checkboxRNKCheckBox: {
    position: "relative",
    flexShrink: 0,
  },
  agreeToTerms: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    width: 261,
    height: 35,
  },
  agreeToTerms1: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 20,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  labelText: {
    position: "relative",
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#334166",
    textAlign: "center",
  },
  primaryCTAPressable: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#fff",
    height: 50,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 50,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  disclaimerView: {
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

export default Disclaimer;
