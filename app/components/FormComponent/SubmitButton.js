import React from "react";
import { useFormikContext } from "formik";
import Button from "../Button";

function SubmitButton({ title, style }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      title={title}
      onPress={handleSubmit}
      color="danger"
      colorText="white"
      style={style}
    />
  );
}

export default SubmitButton;
