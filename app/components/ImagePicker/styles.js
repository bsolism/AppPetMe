import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  CameraContainer: {
    width: 50,
    height: 50,
    marginTop: -40,
    marginLeft: 60,
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: "#6495ED",
    borderWidth: 1,
    borderColor: "black",
  },
  IconCamera: {
    width: 30,
    height: 30,
    marginTop: 8,
    resizeMode: "contain",
    marginBottom: 10,
    tintColor: "#FFF8DC",
  },
  ImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 120,
    alignItems: "center",
  },
  ImageProfile: {
    width: 115,
    height: 115,
    borderRadius: 114,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default styles;
