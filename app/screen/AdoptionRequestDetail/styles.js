import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  containerImage: {
    width: "100%",
    height: 300,
    padding: 5,
  },
  scrollview: {
    height: "55%",
  },
  textTitle: {
    fontSize: 12,
  },
  text: {
    fontSize: 14,
  },
  modal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    marginBottom: 15,
  },
  modalContainer: {
    width: "100%",
    height: 200,
    backgroundColor: colors.blue,
    padding: 10,
  },
});

export default styles;
