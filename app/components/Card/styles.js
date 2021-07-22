import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  button: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: 2,
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  description: {
    padding: 20,
  },
  detailHeader: {
    marginLeft: 10,
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  headerContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  title: {
    marginBottom: 7,
    marginLeft: 10,
  },
  titleDescription: {
    marginBottom: 7,
  },
});

export default styles;
