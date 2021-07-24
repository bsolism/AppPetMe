import React from "react";
import { View } from "react-native";
import AppText from "../../components/AppTex";

import styles from "./styles";

function Profile(props) {
  const { name } = props.route;
  return (
    <View style={styles.container}>
      <AppText>{name}</AppText>
    </View>
  );
}

export default Profile;
