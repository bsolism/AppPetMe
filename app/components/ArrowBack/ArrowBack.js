import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";

function ArrowBack({ navigation }) {
  return (
    <View style={styles.back}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.arrowBack}
      >
        <MaterialCommunityIcons name="arrow-left" size={20} color="grey" />
      </TouchableOpacity>
    </View>
  );
}

export default ArrowBack;
