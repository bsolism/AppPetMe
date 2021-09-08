import React from "react";
import { View, Image, useWindowDimensions } from "react-native";
import server from "../../service/server";

import styles from "./styles";

function CarouselItem({ item, padding, height }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.containerCarousel, { width: width - padding }]}>
      <Image
        source={{ uri: server.URI + "/imagepet/" + item.image }}
        style={[styles.image, { width: width - padding, height: height - 50 }]}
      />
    </View>
  );
}

export default CarouselItem;
