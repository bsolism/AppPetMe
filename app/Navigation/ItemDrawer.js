import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Profile from "../screen/Profile";
import ListingHouseRefuge from "../screen/ListingHouseRefuge";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

function ItemDrawer(props) {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListingRefuge"
        component={ListingHouseRefuge}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ItemDrawer;
