import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import AppText from "../components/AppTex";
import colors from "../config/colors";

function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerDrawer}>
          <View>
            <AppText>Bernardo Solis</AppText>
            <AppText>bsolis@email.com</AppText>
          </View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            }}
            style={styles.image}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.Touchable}>
        <AppText>Log Out</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerDrawer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.light_grey,
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  Touchable: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 50,
    backgroundColor: colors.light_grey,
    padding: 20,
  },
});

export default CustomDrawer;
