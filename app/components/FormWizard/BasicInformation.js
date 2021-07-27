import React from "react";
import { ScrollView } from "react-native";
import pets from "../../models/PetModels";
import AppText from "../AppTex";
import Button from "../Button";

import { FormField } from "../FormComponent";

import styles from "./styles";

function BasicInformation(props) {
  const { nextStep, pet } = props;

  const next = () => {
    nextStep();
  };

  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <AppText>Usted va adoptar a: {pet.name}</AppText>
      <FormField
        maxLength={255}
        name="name"
        placeholder="Ingrese su Nombre"
        label="Nombre"
      />
      <FormField
        maxLength={15}
        name="dni"
        label="DNI"
        placeholder="Ingrese DNI"
      />
      <FormField
        maxLength={15}
        name="phone"
        placeholder="Ingrese numero de telefono"
        label="Telefono"
      />
      <FormField
        maxLength={100}
        name="email"
        placeholder="Ingrese email"
        keyboardType="email-address"
        autoCapitalize="none"
        label="Email"
      />
      <FormField
        maxLength={255}
        name="address"
        placeholder="Ingrese su dirección"
        label="Dirección"
      />
      <FormField
        maxLength={50}
        name="city"
        placeholder="Ingrese su Ciudad"
        label="Ciudad"
      />
      <FormField
        maxLength={50}
        name="province"
        placeholder="Ingrese su departamento"
        label="Departamento"
      />
      <FormField
        maxLength={20}
        name="country"
        placeholder="Ingrese su Pais"
        label="Pais"
      />
      <Button
        title="Siguiente"
        onPress={next}
        style={styles.button}
        color="blue"
        colorText="white"
      />
    </ScrollView>
  );
}

export default BasicInformation;
