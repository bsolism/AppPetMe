import React from "react";
import { View, ScrollView, useWindowDimensions } from "react-native";
import Carousel from "../../components/Carousel";
import TitleSeparator from "../../components/SeparadorTitle";
import AppText from "../../components/AppTex";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import Button from "../../components/Button";
import routes from "../../Navigation/routes";

import styles from "./styles";

function PetDetails({ route, navigation }) {
  const { params } = route;
  const pet = params.pet;
  const profileHouse = params.house;
  const { height } = useWindowDimensions();

  return (
    <Screen style={styles.container}>
      <View style={styles.containerImage}>
        <Carousel photos={pet.petPhotos} padding={20} height={height * 0.4} />
      </View>
      <ScrollView style={styles.scrollview}>
        <TitleSeparator title="Perfil del cachorro" />
        <View style={styles.profilePet}>
          <View style={styles.row}>
            <View style={styles.textRowSmall}>
              <AppText style={{ color: colors.grey }}>Name:</AppText>
            </View>
            <View style={styles.textRowSmall}>
              <AppText>{pet.name}</AppText>
            </View>
            <View style={styles.textRowSmall}>
              <AppText style={{ color: colors.grey }}>Edad:</AppText>
            </View>
            <View style={styles.textRowSmall}>
              <AppText>{pet.old}</AppText>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.textRowSmall}>
              <AppText style={{ color: colors.grey }}>Peso:</AppText>
            </View>
            <View style={styles.textRowSmall}>
              <AppText>{pet.weight}</AppText>
            </View>
            <View style={styles.textRowSmall}>
              <AppText style={{ color: colors.grey }}>Altura:</AppText>
            </View>
            <View style={styles.textRowSmall}>
              <AppText>{pet.height}</AppText>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.textRowSmall}>
              <AppText style={{ color: colors.grey }}>Sexo:</AppText>
            </View>
            <View style={styles.textRowSmall}>
              <AppText>{pet.sex}</AppText>
            </View>
            <View style={styles.textRowSmall}>
              <AppText style={{ color: colors.grey }}>Color:</AppText>
            </View>
            <View style={styles.textRowSmall}>
              <AppText>{pet.color}</AppText>
            </View>
          </View>
        </View>
        <TitleSeparator title="Perfil del Refugio" />
        <View style={styles.profilePet}>
          <View style={styles.row}>
            <View style={[styles.textRowSmall, { color: colors.grey }]}>
              <AppText>Name:</AppText>
            </View>
            <View style={[styles.textRowLarge]}>
              <AppText>
                {pet.profileHouse ? pet.profileHouse.name : profileHouse.name}
              </AppText>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.textRowSmall, { color: colors.grey }]}>
              <AppText>Ciudad:</AppText>
            </View>
            <View style={[styles.textRowLarge]}>
              <AppText>
                {pet.profileHouse ? pet.profileHouse.city : profileHouse.city}
              </AppText>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.textRowSmall, { color: colors.grey }]}>
              <AppText>Direccion:</AppText>
            </View>
            <View style={[styles.textRowLarge]}>
              <AppText>
                {pet.profileHouse
                  ? pet.profileHouse.address
                  : profileHouse.address}
              </AppText>
            </View>
          </View>
        </View>
        <TitleSeparator title="Perfil Clinico" />
        <View style={styles.profilePet}>
          <View style={styles.row}>
            <AppText style={styles.textRowXlarge}>{pet.clinicHistory}</AppText>
          </View>
          <View>
            <AppText style={styles.textRowXlarge}>
              Es Apto para Adopción: {pet.isAdoptable ? "Si" : "No"}
            </AppText>
          </View>
        </View>
        <TitleSeparator title="Historia de Vida" />
        <View style={styles.profilePet}>
          <View style={styles.row}>
            <AppText style={styles.textRowXlarge}>{pet.lifeHistory}</AppText>
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            title="Adoptar"
            style={styles.Button}
            colorText="black"
            onPress={() => navigation.navigate(routes.ADOPTION_REQUEST, pet)}
          />
          <Button
            title="Apoyar Refugio"
            style={styles.Button}
            colorText="black"
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

export default PetDetails;
