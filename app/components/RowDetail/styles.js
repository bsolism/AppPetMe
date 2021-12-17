import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    display: "flex",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  textDescription: {
    fontSize: 16,
    color: colors.dark_grey,
  },
  textDetail: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  textRight: {
    borderBottomWidth: 1,
    borderColor: colors.dark_grey,
  },
});

export default styles;
