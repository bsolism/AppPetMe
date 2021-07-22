import React from "react";
import { View, SafeAreaView } from "react-native";

import styles from "./styles";

function Screen(props) {
  const { children, style } = props;
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

export default Screen;
