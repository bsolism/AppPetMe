import React, { useState } from "react";
import { View } from "react-native";
import TabRefuge from "./TabRefuge";
import ImagePicker from "../../components/ImagePicker";
import server from "../../service/server";

import styles from "./styles";

function RefugeHouse(props) {
  const { params } = props.route;
  const [imageUri, setImageUri] = useState(
    server.URI + "/HouseImageProfile/" + params.image
  );
  const [imageChange, setImageChange] = useState(false);

  return (
    <>
      <View style={styles.containerImage}>
        <ImagePicker
          imageUri={imageUri}
          setImageUri={setImageUri}
          setImageChange={setImageChange}
        />
      </View>
      <TabRefuge data={params} />
    </>
  );
}

export default RefugeHouse;
