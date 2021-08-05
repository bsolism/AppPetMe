import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import Screen from "../../components/Screen";
import SeparadorTitle from "../../components/SeparadorTitle";
import AppText from "../../components/AppTex";
import authStorage from "../../auth/storage";
import AppLoading from "expo-app-loading";

import styles from "./styles";

function Profile(props) {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
    console.log(user);
  }, []);

  console.log(user);
  return (
    <Screen style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require("../../assets/profile2.png")}
        />
      </View>
      <View style={styles.content}>
        <SeparadorTitle title="Nombre" />
        <AppText icon="account" style={styles.text}>
          {user ? user.unique_name : null}
        </AppText>
        <SeparadorTitle title="Email" />
        <AppText icon="email" style={styles.text}>
          {user ? user.email : null}
        </AppText>
        <SeparadorTitle title="Telefono" />
        <AppText icon="phone" style={styles.text}>
          {user ? user.phoneNumber : null}
        </AppText>
      </View>
    </Screen>
  );
}

export default Profile;
