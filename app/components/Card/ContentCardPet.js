import React from "react";
import { View, Image } from "react-native";
import Moment from "moment";
import Button from "../Button";
import AppText from "../AppTex";
import Carousel from "../Carousel";
import server from "../../service/server";

import styles from "./styles";
import routes from "../../navigation/routes";

function ContentCardPet(props) {
  const {
    dateCreated,
    editable,
    photoHouse,
    nameHouse,
    petName,
    photos,
    description,
    pet,
    navigation,
    profileHouse,
    onRefresh,
  } = props;

  return (
    <View>
      <View style={styles.headerContainer}>
        {photoHouse == null ? (
          <Image
            style={styles.image}
            source={require("../../assets/img.png")}
          />
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: server.URI + "/houseimageprofile/" + photoHouse,
            }}
          />
        )}
        <View style={styles.detailHeader}>
          <AppText style={styles.title}>{nameHouse}</AppText>
          <AppText style={styles.date}>
            Fecha: {Moment(dateCreated).format("DD/MMM/yyyy")}
          </AppText>
        </View>
      </View>
      <View>
        <AppText style={styles.title}>{petName}</AppText>
        {<Carousel photos={photos} padding={40} height={300} />}
      </View>
      <View style={styles.description}>
        <AppText style={styles.titleDescription}>{description}</AppText>
      </View>
      <View style={styles.line}></View>
      <View style={styles.footer}>
        <Button
          title="Información"
          style={styles.button}
          onPress={() =>
            navigation.navigate(
              !editable ? routes.PET_DETAILS : routes.FORM_ADD_PET,
              {
                edit: editable,
                pet: pet,
                house: profileHouse,
                onGoBack: onRefresh,
              }
            )
          }
          color="white"
          colorText="grey"
        />
        {!editable ? (
          <>
            <Button
              title="Apadrinar"
              style={styles.button}
              color="white"
              colorText="grey"
              onPress={() => navigation.navigate(routes.PAYMENT, pet)}
            />
            <Button
              title="Adoptar"
              style={styles.button}
              color="white"
              colorText="grey"
              onPress={() => navigation.navigate(routes.ADOPTION_REQUEST, pet)}
            />
          </>
        ) : null}
      </View>
    </View>
  );
}

export default ContentCardPet;
