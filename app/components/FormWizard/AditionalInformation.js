import React from "react";
import { View, ScrollView } from "react-native";
import { FormField, SubmitButton, SwitchForm } from "../FormComponent";
import Button from "../Button";
import { useFormikContext } from "formik";

import styles from "./styles";
import AppText from "../AppTex";

function AditionalInformation(props) {
  const { prevStep } = props;
  const { values } = useFormikContext();

  const prev = () => {
    prevStep();
  };
  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <View style={styles.row}>
        <AppText>¿Actualmente tiene mascotas?</AppText>
        <SwitchForm name="hasPets" />
      </View>
      {values["hasPets"] ? (
        <FormField
          maxLength={255}
          name="whatPet"
          placeholder="Que Mascota tiene"
          label="Mascotas"
        />
      ) : null}

      <FormField
        maxLength={255}
        name="why"
        placeholder="Porque Quiere Mascotas"
        label="¿porque quiere mascotas?"
      />
      <View style={styles.row}>
        <AppText style={{ width: "60%", marginRight: 20 }}>
          Horas al dia que estará sola la mascota
        </AppText>
        <FormField
          maxLength={8}
          name="timeAlone"
          keyboardType="numeric"
          width={80}
        />
      </View>

      <FormField
        maxLength={255}
        name="comentary"
        placeholder="Comentarios"
        multiline
        numberOfLines={5}
        label="Comentario"
      />
      <View style={styles.footer}>
        <Button
          title="Atras"
          onPress={prev}
          style={styles.button}
          color="blue"
          colorText="white"
        />
        <SubmitButton title="Enviar" style={styles.button} />
      </View>
    </ScrollView>
  );
}

export default AditionalInformation;
