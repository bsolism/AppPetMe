import React, { useState, useEffect } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import Screen from "../../components/Screen";
import SeparadorTitle from "../../components/SeparadorTitle";
import AppText from "../../components/AppTex";
import authStorage from "../../auth/storage";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import AppModal from "./Modal";
import Icon from "../../components/Icon";
import useAuth from "../../auth/useAuth";

import styles from "./styles";

function Profile(props) {
  const [dataUser, setDataUser] = useState();
  const [field, setField] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useAuth();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setDataUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, [user]);

  const onPressModal = (field) => {
    setField(field);
    setModalVisible(true);
  };

  return (
    <>
      <Screen style={styles.container}>
        <View style={styles.containerImage}>
          <ImagePicker dataUser={dataUser} setDataUser={setDataUser} />
        </View>
        <View style={styles.content}>
          <SeparadorTitle title="Nombre" />
          <View style={styles.row}>
            <AppText icon="account" style={styles.text}>
              {dataUser ? dataUser.name : null}
            </AppText>
            <TouchableWithoutFeedback onPress={() => onPressModal("name")}>
              <View style={styles.icon}>
                <Icon
                  name="square-edit-outline"
                  backgroundColor="white"
                  iconColor="grey"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <SeparadorTitle title="Telefono" />
          <View style={styles.row}>
            <AppText icon="phone" style={styles.text}>
              {dataUser ? dataUser.phoneNumber : null}
            </AppText>
            <TouchableWithoutFeedback
              onPress={() => onPressModal("phoneNumber")}
            >
              <View style={styles.icon}>
                <Icon
                  name="square-edit-outline"
                  backgroundColor="white"
                  iconColor="grey"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <SeparadorTitle title="Email" />
          <View style={styles.row}>
            <AppText icon="email" style={styles.text}>
              {dataUser ? dataUser.email : null}
            </AppText>
          </View>
          <SeparadorTitle title="Contraseña" />
          <View style={styles.row}>
            <AppText icon="lock" style={styles.text}>
              **********
            </AppText>
            <TouchableWithoutFeedback onPress={() => onPressModal("password")}>
              <View style={styles.icon}>
                <Icon
                  name="square-edit-outline"
                  backgroundColor="white"
                  iconColor="grey"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Screen>
      <AppModal
        dataUser={dataUser}
        setDataUser={setDataUser}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        field={field}
      />
    </>
  );
}

export default Profile;
