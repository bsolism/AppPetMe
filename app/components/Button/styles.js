import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    borderBottomColor: colors.black,
  },
  text: {
    color: colors.grey,
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default styles;
