import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./app/Navigation/rootNavigator";
import AppNavigator from "./app/Navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
}
