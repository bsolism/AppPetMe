import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {},
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: "black",
  },
  tab: {
    backgroundColor: colors.light_blue,
  },
  tabButton: {
    width: "100%",
    flexDirection: "row",
  },
  tabMenu: {
    width: "33%",
    backgroundColor: colors.blue,
  },
  tabOnPress: {
    backgroundColor: colors.white,
    paddingVertical: 5,
    fontSize: 12,
  },
  tabOutPress: {
    backgroundColor: colors.light_grey,
    paddingVertical: 5,
    fontSize: 12,
  },
  textTab: {
    textAlign: "center",
  },
});

export default styles;
