import React from "react";
import { View, Image } from "react-native";
import Button from "../Button";
import AppText from "../AppTex";
import Carousel from "../Carousel";

import styles from "./styles";

function Card(props) {
  const { name, description, photo, title, image, onPress } = props;
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailHeader}>
          <AppText style={styles.title}>{title}</AppText>
        </View>
      </View>

      <View>
        <AppText style={styles.title}>{name}</AppText>
        <Carousel photo={photo} padding={40} height={300} />
        {/* <Image style={styles.photo} source={photo} /> */}
      </View>

      <View style={styles.description}>
        <AppText style={styles.titleDescription}>{description}</AppText>
      </View>
      <View style={styles.line}></View>
      <View style={styles.footer}>
        <Button
          title="Información"
          style={styles.button}
          onPress={onPress}
          color="white"
          colorText="grey"
        />
        <Button
          title="Apoyar Refugio"
          style={styles.button}
          color="white"
          colorText="grey"
        />
        <Button
          title="Adoptar"
          style={styles.button}
          color="white"
          colorText="grey"
        />
      </View>
    </View>
  );
}

export default Card;
