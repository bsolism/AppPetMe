import React from "react";
import { View } from "react-native";
import Carousel from "../../components/Carousel";
import TitleSeparator from "../../components/SeparadorTitle";
import AppText from "../../components/AppTex";
import styles from "./styles";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import Button from "../../components/Button";

function PetDetails({ route, navigation }) {
  const pet = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Carousel photo={pet.photo} padding={20} />
      </View>
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
          <AppText style={[styles.textRowLarge]}>{pet.refuge.address}</AppText>
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
      <Button
        title="Adoptar"
        style={styles.Button}
        color="primary"
        colorText="white"
      />
      <Button
        title="Apoyar Refugio"
        style={styles.Button}
        color="primary"
        colorText="white"
      />
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home"
        style={styles.Button}
        color="secondary"
        colorText="white"
      />
    </View>
  );
}

export default PetDetails;
