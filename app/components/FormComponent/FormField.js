import React, { useState } from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";
import AppText from "../AppTex";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";
import colors from "../../config/colors";

function FormField(props) {
  const { name, width, label, ...otherProps } = props;
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  const [visible, setvisible] = useState(false);

  return (
    <>
      <View style={styles.containerLabel}>
        {values[name] || visible ? (
          <AppText style={styles.label}>{label}</AppText>
        ) : null}
      </View>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        onFocus={() => setvisible(true)}
        onEndEditing={() => (values[name] ? null : setvisible(false))}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  containerLabel: {
    marginTop: 10,
  },
  label: {
    fontFamily: "Roboto",
    color: colors.grey,
    fontSize: 12,
    marginLeft: 10,
    fontWeight: "600",
    fontStyle: "italic",
  },
});

export default FormField;
