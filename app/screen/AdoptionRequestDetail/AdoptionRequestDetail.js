import React from "react";
import { View, ScrollView, useWindowDimensions } from "react-native";

import Carousel from "../../components/Carousel";
import Screen from "../../components/Screen";
import TitleSeparator from "../../components/SeparadorTitle";
import RowWithModal from "../../components/RowWithModal";
import SwitchForm from "../../components/Switch";
import AppText from "../../components/AppTex";
import Button from "../../components/Button";

import styles from "./styles";

function AdoptionRequestDetail({ route, navigation }) {
  const { height } = useWindowDimensions();
  const data = route.params;

  const onPressModal = (field) => {
    console.log(field);
    /*setField(field);
    setModalVisible(true);*/
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.containerImage}>
        <Carousel
          photos={data.pet.petPhotos}
          padding={20}
          height={height * 0.4}
        />
      </View>
      <ScrollView style={styles.scrollview}>
        <TitleSeparator title="Información solicitante" />
        <RowWithModal
          titleRow="Nombre"
          styleText={styles.textTitle}
          iconName="account"
          itemName={data.name}
          style={styles.text}
          onPress={() => onPressModal("name")}
        />
        <RowWithModal
          titleRow="Email"
          styleText={styles.textTitle}
          iconName="email"
          itemName={data.email}
          style={styles.text}
          onPress={() => onPressModal("email")}
        />
        <RowWithModal
          titleRow="DNI"
          styleText={styles.textTitle}
          iconName="account-lock"
          itemName={data.dni}
          style={styles.text}
          onPress={() => onPressModal("dni")}
        />
        <RowWithModal
          titleRow="Phone"
          styleText={styles.textTitle}
          iconName="phone"
          itemName={data.phone}
          style={styles.text}
          onPress={() => onPressModal("phone")}
        />
        <TitleSeparator title="Dirección solicitante" />
        <RowWithModal
          titleRow="Colonia"
          styleText={styles.textTitle}
          iconName="map-marker-radius"
          itemName={data.address}
          style={styles.text}
          onPress={() => onPressModal("address")}
        />
        <RowWithModal
          titleRow="Ciudad"
          styleText={styles.textTitle}
          iconName="map-marker-radius"
          itemName={data.city}
          style={styles.text}
          onPress={() => onPressModal("city")}
        />
        <RowWithModal
          titleRow="Departamento"
          styleText={styles.textTitle}
          iconName="map-marker-radius"
          itemName={data.province}
          style={styles.text}
          onPress={() => onPressModal("province")}
        />
        <RowWithModal
          titleRow="Pais"
          styleText={styles.textTitle}
          iconName="map-marker-radius"
          itemName={data.country}
          style={styles.text}
          onPress={() => onPressModal("country")}
        />
        <TitleSeparator title="Mascota" />
        <RowWithModal
          titleRow="Nombre"
          styleText={styles.textTitle}
          iconName="dog"
          itemName={data.pet.name}
          style={styles.text}
        />
        <RowWithModal
          titleRow="Años"
          styleText={styles.textTitle}
          iconName="baby-carriage"
          itemName={data.pet.old}
          style={styles.text}
        />
        <RowWithModal
          titleRow="Sexo"
          styleText={styles.textTitle}
          iconName="gender-male-female"
          itemName={data.pet.sex}
          style={styles.text}
        />
        <RowWithModal
          titleRow="Color"
          styleText={styles.textTitle}
          iconName="invert-colors"
          itemName={data.pet.color}
          style={styles.text}
        />
        <RowWithModal
          titleRow="Peso"
          styleText={styles.textTitle}
          iconName="weight"
          itemName={data.pet.weight}
          style={styles.text}
        />
        <TitleSeparator title="Otra información" />
        <RowWithModal
          titleRow="Tiempo (horas) que la mascota estará sola (por día)"
          styleText={styles.textTitle}
          iconName="hours-24"
          itemName={data.timeAlone}
          style={styles.text}
          onPress={() => onPressModal("timeAlone")}
        />
        <View style={{ flexDirection: "row" }}>
          <AppText style={styles.textTitle}>¿Tienes mascota?</AppText>
          <SwitchForm name="hasPets" value={data.hasPets} />
        </View>
        {data.hasPets ? (
          <RowWithModal
            titleRow="¿Que mascota tienes?"
            styleText={styles.textTitle}
            iconName="head-question"
            itemName={data.whatPet}
          />
        ) : null}
        <RowWithModal
          titleRow="¿Porque quieres una mascota?"
          styleText={styles.textTitle}
          iconName="head-question"
          itemName={data.why}
        />
        <RowWithModal
          titleRow="Comentario"
          styleText={styles.textTitle}
          iconName="frequently-asked-questions"
          itemName={data.comentary}
        />
        <Button title="Cancelar Solicitud" color="primary" colorText="white" />
      </ScrollView>
    </Screen>
  );
}

export default AdoptionRequestDetail;
