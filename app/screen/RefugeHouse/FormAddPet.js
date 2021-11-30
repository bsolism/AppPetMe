import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";
import FormImagePicker from "../../components/FormImagePicker";
import {
  Form,
  FormField,
  SwitchForm,
  SubmitButton,
} from "../../components/FormComponent";
import AppText from "../../components/AppTex";
import Screen from "../../components/Screen";
import TitleSeparator from "../../components/SeparadorTitle";
import Button from "../../components/Button";
import { Picker } from "@react-native-picker/picker";
import RadioGroup from "react-native-radio-buttons-group";
import { RadioButton, Text } from "react-native-paper";
import petService from "../../service/Pets";
import UploadScreen from "../UploadScreen";
import server from "../../service/server";

import defaultStyles from "../../config/styles";

const validationSchema = Yup.object().shape({
  file: Yup.array().min(1, "Please select at least one image."),
  name: Yup.string().required().label("Nombre"),
  description: Yup.string().required().label("Descripción"),
  old: Yup.number().required().label("Edad"),
  weight: Yup.string().required().label("Peso"),
  height: Yup.string().required().label("Estatura"),
  color: Yup.string().required().label("Color"),
  clinicHistory: Yup.string().required().label("Historia Clinica"),
  lifeHistory: Yup.string().required().label("Historia de Vida"),
});

function FormAddPet(props) {
  const { navigation } = props;
  const { params } = props.route;
  const [petSize, setPetSize] = useState(
    params.edit ? params.pet.category : null
  );
  const [value, setValue] = useState(params.edit ? params.pet.sex : "male");
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const onSubmit = async (data, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    data.category = petSize;
    data.sex = value;
    data.profileHouseId = params.profileHouseId;
    const result = await petService.addPet({ ...data }, (progress) =>
      setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    resetForm();
    params.onGoBack();
    navigation.goBack();
  };
  const images = () => {
    const photo = params.pet.petPhotos.map(
      (data) => server.URI + "/ImagePet/" + data.image
    );
    return photo;
  };

  return (
    <>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        initialValues={{
          category: params.edit ? params.pet.category : "",
          clinicHistory: params.edit ? params.pet.clinicHistory : "",
          color: params.edit ? params.pet.color : "",
          description: params.edit ? params.pet.description : "",
          file: [],
          height: params.edit ? params.pet.height : "",
          profileHouseId: params.edit ? params.pet.profileHouseId : 0,
          isAdoptable: params.edit ? params.pet.isAdoptable : true,
          lifeHistory: params.edit ? params.pet.lifeHistory : "",
          name: params.edit ? params.pet.name : "",
          old: params.edit ? params.pet.old.toString() : "",
          sex: params.edit ? params.pet.sex : "",
          weight: params.edit ? params.pet.weight : "",
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <View style={styles.images}>
          <TitleSeparator title="Cargar imagenes" />
          <FormImagePicker
            name="file"
            images={images()}
            navigation={navigation}
          />
        </View>
        <TitleSeparator title="Información General" />
        <ScrollView>
          <FormField
            maxLength={255}
            name="name"
            placeholder="Ingrese Nombre"
            label="Nombre"
          />
          <FormField
            maxLength={255}
            name="description"
            placeholder="Descripción"
            label="Descripción"
          />
          <View style={styles.picker}>
            <Picker
              selectedValue={petSize}
              onValueChange={(itemValue, itemIndex) => setPetSize(itemValue)}
            >
              <Picker.Item label="Pequeño" value="Little" />
              <Picker.Item label="Mediano" value="Medium" />
              <Picker.Item label="Grande" value="Big" />
            </Picker>
          </View>
          <AppText>Edad (meses):</AppText>
          <FormField
            maxLength={10}
            name="old"
            keyboardType="numeric"
            width={240}
          />
          <FormField
            maxLength={255}
            name="weight"
            placeholder="Peso"
            label="Peso"
          />
          <FormField
            maxLength={255}
            name="height"
            placeholder="Estatura"
            label="Estatura"
          />
          <FormField
            maxLength={255}
            name="color"
            placeholder="Color"
            label="Color"
          />
          <View style={styles.sex}>
            <AppText style={styles.text}>Genero</AppText>
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ marginRight: 10 }}>Macho</Text>
                <RadioButton
                  color={defaultStyles.colors.light_blue}
                  value="male"
                />
                <Text style={{ marginRight: 10 }}>Hembra</Text>
                <RadioButton
                  color={defaultStyles.colors.light_blue}
                  value="female"
                />
              </View>
            </RadioButton.Group>
          </View>
          <View style={styles.sex}>
            <AppText style={styles.text}>Disponible para adopción</AppText>
            <SwitchForm
              style={styles.switch}
              name="isAdoptable"
              isEnabled={params.edit ? params.pet.isAdoptable : true}
            />
          </View>
          <FormField
            maxLength={255}
            name="clinicHistory"
            placeholder="Historia Clinica"
            label="Historia Clinica"
          />
          <FormField
            maxLength={255}
            name="lifeHistory"
            placeholder="Historia de Vida"
            label="Historia de Vida"
          />
          <SubmitButton title="Enviar" />
        </ScrollView>
      </Form>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  images: {
    margin: 10,
  },
  picker: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 10,
    marginVertical: 10,
    height: 50,
    justifyContent: "center",
  },
  sex: {
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
  },
  switch: {
    marginRight: 50,
  },
  text: {
    color: defaultStyles.colors.dark_grey,
    marginRight: 30,
  },
});

export default FormAddPet;
