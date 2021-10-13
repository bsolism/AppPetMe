import React from "react";
import { View, Modal, TouchableWithoutFeedback } from "react-native";
import Screen from "../../components/Screen";
import AppText from "../../components/AppTex";
import Icon from "../../components/Icon";
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../../components/FormComponent";
import requestService from "../../service/RequestAdoption";
import useApi from "../../hooks/useApi";

import styles from "./styles";

function AppModal(props) {
  const { modalVisible, setModalVisible, data, setData, field } = props;
  const updateApi = useApi(requestService.update);

  const handleSubmit = async (info) => {
    setData({ ...data, [field.field]: info[field.field] });
    const result = await updateApi.request(info);

    setModalVisible(false);
  };

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <Screen style={styles.modal}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View>
            <Icon name="close" size={30} />
          </View>
        </TouchableWithoutFeedback>
        <Form
          initialValues={{
            requestAdoptionId: field.id,
            [field.field]: field.data.toString(),
            hasPets: data.hasPets,
            isApproved: data.isApproved,
            isActive: data.isActive,
            isRejected: data.isRejected,
          }}
          onSubmit={handleSubmit}
        >
          <View style={styles.modalContainer}>
            <AppText>Ingresar: </AppText>
            <FormField
              autoCorrect={false}
              icon={field.icon}
              name={field.field}
            />
            <SubmitButton title="Guardar" />
          </View>
        </Form>
      </Screen>
    </Modal>
  );
}

export default AppModal;
