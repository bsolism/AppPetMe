import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

import styles from "./styles";

function PickerDemo(props) {
  const { imageUri, setImageUri } = props;

  const onSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImageUri(result.uri);
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

export default PickerDemo;
