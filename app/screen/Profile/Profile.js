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
import userApi from "../../service/user";
import server from "../../service/server";
import useApi from "../../hooks/useApi";
import UploadScreen from "../UploadScreen";

import styles from "./styles";

function Profile(props) {
  const { user } = useAuth();
  const [dataUser, setDataUser] = useState(user);
  const [dataChange, setDataChange] = useState(false);
  const userUpdate = useApi(userApi.updateUser);
  const [field, setField] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const auth = useAuth();

  const [imageUri, setImageUri] = useState(
    server.URI + "/UserImageProfile/" + user.image
  );
  const [dataReq, setDataReq] = useState({
    userId: user.userId,
    email: user.email,
    file: null,
  });
  useEffect(() => {
    update(dataChange);
  }, [dataChange]);

  const update = async (dataChange) => {
    if (dataChange) {
      dataReq.file = imageUri;
      const res = await userUpdate.request(dataReq, "file");
      setDataChange(false);
      if (!res.ok) {
        return alert("Could not save the listing");
      }
      auth.logIn(res.data.token);
    }
  };
  const onPressModal = (field) => {
    setField(field);
    setModalVisible(true);
  };

  {
    /*const [dataUser, setDataUser] = useState();
  const [field, setField] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useAuth();
  const auth = useAuth();
  const updateApi = useApi(userApi.updateUser);
  const [imageChange, setImageChange] = useState(false);
  const [dataReq, setDataReq] = useState({
    userId: user.userId,
    email: user.email,
    file: null,
  });
  const [imageUri, setImageUri] = useState(
    server.URI + "/UserImageProfile/" + data.image
  );*/
  }

  {
    /*const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setDataUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, [user]);

  useEffect(() => {
    update(imageChange);
  }, [imageChange]);

  const onPressModal = (field) => {
    setField(field);
    setModalVisible(true);
  };
  const update = async (imageChange) => {
    if (imageChange) {
      dataReq.file = imageUri;
      const res = await updateApi.request(dataReq, "file");
      console.log(res.data);
      auth.logIn(res.data.token);
      setImageChange(false);
    }
  };*/
  }

  return (
    <>
      <Screen style={styles.container}>
        <View style={styles.containerImage}>
          <ImagePicker
            imageUri={imageUri}
            setImageUri={setImageUri}
            setImageChange={setDataChange}
          />
        </View>
        <View style={styles.content}>
          <SeparadorTitle title="Nombre" />
          <View style={styles.row}>
            <AppText icon="account" style={styles.text}>
              {user ? user.name : null}
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
              {user ? user.phoneNumber : null}
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
              {user ? user.email : null}
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
