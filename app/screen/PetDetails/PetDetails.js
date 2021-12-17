import React from "react";
import { View, ScrollView, useWindowDimensions } from "react-native";
import Carousel from "../../components/Carousel";
import TitleSeparator from "../../components/SeparadorTitle";
import AppText from "../../components/AppTex";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import Button from "../../components/Button";
import routes from "../../navigation/routes";
import RowDetail from "../../components/RowDetail";

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
          <RowDetail description="Nombre:" detail={pet.name} />
          <RowDetail description="Meses de Edad:" detail={pet.old} />
          <RowDetail description="Peso:" detail={pet.weight} />
          <RowDetail description="Altura:" detail={pet.height} />
          <RowDetail description="Sexo:" detail={pet.sex} />
          <RowDetail description="Color:" detail={pet.color} />
        </View>
        <TitleSeparator title="Perfil del Refugio" />
        <View style={styles.profilePet}>
          <RowDetail
            widthLeft="30%"
            widthRight="60%"
            description="Nombre:"
            detail={pet.profileHouse.name}
          />
          <RowDetail
            widthLeft="30%"
            widthRight="60%"
            description="Ciudad:"
            detail={pet.profileHouse.city}
          />
          <RowDetail
            widthLeft="30%"
            widthRight="60%"
            description="Dirección:"
            detail={
              pet.profileHouse ? pet.profileHouse.address : profileHouse.address
            }
          />
        </View>
        <TitleSeparator title="Perfil Clinico" />
        <View style={styles.profilePet}>
          <RowDetail description="Estado:" detail={pet.clinicHistory} />
          <RowDetail
            description="Es Adoptable:"
            detail={pet.isAdoptable ? "Si" : "No"}
          />
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
            title="Apadrinar"
            style={styles.Button}
            colorText="black"
            onPress={() => navigation.navigate(routes.PAYMENT, pet)}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

export default PetDetails;
