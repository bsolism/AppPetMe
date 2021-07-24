import React from "react";
import { View, StyleSheet, Image, useWindowDimensions } from "react-native";

function CarouselItem({ item, padding }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width: width - padding }]}>
      <Image
        source={item.image}
        style={[styles.image, { width: width - padding }]}
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
