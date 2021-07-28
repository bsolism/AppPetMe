import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import colors from "../config/colors";

const AppSwitch = (props) => {
  const { ...otherProps } = props;
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: colors.dark_grey, true: colors.light_blue }}
        thumbColor={isEnabled ? colors.yellow : colors.light_grey}
        ios_backgroundColor={colors.dark_grey}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppSwitch;
