import React from "react";
import { View, Image, Button, Text } from "react-native";
import Screen from "../../components/Screen";
import AppText from "../../components/AppTex";
import Moment from "moment";
import routes from "../../Navigation/routes";

import styles from "./styles";

function Voucher({ route, navigation }) {
  const { params } = route;
  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require("../../assets/PetLogo3.png")}
      />
      <View style={styles.container}>
        <AppText style={styles.title}>Notificación de Donación</AppText>
        <AppText style={styles.text}>
          Tu donativo se ha registrado con exito
        </AppText>
        <View style={styles.row}>
          <View style={styles.left}>
            <AppText>Referencia:</AppText>
          </View>
          <View style={styles.right}>
            <Text style={styles.textRight}>{params.donationId}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.left}>
            <AppText>Fecha:</AppText>
          </View>
          <View style={styles.right}>
            <Text style={styles.textRight}>
              {Moment(params.dateCreated).format("DD/MMM/yyyy")}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.left}>
            <AppText>Hora:</AppText>
          </View>
          <View style={styles.right}>
            <Text style={styles.textRight}>
              {Moment(params.dateCreated).format("hh:mm a")}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.left}>
            <AppText>Monto:</AppText>
          </View>
          <View style={styles.right}>
            <Text style={styles.textRight}>
              {params.monto} {params.prefix}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.left}>
            <AppText>Mascota:</AppText>
          </View>
          <View style={styles.right}>
            <Text style={styles.textRight}>{params.pet.name}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.left}>
            <AppText>Hogar:</AppText>
          </View>
          <View style={styles.right}>
            <Text style={styles.textRight}>{params.profileHouse.name}</Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          title="Cerrar"
          onPress={() => navigation.navigate(routes.HOME)}
        />
      </View>
    </Screen>
  );
}

export default Voucher;
