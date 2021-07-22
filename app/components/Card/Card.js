import React from "react";
import {
  View,
  Image,
  Text,
  Touchable,
  TouchableWithoutFeedback,
} from "react-native";
import Button from "../Button";
import Carousel from "../Carousel";

import styles from "./styles";

function Card(props) {
  const { name, description, photo, title, image, onPress } = props;
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailHeader}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.title}>{name}</Text>
        <Carousel photo={photo} />
        {/* <Image style={styles.photo} source={photo} /> */}
      </View>

      <View style={styles.description}>
        <Text style={styles.titleDescription}>{description}</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.footer}>
        <Button title="Información" style={styles.button} onPress={onPress} />
        <Button title="Apadrinar Refugio" style={styles.button} />
        <Button title="Adoptar" style={styles.button} />
      </View>
    </View>
  );
}

export default Card;
