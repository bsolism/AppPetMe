import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../../components/FormComponent";
import user from "../../service/user";
import authApi from "../../service/authApi";
import useAuth from "../../auth/useAuth";
import useApi from "../../hooks/useApi";
import ActivityIndicator from "../../components/ActivityIndicator";

import styles from "./styles";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().label("Phone Number"),
  password: Yup.string().required().min(4).label("Password"),
});

function Register() {
  const registerApi = useApi(user.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const register = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError("Correo ya existe en la base de datos");
      else {
        setError("An unexpected error occurred");
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken.token);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Form
          initialValues={{ name: "", email: "", phoneNumber: "", password: "" }}
          onSubmit={register}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCorrect={false}
            icon="phone"
            name="phoneNumber"
            placeholder="Phone"
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
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </Form>
      </Screen>
    </>
  );
}

export default Register;
