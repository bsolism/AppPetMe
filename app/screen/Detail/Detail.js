import React from "react";
import { View, Text } from "react-native";

import Screen from "../../components/Screen";

import styles from "./styles";

function Detail(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Details</Text>
      </View>
    </Screen>
  );
}

export default Detail;
