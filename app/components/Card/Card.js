import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";

function Card(props) {
  const { children } = props;

  return <View style={styles.card}>{children}</View>;
}

export default Card;
