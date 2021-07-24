import React from "react";
import { TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppTex";

import styles from "./styles";

function Button(props) {
  const { title, onPress, color, style, colorText } = props;
  return (
    <TouchableOpacity
      style={[styles.button, style, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <AppText style={[styles.text, { color: colors[colorText] }]}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
}

export default Button;
