import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import DrawerNavigator from "./app/Navigation/DrawerNavigator";
import Carousel from "./app/components/Carousel";
import { navigationRef } from "./app/Navigation/rootNavigator";
import NavigationTheme from "./app/Navigation/NavigationTheme";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
