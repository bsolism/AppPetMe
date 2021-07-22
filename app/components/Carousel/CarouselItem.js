import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacityBase,
} from "react-native";
import colors from "../../config/colors";

function CarouselItem({ item }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, width]}>
      <Image
        source={item.image}
        style={[styles.image, { width: width - 40 }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 250,
  },
  image: {
    resizeMode: "contain",
  },
});

export default CarouselItem;
