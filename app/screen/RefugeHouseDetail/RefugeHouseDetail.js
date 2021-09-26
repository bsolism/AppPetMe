import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import Screen from "../../components/Screen";
import RowWithModal from "../../components/RowWithModal";

import styles from "./styles";

function RefugeHouseDetail(props) {
  const { params } = props.route;
  const [data, setData] = useState(params);

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
