import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {},
  information: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.light_grey,
    marginBottom: 5,
    marginTop: 10,
  },
  titleInformation: {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontStyle: "italic",
    color: colors.grey,
    marginLeft: 10,
  },
});

export default styles;
