import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/Home";
import Profile from "../screen/Profile";
import PetDetails from "../screen/PetDetails";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="PetDetails" component={PetDetails} />
    </Stack.Navigator>
  );
};

const DrawerStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, DrawerStackNavigator };
