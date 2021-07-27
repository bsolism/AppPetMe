import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { navigationRef } from "./app/Navigation/rootNavigator";
import TextInput from "./app/components/TextInput";
import AppNavigator from "./app/Navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
}
