import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import useApi from "../../hooks/useApi";
import user from "../../service/user";
import useAuth from "../../auth/useAuth";

import server from "../../service/server";

import styles from "./styles";

function AppImagePicker(props) {
  const { dataUser } = props;
  const [image, setImage] = useState();
  const updateApi = useApi(user.updateUser);
  const auth = useAuth();
  const [data, setData] = useState();

  useEffect(() => {
    imageProfile();
  }, [dataUser]);

  const imageProfile = () => {
    if (dataUser != undefined) {
      const uri = server.URI + "/UserImageProfile/" + dataUser.image;
      setImage(uri);
      setData({
        ...data,
        userId: dataUser.userId,
        email: dataUser.email,
        file: null,
      });
    }
  };

  const onSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      data.file = result.uri;
      const res = await user.updateUser(data, "file");
      auth.logIn(res.data.token);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.ImageContainer}
        onPress={() => console.log("profile")}
      >
        <Image
          style={styles.ImageProfile}
          source={
            image == undefined
              ? require("../../assets/user.png")
              : { uri: image }
          }
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.CameraContainer} onPress={onSelectImage}>
        <Image
          style={styles.IconCamera}
          source={require("../../assets/camera.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default AppImagePicker;
