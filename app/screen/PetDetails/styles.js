import { StyleSheet, useWindowDimensions } from "react-native";
import colors from "../../config/colors";

const { width } = useWindowDimensions;

const styles = StyleSheet.create({
  Button: {
    width: "100%",
    backgroundColor: colors.primary,
    color: colors.white,
  },
  container: {
    padding: 10,
    backgroundColor: colors.light,
  },
  containerImage: {
    width: "100%",
    height: 300,
  },
  profilePet: {
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    padding: 5,
  },
  textRowSmall: {
    width: "25%",
    fontWeight: "600",
  },
  textRowMedium: {
    width: "50%",
    fontWeight: "600",
  },
  textRowLarge: {
    width: "75%",
    fontWeight: "600",
  },
  textRowXlarge: {
    width: "100%",
    fontWeight: "600",
  },
});

export default styles;
