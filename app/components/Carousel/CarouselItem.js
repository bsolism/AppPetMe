import React from "react";
import {
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import server from "../../service/server";

import styles from "./styles";

function CarouselItem({ item, padding, height }) {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={[styles.containerCarousel, { width: width - padding }]}
      onPress={() => console.log("Press Img")}
    >
      <Image
        source={{ uri: server.URI + "/imagepet/" + item.image }}
        style={[styles.image, { width: width - padding, height: height - 50 }]}
      />
    </TouchableOpacity>
  );
}

export default CarouselItem;
