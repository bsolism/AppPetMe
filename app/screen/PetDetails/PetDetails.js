import React from "react";
import { View, ScrollView, useWindowDimensions } from "react-native";
import Carousel from "../../components/Carousel";
import TitleSeparator from "../../components/SeparadorTitle";
import AppText from "../../components/AppTex";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import Button from "../../components/Button";

import styles from "./styles";

function PetDetails({ route, navigation }) {
  const pet = route.params;
  const { height } = useWindowDimensions();

  return (
    <Screen style={styles.container}>
      <View style={styles.containerImage}>
        <Carousel photo={pet.photo} padding={5} height={height * 0.4} />
      </View>
      <ScrollView style={styles.scrollview}>
        <TitleSeparator title="Perfil del cachorro" />
        <View style={styles.profilePet}>
          <View style={styles.row}>
            <AppText style={[styles.textRowSmall, { color: colors.grey }]}>
              Name:
            </AppText>
            <AppText style={styles.textRowSmall}>{pet.name}</AppText>
            <AppText style={[styles.textRowSmall, { color: colors.grey }]}>
              Edad:
            </AppText>
            <AppText style={styles.textRowSmall}>{pet.old}</AppText>
          </View>
          <View style={styles.row}>
            <AppText style={[styles.textRowSmall, { color: colors.grey }]}>
              Peso:
            </AppText>
            <AppText style={styles.textRowSmall}>{pet.weight}</AppText>
            <AppText style={[styles.textRowSmall, { color: colors.grey }]}>
              Altura:
            </AppText>
            <AppText style={styles.textRowSmall}>{pet.height}</AppText>
          </View>
          <View style={styles.row}>
            <AppText style={[styles.textRowSmall, { color: colors.grey }]}>
              Sexo:
            </AppText>
            <AppText style={styles.textRowSmall}>{pet.sex}</AppText>
            <AppText style={[styles.textRowSmall, { color: colors.grey }]}>
              Color:
            </AppText>
            <AppText style={styles.textRowSmall}>{pet.color}</AppText>
          </View>
        </View>
        <TitleSeparator title="Perfil del Refugio" />
        <View style={styles.profilePet}>
          <View style={styles.row}>
            <AppText style={[styles.textRowSmall, { color: colors.grey }]}>
              Name:
            </AppText>
            <AppText style={[styles.textRowLarge]}>{pet.refuge.name}</AppText>
          </View>
          <View style={styles.row}>
            <AppText style={[styles.textRowSmall, { color: colors.grey }]}>
              Ciudad:
            </AppText>
            <AppText style={[styles.textRowLarge]}>{pet.refuge.city}</AppText>
          </View>
          <View style={styles.row}>
            <AppText style={[styles.textRowSmall, { color: colors.grey }]}>
              Direccion:
            </AppText>
            <AppText style={[styles.textRowLarge]}>
              {pet.refuge.address}
            </AppText>
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
          <Button title="Adoptar" style={styles.Button} colorText="black" />
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
