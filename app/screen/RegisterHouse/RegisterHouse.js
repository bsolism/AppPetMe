import React, { useState, useEffect } from "react";
import { View, ScrollView, Alert } from "react-native";
import ImagePicker from "../../components/ImagePicker";
import useApi from "../../hooks/useApi";
import users from "../../service/user";
import useAuth from "../../auth/useAuth";
import listingService from "../../service/ListingHouse";
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../../components/FormComponent";
import * as Yup from "yup";
import UploadScreen from "../UploadScreen";
import routes from "../../navigation/routes";

import styles from "./styles";
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().label("Phone Number"),
  city: Yup.string().required().label("City"),
  address: Yup.string().required().label("Address"),
  rtn: Yup.string().required().label("Address"),
  accountBank: Yup.string().required().label("Address"),
  typeAccount: Yup.string().required().label("Address"),
  bankName: Yup.string().required().label("Address"),
});

function RegisterHouse({ navigation }) {
  const userApi = useApi(users.getUser);
  const [progress, setProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [imageUri, setImageUri] = useState();
  const auth = useAuth();
  const { user } = useAuth();
  const [dataUser, setDataUser] = useState(user);
  const updateApi = useApi(users.updateUser);

  useEffect(() => {
    userApi.request();
  }, []);

  const register = async (dataForm, { resetForm }) => {
    dataForm.image = imageUri;

    if (user.rol !== 3) dataForm.userId = user.userId;

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
      return alert(result.data);
    }
    //setDataUser({ ...dataUser, rol: 2 });
    dataUser.rol = 2;

    const res = await updateApi.request(dataUser, "rol");

    auth.logIn(res.data.token);

    setImageUri(null);
    resetForm();
    navigation.navigate(routes.HOME);
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
          userId: 0,
          rtn: "",
          accountBank: "",
          typeAccount: "",
          bankName: "",
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
            placeholder="Name House Refuge"
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
            autoCorrect={false}
            icon="passport-biometric"
            name="rtn"
            placeholder="RTN / DNI"
          />
          <FormField
            autoCorrect={false}
            icon="account-cash"
            name="accountBank"
            placeholder="No. Cuenta Banco"
          />
          <FormField
            autoCorrect={false}
            icon="cash-usd"
            name="typeAccount"
            placeholder="Tipo Cuenta (ahorro, cheque, etc)"
          />
          <FormField
            autoCorrect={false}
            icon="bank"
            name="bankName"
            placeholder="Nombre Banco"
          />
          {user.rol == 1 ? (
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
          ) : null}

          <SubmitButton title="Register" />
        </View>
      </Form>
    </ScrollView>
  );
}

export default RegisterHouse;
