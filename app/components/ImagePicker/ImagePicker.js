import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

import server from "../../service/server";

import styles from "./styles";

function AppImagePicker(props) {
  const { img } = props;
  const [image, setImage] = useState(img);

  useEffect(() => {
    imageProfile();
  }, [img]);

  const imageProfile = () => {
    if (img != undefined) {
      const uri = server.URI + "/UserImageProfile/" + img.image;
      setImage(uri);
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
