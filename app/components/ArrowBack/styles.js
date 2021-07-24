import { StyleSheet, useWindowDimensions } from "react-native";
import colors from "../../config/colors";

const { width } = useWindowDimensions;

const styles = StyleSheet.create({
  container: {},
  arrowBack: {
    width: 30,
    marginLeft: 10,
  },
  back: {
    width: width,
    height: 40,
    justifyContent: "center",
  },
});

export default styles;
