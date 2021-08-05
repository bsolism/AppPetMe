import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
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
  text: {
    marginVertical: 20,
  },
});

export default styles;
