import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  button: {
    alignItems: "flex-end",
    justifyContent: "center",
    margin: 2,
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  date: {
    marginLeft: 10,
    fontSize: 10,
    marginBottom: 5,
    fontStyle: "italic",
    color: colors.granite_grey,
  },
  deleteAction: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: "center",
    justifyContent: "center",
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
  subTitle: {
    marginLeft: 10,
    fontSize: 10,
    color: colors.granite_grey,
  },

  title: {
    marginLeft: 10,
  },
  titleDescription: {
    marginBottom: 7,
  },
});

export default styles;
