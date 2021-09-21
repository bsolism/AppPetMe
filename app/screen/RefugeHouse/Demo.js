import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Demo(props) {
  return (
    <View style={styles.content}>
      <Text style={styles.txt}>Demo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#808080",
    height: "100%",
  },
  txt: {
    fontSize: 12,
  },
});

export default Demo;
