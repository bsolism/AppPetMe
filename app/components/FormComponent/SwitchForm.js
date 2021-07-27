import React from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";

import Switch from "../Switch";

function SwitchForm(props) {
  const { name, width, ...otherProps } = props;
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <Switch
      width={width}
      value={values[name]}
      onValueChange={(option) => setFieldValue(name, option)}
      {...otherProps}
    />
  );
}

export default SwitchForm;
