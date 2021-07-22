import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

import styles from "./styles";

function Button(props) {
  const { title, onPress, color, style } = props;
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
