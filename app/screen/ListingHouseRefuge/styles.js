import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: colors.light,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default styles;
