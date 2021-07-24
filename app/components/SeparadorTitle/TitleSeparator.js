import React from "react";
import { View } from "react-native";
import AppText from "../AppTex";

import styles from "./styles";

function TitleSeparator(props) {
  const { title } = props;
  return (
    <View style={styles.information}>
      <AppText style={styles.titleInformation}>{title}</AppText>
    </View>
  );
}

export default TitleSeparator;
