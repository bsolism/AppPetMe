import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppTex";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { color: colors.color_error, fontSize: 12, marginLeft: 5 },
});

export default ErrorMessage;
