import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

function Profile(props) {
  const { name } = props.route;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

export default Profile;
