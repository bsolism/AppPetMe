import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
  container: {
    paddingHorizontal: 50,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 20,
    resizeMode: "contain",
  },
  text: {
    marginVertical: 5,
  },
  title: {
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 24,
  },
  left: {
    width: "45%",
  },
  right: {
    width: "45%",
    display: "flex",
  },
  textRight: {
    fontSize: 18,
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
    marginVertical: 10,
  },
});

export default styles;
