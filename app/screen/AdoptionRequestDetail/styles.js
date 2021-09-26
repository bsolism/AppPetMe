import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  containerImage: {
    width: "100%",
    height: 300,
    padding: 10,
  },
  scrollview: {
    height: "60%",
  },
  textTitle: {
    fontSize: 12,
  },
  text: {
    fontSize: 14,
  },
});

export default styles;
