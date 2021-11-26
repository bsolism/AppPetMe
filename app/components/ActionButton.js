import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "./Icon";

function ActionButton(props) {
  const { size, color, backgroundColor, onPress } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon
          name="plus-circle"
          size={size}
          iconColor={color}
          backgroundColor={backgroundColor}
          border
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 30,
    bottom: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ActionButton;
