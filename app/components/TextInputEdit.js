import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import SeparadorTitle from "./SeparadorTitle";
import Icon from "./Icon";
import AppText from "./AppTex";
import TextInput from "./TextInput";

function TextInputEdit(props) {
  const {
    title,
    iconName,
    itemName,
    itemEmail,
    styleWidth,
    styleText,
    style,
    onPress,
  } = props;
  return (
    <View>
      <SeparadorTitle title={title} styleText={styles.fontTitle} />
      <View style={styles.row}>
        <TextInput icon="home-account" value="Hogar" width="90%" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fontTitle: {
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    height: 50,
    width: "100%",
  },
});

export default TextInputEdit;
