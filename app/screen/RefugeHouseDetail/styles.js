import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {},
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 5,
  },
  row: {
    flexDirection: "row",
    height: 40,
    width: "100%",
  },
  text: {
    marginVertical: 20,
    marginLeft: 5,
    width: "80%",
  },
  textTitle: {
    fontSize: 12,
  },
});

export default styles;
