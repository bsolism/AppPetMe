import React, { useEffect } from "react";
import { View, ScrollView, Alert } from "react-native";
import ImagePicker from "../../components/ImagePicker";
import useApi from "../../hooks/useApi";
import user from "../../service/user";
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../../components/FormComponent";
import * as Yup from "yup";

import styles from "./styles";
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().label("Phone Number"),
  city: Yup.string().required().label("City"),
  address: Yup.string().required().label("Address"),
  emailUser: Yup.string().required().email().label("Email"),
});

function RegisterHouse(props) {
  const userApi = useApi(user.getUser);

  useEffect(() => {
    userApi.request();
  }, []);

  const register = async (dataForm, { resetForm }) => {
    console.log(dataForm);
    if (dataForm.userId == 0) {
      Alert.alert("Email de usuario no existe");
      return;
    }

    resetForm();
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="never">
      <Form
        initialValues={{
          name: "",
          email: "",
          phone: "",
          city: "",
          address: "",
          image: null,
          emailUser: "",
          userId: 0,
        }}
        onSubmit={register}
        validationSchema={validationSchema}
      >
        <View style={styles.containerImage}>
          <ImagePicker />
        </View>
        <View style={styles.content}>
          <FormField
            autoCorrect={false}
            icon="home-account"
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCorrect={false}
            icon="city"
            name="city"
            placeholder="City"
          />
          <FormField
            autoCorrect={false}
            icon="google-maps"
            name="address"
            placeholder="Address"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCorrect={false}
            icon="phone"
            name="phone"
            placeholder="Phone"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            icon="email"
            name="emailUser"
            placeholder="User Email"
            data={userApi.data}
          />

          <SubmitButton title="Register" />
        </View>
      </Form>
    </ScrollView>
  );
}

export default RegisterHouse;
