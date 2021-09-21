import React, { useState, useEffect } from "react";
import { View, Modal } from "react-native";
import Screen from "../../components/Screen";
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../../components/FormComponent";
import AppText from "../../components/AppTex";
import useApi from "../../hooks/useApi";
import user from "../../service/user";
import authApi from "../../service/authApi";
import useAuth from "../../auth/useAuth";
import * as Yup from "yup";

import styles from "./styles";

function AppModal(props) {
  const { dataUser, setDataUser, modalVisible, setModalVisible, field } = props;
  const updateApi = useApi(user.updateUser);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();
  const [sendData, setSendData] = useState();

  useEffect(() => {
    updateData();
  }, [dataUser]);

  const updateData = () => {
    if (dataUser != undefined) {
      setSendData({
        ...sendData,
        userId: dataUser.userId,
        email: dataUser.email,
      });
    }
  };

  const handleSubmit = async (data) => {
    setDataUser({ ...dataUser, [field]: data[field] });
    const result = await updateApi.request(data, field);
    auth.logIn(result.data.token);
    setModalVisible(false);
  };
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <Screen style={styles.modal}>
        <View style={styles.modalContainer}>
          <Form
            initialValues={{
              userId: dataUser ? dataUser.userId : "",
              email: dataUser ? dataUser.email : "",
              [field]: dataUser ? dataUser[field] : "",
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object().shape({
              [field]: Yup.string().required().label(field),
            })}
          >
            {field == "name" ? <AppText>Ingresar Nombre </AppText> : null}
            {field == "name" ? (
              <FormField
                autoCorrect={false}
                icon="account"
                name="name"
                placeholder="Name"
              />
            ) : null}
            {field == "phoneNumber" ? (
              <AppText>Ingresar Numero Telefono </AppText>
            ) : null}
            {field == "phoneNumber" ? (
              <FormField
                autoCorrect={false}
                icon="phone"
                name="phoneNumber"
                placeholder="Phone"
                keyboardType="numeric"
              />
            ) : null}
            {field == "password" ? (
              <AppText>Ingresar Nueva Contraseña </AppText>
            ) : null}
            {field == "password" ? (
              <FormField
                autoCorrect={false}
                icon="lock"
                name="password"
                secureTextEntry
                textContentType="password"
              />
            ) : null}

            <SubmitButton title="Guardar" />
          </Form>
        </View>
      </Screen>
    </Modal>
  );
}

export default AppModal;
