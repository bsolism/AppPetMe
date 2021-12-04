import React, { useState, useEffect } from "react";
import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import ImagePicker from "../../components/ImagePicker";
import server from "../../service/server";
import useApi from "../../hooks/useApi";
import houseApi from "../../service/ListingHouse";
import TabPets from "./TabPets";
import TabProfile from "./TabProfile";
import ActionButton from "../../components/ActionButton";

import styles from "./styles";
import colors from "../../config/colors";
import TabRequest from "./TabRequest";
import Screen from "../../components/Screen";

function HouseProfile(props) {
  const { params } = props.route;
  const { navigation } = props;
  const [data, setData] = useState(params);
  const [imageUri, setImageUri] = useState(
    server.URI + "/HouseImageProfile/" + data.image
  );
  const [tab, setTab] = useState(1);
  const [text, setText] = useState();
  const [imageChange, setImageChange] = useState(false);
  const houseUpdate = useApi(houseApi.updateProfileHouse);

  useEffect(() => {
    submitImage(imageChange);
  }, [imageChange]);

  const submitImage = async (image) => {
    if (image) {
      const dataInfo = {
        profileHouseId: data.profileHouseId,
        file: imageUri,
      };
      const res = await houseUpdate.request(dataInfo, "file");

      if (res.ok) {
        setData({ ...data, image: res.data.image });
      }
    }
    setImageChange(false);
  };
  const getData = async (houseId) => {
    const getHouse = await houseApi.getProfileHouseById(houseId);
    if (getHouse.ok) setData(getHouse.data);
  };
  const press = (num) => {
    setTab(num);
  };

  return (
    <Screen>
      <View style={styles.containerImage}>
        <ImagePicker
          imageUri={imageUri}
          setImageUri={setImageUri}
          setImageChange={setImageChange}
        />
      </View>
      <View style={styles.tabButton}>
        <View style={styles.tabMenu}>
          <TouchableHighlight
            style={tab == 1 ? styles.tabOnPress : styles.tabOutPress}
            onPress={() => press(1)}
          >
            <Text style={styles.textTab}>Mascotas</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.tabMenu}>
          <TouchableHighlight
            style={tab == 2 ? styles.tabOnPress : styles.tabOutPress}
            onPress={() => press(2)}
          >
            <Text style={styles.textTab}>Perfil</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.tabMenu}>
          <TouchableHighlight
            style={tab == 3 ? styles.tabOnPress : styles.tabOutPress}
            onPress={() => press(3)}
          >
            <Text style={styles.textTab}>Solicitudes</Text>
          </TouchableHighlight>
        </View>
      </View>

      {tab == 1 ? <TabPets data={data} navigation={navigation} /> : null}
      {tab == 2 ? <TabProfile data={data} getData={getData} /> : null}
      {tab == 3 ? (
        <TabRequest data={data.profileHouseId} navigation={navigation} />
      ) : null}
    </Screen>
  );
}

export default HouseProfile;
