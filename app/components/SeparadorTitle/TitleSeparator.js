import React from "react";
import { View } from "react-native";
import AppText from "../AppTex";

import styles from "./styles";

function TitleSeparator(props) {
  const { title, styleText, styleView } = props;
  return (
    <View style={[styles.information, styleView]}>
      <AppText style={[styles.titleInformation, styleText]}>{title}</AppText>
    </View>
  );
}

export default TitleSeparator;
