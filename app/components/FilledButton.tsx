import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

type ButtonConf = {
    label: string;
    onPress(): void;
};

const FilledButton = ({ label, onPress }: ButtonConf) => {
  return (
    <Pressable style={[styles.primaryCTAPressable, styles.mt10]} onPress={onPress}>
      <Text style={styles.labelText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    mt10: {
        marginTop: 10,
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
});

export default FilledButton;
