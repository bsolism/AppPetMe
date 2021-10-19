import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {},
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 140,
  },
  header: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: "black",
  },
  tab: {
    backgroundColor: "#808080",
  },
  tabButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  tabOnPress: {
    backgroundColor: colors.light_grey,
    paddingVertical: 5,
    fontSize: 12,
    width: "50%",
  },
  tabOutPress: {
    backgroundColor: colors.white,

    paddingVertical: 5,
    fontSize: 12,
    width: "50%",
  },
  textTab: {
    textAlign: "center",
  },
});

export default styles;
