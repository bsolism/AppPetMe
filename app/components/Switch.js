import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import colors from "../config/colors";

const AppSwitch = (props) => {
  const { style, isEnabled, setIsEnabled, ...otherProps } = props;

  return (
    <View style={[styles.container, style]}>
      <Switch
        trackColor={{ false: colors.dark_grey, true: colors.light_blue }}
        thumbColor={isEnabled ? colors.yellow : colors.light_grey}
        ios_backgroundColor={colors.dark_grey}
        value={isEnabled}
        onValueChange={(value) => setIsEnabled(value)}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppSwitch;
