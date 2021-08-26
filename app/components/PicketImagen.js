import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function PicketImagen() {
  const [image, setImage] = useState(null);

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
    <View
      style={{
        width: 140,
        height: 140,

        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{
          width: 120,
          height: 120,
          borderRadius: 120,
          alignItems: "center",
        }}
        onPress={() => console.log("profile")}
      >
        <Image
          style={{
            width: 115,
            height: 115,
            borderRadius: 114,
            resizeMode: "cover",
          }}
          source={!image ? require("../assets/user.png") : { uri: image }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          marginTop: -40,
          marginLeft: 60,
          alignItems: "center",
          borderRadius: 40,
          backgroundColor: "#6495ED",
        }}
        onPress={onSelectImage}
      >
        <Image
          style={{
            width: 30,
            height: 30,
            marginTop: 8,
            resizeMode: "contain",
            marginBottom: 10,
            tintColor: "#FFF8DC",
          }}
          source={require("../assets/camera.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
