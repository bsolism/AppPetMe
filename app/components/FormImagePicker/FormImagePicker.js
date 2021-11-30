import React, { useEffect } from "react";
import { useFormikContext } from "formik";

import ImageInputList from "./ImageInputList";

function FormImagePicker({ name, images, navigation }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  images.map((val) => imageUris.push(val));

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <ImageInputList
      imageUris={imageUris}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
      imageServer={images}
    />
  );
}

export default FormImagePicker;
