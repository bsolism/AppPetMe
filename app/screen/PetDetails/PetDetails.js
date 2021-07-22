import React from "react";
import { View, Text, Button } from "react-native";

import styles from "./styles";

function PetDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>this is Pet Details</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default PetDetails;
