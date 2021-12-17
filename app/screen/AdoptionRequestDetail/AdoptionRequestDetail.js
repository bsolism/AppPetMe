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
import domain from "./Domain";

import styles from "./styles";

function AdoptionRequestDetail({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { height } = useWindowDimensions();
  const [field, setField] = useState();
  const data = route.params.item;
  const onRefresh = route.params.onRefresh;
  const approve = route.params.approve;
  const [dataMod, setDataMod] = useState();
  const [isEnabled, setIsEnabled] = useState(data.hasPets);
  const updateApi = useApi(requestService.update);

  const onPressModal = (info) => {
    setField(info);
    setModalVisible(true);
  };
  useEffect(() => {
    const hook = domain.dataHook(data);
    setDataMod(hook.dataMod);
  }, []);

  useEffect(() => {
    if (dataMod) {
      if (dataMod.hasPets != isEnabled) {
        setDataMod({ ...dataMod, hasPets: isEnabled });
        domain.updateSwitch(isEnabled, dataMod, setDataMod, updateApi);
      }
    }
  }, [isEnabled]);

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
              itemName={dataMod ? dataMod.pet.name : null}
              style={styles.text}
              styleWidth={{
                width: "49%",

                marginLeft: 3,
              }}
              modal={false}
            />
            <RowWithModal
              titleRow="Edad Meses"
              styleText={styles.textTitle}
              iconName="baby-carriage"
              itemName={dataMod ? dataMod.pet.old : null}
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
              itemName={dataMod ? dataMod.pet.sex : null}
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
              itemName={dataMod ? dataMod.pet.color : null}
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
              itemName={dataMod ? dataMod.pet.weight : null}
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
            itemName={dataMod ? dataMod.name : null}
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
            itemName={dataMod ? dataMod.email : null}
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
            itemName={dataMod ? dataMod.dni : null}
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
            itemName={dataMod ? dataMod.phone : null}
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
            itemName={dataMod ? dataMod.address : null}
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
            itemName={dataMod ? dataMod.city : null}
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
            itemName={dataMod ? dataMod.province : null}
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
            itemName={dataMod ? dataMod.country : null}
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
            itemName={dataMod ? dataMod.timeAlone : null}
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
              itemName={dataMod ? dataMod.whatPet : null}
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
            itemName={dataMod ? dataMod.why : null}
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
            itemName={dataMod ? dataMod.comentary : null}
            onPress={() =>
              onPressModal({
                field: "comentary",
                icon: "head-question",
                data: dataMod.comentary,
                id: dataMod.requestAdoptionId,
              })
            }
          />
          {route.params.approve ? (
            <View>
              <Button
                title="Aprobar"
                color="secondary"
                colorText="white"
                onPress={() =>
                  domain.Approved(
                    dataMod,
                    setDataMod,
                    navigation,
                    onRefresh,
                    updateApi,
                    approve
                  )
                }
              />
              <Button
                title="Rechazar"
                color="primary"
                colorText="white"
                onPress={() =>
                  domain.Rejected(
                    dataMod,
                    setDataMod,
                    navigation,
                    onRefresh,
                    updateApi,
                    approve
                  )
                }
              />
            </View>
          ) : (
            <Button
              title="Cancelar Solicitud"
              color="primary"
              colorText="white"
              onPress={() =>
                domain.Canceled(dataMod, setDataMod, updateApi, navigation)
              }
            />
          )}
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
