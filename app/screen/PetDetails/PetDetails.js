import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import Carousel from "../../components/Carousel";
import TitleSeparator from "../../components/SeparadorTitle";
import AppText from "../../components/AppTex";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import Button from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ArrowBack from "../../components/ArrowBack";

import styles from "./styles";

const { heigth } = Dimensions.get("window");

function PetDetails({ route, navigation }) {
  const [screenHeigth, setScreenHeigth] = useState(heigth);
  const pet = route.params;

  const onContentSizeChange = (contentWidth, contentHeigth) => {
    setScreenHeigth(contentHeigth);
  };
  const scrollEnabled = screenHeigth > heigth;
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <ArrowBack navigation={navigation} />
        <View style={styles.containerImage}>
          <Carousel photo={pet.photo} padding={0} />
        </View>
        <View style={styles.containerImage}>
          <Carousel photo={pet.photo} padding={0} />
        </View>
        <View style={styles.containerImage}>
          <Carousel photo={pet.photo} padding={0} />
        </View>
        <View style={styles.containerImage}>
          <Carousel photo={pet.photo} padding={0} />
        </View>
      </ScrollView>
    </Screen>
  );
}

export default PetDetails;
