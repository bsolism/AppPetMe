import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  bodyAmount: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 10,
  },
  cabecera: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
  },
  head: {
    width: "100%",
    height: 20,
  },
  picker: {
    marginVertical: 10,
    marginHorizontal: 70,
    width: "80%",
    height: 100,
  },
  segment: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 70,
  },
  text: {
    fontSize: 16,
  },
});

export default styles;
