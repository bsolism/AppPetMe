import React from "react";
import { View, Image } from "react-native";
import Button from "../Button";
import AppText from "../AppTex";
import Carousel from "../Carousel";

import styles from "./styles";
import routes from "../../Navigation/routes";

function Card(props) {
  const { pet, navigation } = props;
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        {pet.image && <Image style={styles.image} source={pet.image} />}
        <View style={styles.detailHeader}>
          <AppText style={styles.title}>{pet.title}</AppText>
        </View>
      </View>

      <View>
        <AppText style={styles.title}>{pet.name}</AppText>
        <Carousel photo={pet.photo} padding={40} height={300} />
        {/* <Image style={styles.photo} source={photo} /> */}
      </View>

      <View style={styles.description}>
        <AppText style={styles.titleDescription}>{pet.description}</AppText>
      </View>
      <View style={styles.line}></View>
      <View style={styles.footer}>
        <Button
          title="Información"
          style={styles.button}
          onPress={() => navigation.navigate(routes.PET_DETAILS, pet)}
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
          onPress={() => navigation.navigate(routes.ADOPTION_REQUEST, pet)}
        />
      </View>
    </View>
  );
}

export default Card;
