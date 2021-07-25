import { StyleSheet, useWindowDimensions } from "react-native";
import colors from "../../config/colors";

const { height } = useWindowDimensions;

const styles = StyleSheet.create({
  Button: {
    width: "40%",
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderColor: colors.black,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: colors.light,
  },
  containerImage: {
    width: "100%",
    height: "40%",
    padding: 10,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  profilePet: {
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    padding: 5,
  },
  scrollview: {
    height: "60%",
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
