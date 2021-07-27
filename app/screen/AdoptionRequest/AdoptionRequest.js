import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import * as Yup from "yup";
import { Form } from "../../components/FormComponent";
import Wizard from "../../components/FormWizard/Wizard";
import Screen from "../../components/Screen";

import styles from "./styles";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name Required").min(1).label("Name"),
  dni: Yup.string().required("DNI Required").min(1).label("Dni"),
  phone: Yup.string().required("Phone Required").min(1).label("Phone"),
  email: Yup.string()
    .email("Email not valid")
    .required("Email Required")
    .min(1)
    .label("Email"),
  address: Yup.string().required("Address Required").min(1).label("Address"),
  city: Yup.string().required("City Required").min(1).label("City"),
  country: Yup.string().required("Country Required").min(1).label("Country"),
  province: Yup.string().required("Province Required").min(1).label("Province"),
  petId: Yup.number().required().min(1).label("PetId"),
  hasPets: Yup.bool(),
  why: Yup.string().required().min(1).label("Why"),
  timeAlone: Yup.number().required("").min(1).max(100).label(""),
});

function AdoptionRequest(props) {
  const { params } = props.route;
  const [valuesInit, setValuesInit] = useState({
    ...initialValues,
    petId: params.id,
  });

  const handleSubmit = async (listing, { resetForm }) => {
    console.log(listing);
    resetForm();
  };

  return (
    <View style={styles.containerForm}>
      <Form
        initialValues={valuesInit}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Wizard pet={params} />
      </Form>
    </View>
  );
}

const initialValues = {
  name: "",
  dni: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  country: "",
  province: "",
  petId: 0,
  comentary: "",
  hasPets: false,
  whatPet: "",
  why: "",
  timeAlone: "",
};

export default AdoptionRequest;
