import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Yup from "yup";
import { Form, SubmitButton, FormField } from "../../components/FormComponent";
import initialValues from "../../models/ValueFormAdoption";

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
  province: Yup.string().required("Province Required").min(1).label("Province"),
  country: Yup.string().required("Country Required").min(1).label("Country"),
});

function FormAdoption(props) {
  const { params } = props.route;

  const handleSubmit = async (listing) => {
    listing.petId = params.petId;

    console.log(listing);
  };
  return (
    <View style={styles.container}>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ScrollView>
          <FormField
            maxLength={255}
            name="name"
            placeholder="Ingrese su Nombre"
            label="Nombre"
          />
          <FormField
            maxLength={255}
            name="dni"
            placeholder="Ingrese su ID"
            label="DNI"
          />
          <FormField
            maxLength={255}
            name="phone"
            placeholder="Ingrese su Telefono"
            label="Phone"
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
            label="Dirección / Colonia"
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

          <SubmitButton title="Enviar " />
        </ScrollView>
      </Form>
    </View>
  );
}

export default FormAdoption;
