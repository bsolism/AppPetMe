import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import useApi from "../../hooks/useApi";
import user from "../../service/user";
import listingHouse from "../../service/ListingHouse";
import useAuth from "../../auth/useAuth";
import imagePickerApi from "../../hooks/imagePickerApi";

import server from "../../service/server";

import styles from "./styles";

function AppImagePicker(props) {
  const { dataUser, setDataUser, setParams } = props;
  const [image, setImage] = useState();
  const updateApi = useApi(user.updateUser);
  const updateProfileHouse = useApi(listingHouse.updateProfileHouse);
  const auth = useAuth();
  const [data, setData] = useState();
  const imagePicker = imagePickerApi();

  useEffect(() => {
    {
      imagePicker.imageProfile(dataUser);
    }
  }, [dataUser]);

  const onSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      //setImage(result.uri);
      imagePicker.setImage(result.uri);
      imagePicker.data.file = result.uri;
      if (imagePicker.data.profileHouseId) {
        const res = await updateProfileHouse.request(imagePicker.data, "file");
        setDataUser(res.data);
        setParams(res.data);
        //const res = await updateProfileHouse.request(imagePicker.data, "file");
      } else {
        const res = await user.updateUser(data, "file");
        auth.logIn(res.data.token);
      }

      //data.file = result.uri;

      //const res = await user.updateUser(data, "file");
      //auth.logIn(res.data.token);
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
            !imagePicker.image
              ? require("../../assets/user.png")
              : { uri: imagePicker.image }
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