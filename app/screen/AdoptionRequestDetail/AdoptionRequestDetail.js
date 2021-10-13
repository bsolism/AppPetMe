import React, { useState, useEffect } from "react";
import { View, ScrollView, useWindowDimensions } from "react-native";

import Carousel from "../../components/Carousel";
import Screen from "../../components/Screen";
import TitleSeparator from "../../components/SeparadorTitle";
import RowWithModal from "../../components/RowWithModal";
import SwitchForm from "../../components/Switch";
import AppText from "../../components/AppTex";
import Button from "../../components/Button";
import Modal from "./Modal";
import requestService from "../../service/RequestAdoption";
import useApi from "../../hooks/useApi";

import styles from "./styles";

function AdoptionRequestDetail({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { height } = useWindowDimensions();
  const [icon, setIcon] = useState();
  const [field, setField] = useState();
  const data = route.params;
  const [dataMod, setDataMod] = useState({
    requestAdoptionId: data.requestAdoptionId,
    name: data.name,
    email: data.email,
    dni: data.dni,
    phone: data.phone,
    address: data.address,
    city: data.city,
    province: data.province,
    country: data.country,
    timeAlone: data.timeAlone,
    hasPets: data.hasPets,
    whatPet: data.whatPet,
    why: data.why,
    comentary: data.comentary,
    isApproved: data.isApproved,
    isActive: data.isActive,
    isRejected: data.isRejected,
    pet: {
      name: data.pet.name,
      old: data.pet.old,
      sex: data.pet.sex,
      color: data.pet.color,
      weight: data.pet.weight,
    },
  });
  const [isEnabled, setIsEnabled] = useState(data.hasPets);
  const updateApi = useApi(requestService.update);

  const onPressModal = (info) => {
    setField(info);
    setModalVisible(true);
  };

  useEffect(() => {
    if (dataMod.hasPets != isEnabled) {
      setDataMod({ ...dataMod, hasPets: isEnabled });
      updateSwitch();
    }
  }, [isEnabled]);
  const updateSwitch = async () => {
    if (!isEnabled) {
      const dataUpdate = {
        requestAdoptionId: dataMod.requestAdoptionId,
        hasPets: false,
        whatPet: "",
        isApproved: dataMod.isApproved,
        isActive: dataMod.isActive,
        isRejected: dataMod.isRejected,
      };
      setDataMod({ ...dataMod, whatPet: "" });
      await updateApi.request(dataUpdate);
    }
  };

  const Canceled = async () => {
    const dataUpdate = {
      requestAdoptionId: dataMod.requestAdoptionId,
      hasPets: dataMod.hasPets,
      isApproved: dataMod.isApproved,
      isActive: false,
      isRejected: dataMod.isRejected,
    };
    setDataMod({ ...dataMod, isActive: false });
    const res = await updateApi.request(dataUpdate);
    if (res.ok) {
      alert("Solicitud de adopción ha sido cancelada");
      navigation.goBack();
    }
  };

  return (
    <>
      <Screen style={styles.container}>
        <View style={styles.containerImage}>
          <Carousel
            photos={data.pet.petPhotos}
            padding={10}
            height={height * 0.4}
          />
        </View>
        <ScrollView style={styles.scrollview}>
          <TitleSeparator title="Mascota" />
          <View style={{ flexDirection: "row" }}>
            <RowWithModal
              titleRow="Nombre"
              styleText={styles.textTitle}
              iconName="dog"
              itemName={dataMod.pet.name}
              style={styles.text}
              styleWidth={{
                width: "49%",

                marginLeft: 3,
              }}
              modal={false}
            />
            <RowWithModal
              titleRow="Años"
              styleText={styles.textTitle}
              iconName="baby-carriage"
              itemName={dataMod.pet.old}
              style={styles.text}
              styleWidth={{
                width: "49%",
              }}
              modal={false}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <RowWithModal
              titleRow="Sexo"
              styleText={styles.textTitle}
              iconName="gender-male-female"
              itemName={dataMod.pet.sex}
              style={styles.text}
              modal={false}
              styleWidth={{
                width: "33%",

                marginLeft: 1,
              }}
            />
            <RowWithModal
              titleRow="Color"
              styleText={styles.textTitle}
              iconName="invert-colors"
              itemName={dataMod.pet.color}
              style={styles.text}
              modal={false}
              styleWidth={{
                width: "33%",
              }}
            />
            <RowWithModal
              titleRow="Peso"
              styleText={styles.textTitle}
              iconName="weight"
              itemName={dataMod.pet.weight}
              style={styles.text}
              modal={false}
              styleWidth={{
                width: "33%",
              }}
            />
          </View>
          <TitleSeparator title="Información solicitante" />
          <RowWithModal
            titleRow="Nombre"
            styleText={styles.textTitle}
            iconName="account"
            itemName={dataMod.name}
            style={styles.text}
            onPress={() =>
              onPressModal({
                field: "name",
                icon: "account",
                data: dataMod.name,
                id: dataMod.requestAdoptionId,
              })
            }
          />
          <RowWithModal
            titleRow="Email"
            styleText={styles.textTitle}
            iconName="email"
            itemName={dataMod.email}
            style={styles.text}
            onPress={() =>
              onPressModal({
                field: "email",
                icon: "email",
                data: dataMod.email,
                id: dataMod.requestAdoptionId,
              })
            }
          />
          <RowWithModal
            titleRow="DNI"
            styleText={styles.textTitle}
            iconName="account-lock"
            itemName={dataMod.dni}
            style={styles.text}
            onPress={() =>
              onPressModal({
                field: "dni",
                icon: "account-lock",
                data: dataMod.dni,
                id: dataMod.requestAdoptionId,
              })
            }
          />
          <RowWithModal
            titleRow="Phone"
            styleText={styles.textTitle}
            iconName="phone"
            itemName={dataMod.phone}
            style={styles.text}
            onPress={() =>
              onPressModal({
                field: "phone",
                icon: "phone",
                data: dataMod.phone,
                id: dataMod.requestAdoptionId,
              })
            }
          />
          <TitleSeparator title="Dirección solicitante" />
          <RowWithModal
            titleRow="Colonia"
            styleText={styles.textTitle}
            iconName="map-marker-radius"
            itemName={dataMod.address}
            style={styles.text}
            onPress={() =>
              onPressModal({
                field: "address",
                icon: "map-marker-radius",
                data: dataMod.address,
                id: dataMod.requestAdoptionId,
              })
            }
          />
          <RowWithModal
            titleRow="Ciudad"
            styleText={styles.textTitle}
            iconName="map-marker-radius"
            itemName={dataMod.city}
            style={styles.text}
            onPress={() =>
              onPressModal({
                field: "city",
                icon: "map-marker-radius",
                data: dataMod.city,
                id: dataMod.requestAdoptionId,
              })
            }
          />
          <RowWithModal
            titleRow="Departamento"
            styleText={styles.textTitle}
            iconName="map-marker-radius"
            itemName={dataMod.province}
            style={styles.text}
            onPress={() =>
              onPressModal({
                field: "province",
                icon: "map-marker-radius",
                data: dataMod.province,
                id: dataMod.requestAdoptionId,
              })
            }
          />
          <RowWithModal
            titleRow="Pais"
            styleText={styles.textTitle}
            iconName="map-marker-radius"
            itemName={dataMod.country}
            style={styles.text}
            onPress={() =>
              onPressModal({
                field: "country",
                icon: "map-marker-radius",
                data: dataMod.country,
                id: dataMod.requestAdoptionId,
              })
            }
          />

          <TitleSeparator title="Otra información" />
          <RowWithModal
            titleRow="Tiempo (horas) que la mascota estará sola (por día)"
            styleText={styles.textTitle}
            iconName="hours-24"
            itemName={dataMod.timeAlone}
            style={styles.text}
            onPress={() =>
              onPressModal({
                field: "timeAlone",
                icon: "hours-24",
                data: dataMod.timeAlone,
                id: dataMod.requestAdoptionId,
              })
            }
          />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <AppText style={styles.textTitle}>¿Tienes mascota?</AppText>
            <SwitchForm
              name="hasPets"
              isEnabled={isEnabled}
              setIsEnabled={setIsEnabled}
            />
          </View>

          {isEnabled ? (
            <RowWithModal
              titleRow="¿Que mascota tienes?"
              styleText={styles.textTitle}
              iconName="head-question"
              itemName={dataMod.whatPet}
              onPress={() =>
                onPressModal({
                  field: "whatPet",
                  icon: "head-question",
                  data: dataMod.whatPet,
                  id: dataMod.requestAdoptionId,
                })
              }
            />
          ) : null}
          <RowWithModal
            titleRow="¿Porque quieres una mascota?"
            styleText={styles.textTitle}
            iconName="head-question"
            itemName={dataMod.why}
            onPress={() =>
              onPressModal({
                field: "why",
                icon: "head-question",
                data: dataMod.why,
                id: dataMod.requestAdoptionId,
              })
            }
          />
          <RowWithModal
            titleRow="Comentario"
            styleText={styles.textTitle}
            iconName="frequently-asked-questions"
            itemName={dataMod.comentary}
            onPress={() =>
              onPressModal({
                field: "comentary",
                icon: "head-question",
                data: dataMod.comentary,
                id: dataMod.requestAdoptionId,
              })
            }
          />
          <Button
            title="Cancelar Solicitud"
            color="primary"
            colorText="white"
            onPress={() => Canceled()}
          />
        </ScrollView>
      </Screen>
      {field != undefined ? (
        <Modal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          data={dataMod}
          setData={setDataMod}
          field={field}
        />
      ) : null}
    </>
  );
}

export default AdoptionRequestDetail;
