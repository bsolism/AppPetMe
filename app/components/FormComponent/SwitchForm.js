import React from "react";
import { useFormikContext } from "formik";

import Switch from "../Switch";

function SwitchForm(props) {
  const { name, width, ...otherProps } = props;
  const { setFieldValue, values } = useFormikContext();
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
