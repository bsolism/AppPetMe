import React, { useState, useEffect } from "react";
import { View, ScrollView, Alert } from "react-native";
import ImagePicker from "../../components/ImagePicker";
import useApi from "../../hooks/useApi";
import user from "../../service/user";
import listingService from "../../service/ListingHouse";
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../../components/FormComponent";
import * as Yup from "yup";
import UploadScreen from "../UploadScreen";

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
  const [progress, setProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [imageUri, setImageUri] = useState();

  useEffect(() => {
    userApi.request();
  }, []);

  const register = async (dataForm, { resetForm }) => {
    dataForm.image = imageUri;
    if (dataForm.userId == 0) {
      Alert.alert("Email de usuario no existe");
      return;
    }
    setProgress(0);
    setUploadVisible(true);

    const result = await listingService.addProfileHouse(dataForm, (progress) =>
      setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    setImageUri(null);
    resetForm();
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="never">
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
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
          <ImagePicker imageUri={imageUri} setImageUri={setImageUri} />
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
