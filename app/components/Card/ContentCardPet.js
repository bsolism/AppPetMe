import React from "react";
import { View, Image } from "react-native";
import Button from "../Button";
import AppText from "../AppTex";
import Carousel from "../Carousel";
import server from "../../service/server";

import styles from "./styles";
import routes from "../../navigation/routes";

function ContentCardPet(props) {
  const { pet, navigation } = props;

  return (
    <View>
      <View style={styles.headerContainer}>
        {pet.profileHouse.image == null ? (
          <Image
            style={styles.image}
            source={require("../../assets/img.png")}
          />
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: server.URI + "/houseimageprofile/" + pet.profileHouse.image,
            }}
          />
        )}
        <View style={styles.detailHeader}>
          <AppText style={styles.title}>{pet.profileHouse.name}</AppText>
        </View>
      </View>
      <View>
        <AppText style={styles.title}>{pet.name}</AppText>
        {<Carousel photos={pet.petPhotos} padding={40} height={300} />}
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

export default ContentCardPet;
