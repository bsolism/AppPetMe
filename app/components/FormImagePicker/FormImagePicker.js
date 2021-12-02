import React, { useEffect } from "react";
import { useFormikContext } from "formik";

import ImageInputList from "./ImageInputList";

function FormImagePicker({ name, images, navigation, count, setCount }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  useEffect(() => {
    if (count > 0) {
      if (images != undefined) {
        images.map((val) => imageUris.push(val));
      }
    }
    setCount(0);
  }, [count]);

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
