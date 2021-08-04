import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

import styles from "./styles";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../../../assets/animations/simple-loading.json")}
      />
    </View>
  );
}

export default ActivityIndicator;
