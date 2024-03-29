import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

import styles from "./styles";

function AppImagePicker(props) {
  const { imageUri, setImageUri, setImageChange } = props;

  const onSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImageUri(result.uri);
      if (setImageChange) setImageChange(true);
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
            !imageUri ? require("../../assets/user.png") : { uri: imageUri }
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
