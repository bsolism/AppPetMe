import React from "react";
import { ImageBackground, View, Image } from "react-native";
import AppText from "../../components/AppTex";
import Button from "../../components/Button";

import routes from "../../navigation/routes";

import styles from "./styles";

function Welcome({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={3}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <AppText style={styles.tagLine}>PetMe</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          color="primary"
          colorText="white"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Register"
          color="secondary"
          colorText="white"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

export default Welcome;
