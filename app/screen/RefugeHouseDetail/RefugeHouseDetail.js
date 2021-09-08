import React, { useState } from "react";
import { View } from "react-native";
import Screen from "../../components/Screen";
import ImagePicker from "../../components/ImagePicker";
import RowWithModal from "../../components/RowWithModal";

import styles from "./styles";

function RefugeHouseDetail(props) {
  const { params } = props.route;
  const { setParams } = props.navigation;
  const [data, setData] = useState(params);

  return (
    <Screen style={styles.container}>
      <View style={styles.containerImage}>
        <ImagePicker
          dataUser={data}
          setDataUser={setData}
          setParams={setParams}
        />
      </View>
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
    </Screen>
  );
}

export default RefugeHouseDetail;
