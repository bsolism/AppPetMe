import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  container: {},
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  logoContainer: {
    position: "absolute",
    top: 180,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 5,
  },
});

export default styles;
