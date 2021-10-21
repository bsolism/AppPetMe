import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Screen from "../../components/Screen";
import RowWithModal from "../../components/RowWithModal";
import colors from "../../config/colors";

//import styles from "./styles";

function TabProfile(props) {
  const { data } = props;

  const [dataInfo, setDataInfo] = useState(data);
  return (
    <ScrollView style={styles.container}>
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
          itemName={dataInfo.city}
        />
        <RowWithModal
          titleRow="Direccion"
          styleText={styles.textTitle}
          iconName="google-maps"
          itemName={dataInfo.address}
        />
        <RowWithModal
          titleRow="Email"
          styleText={styles.textTitle}
          iconName="email"
          itemName={dataInfo.email}
        />
        <RowWithModal
          titleRow="Telefono"
          styleText={styles.textTitle}
          iconName="phone"
          itemName={dataInfo.phone}
        />
        <RowWithModal
          titleRow="Usuario Principal"
          styleText={styles.textTitle}
          iconName="account"
          itemName={dataInfo.user.name}
          itemEmail={dataInfo.user.email}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 5,
  },
  row: {
    flexDirection: "row",
    height: 40,
    width: "100%",
  },
  text: {
    marginVertical: 20,
    marginLeft: 5,
    width: "80%",
  },
  textTitle: {
    fontSize: 12,
  },
});

export default TabProfile;
