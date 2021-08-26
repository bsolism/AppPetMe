import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    borderRadius: 10,
  },
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  image: {
    resizeMode: "contain",
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  content: {
    padding: 10,
    marginVertical: 10,
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
});

export default styles;
