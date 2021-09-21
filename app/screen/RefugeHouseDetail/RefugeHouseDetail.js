import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import Screen from "../../components/Screen";
import ImagePicker from "../../components/ImagePicker";
import RowWithModal from "../../components/RowWithModal";
import server from "../../service/server";
import useApi from "../../hooks/useApi";
import listingHouse from "../../service/ListingHouse";

import styles from "./styles";

function RefugeHouseDetail(props) {
  const { params } = props.route;
  const [data, setData] = useState(params);
  {
    /*const { params } = props.route;
  const [data, setData] = useState(params);
  const [imageUri, setImageUri] = useState(
    server.URI + "/HouseImageProfile/" + data.image
  );
  const [imageChange, setImageChange] = useState(false);
  const updateProfileHouse = useApi(listingHouse.updateProfileHouse);
  const [dataReq, setDataReq] = useState({
    profileHouseId: data.profileHouseId,
    file: null,
  });

  useEffect(() => {
    update(imageChange);
  }, [imageChange]);

  const update = async (imageChange) => {
    if (imageChange) {
      dataReq.file = imageUri;
      const res = await updateProfileHouse.request(dataReq, "file");
      setData(res.data);
      setImageChange(false);
    }
  };
*/
  }
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <RowWithModal
            titleRow="Nombre"
            styleText={styles.textTitle}
            iconName="home-account"
            itemName={data.name}
          />
          <RowWithModal
            titleRow="Ciudad"
            styleText={styles.textTitle}
            iconName="city"
            itemName={data.city}
          />
          <RowWithModal
            titleRow="Direccion"
            styleText={styles.textTitle}
            iconName="google-maps"
            itemName={data.address}
          />
          <RowWithModal
            titleRow="Email"
            styleText={styles.textTitle}
            iconName="email"
            itemName={data.email}
          />
          <RowWithModal
            titleRow="Telefono"
            styleText={styles.textTitle}
            iconName="phone"
            itemName={data.phone}
          />
          <RowWithModal
            titleRow="Usuario Principal"
            styleText={styles.textTitle}
            iconName="account"
            itemName={data.user.name}
            itemEmail={data.user.email}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

export default RefugeHouseDetail;
