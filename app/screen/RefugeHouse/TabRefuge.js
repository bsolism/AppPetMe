import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, StyleSheet } from "react-native";
import Demo from "./Demo";
import RefugeHouseDetail from "../RefugeHouseDetail/RefugeHouseDetail";
import ListingPets from "./ListingPets";
import useApi from "../../hooks/useApi";
import petApi from "../../service/Pets";

const Tab = createMaterialTopTabNavigator();

function TabRefuge(props) {
  const { data } = props;

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabNavigator,
      }}
    >
      <Tab.Screen
        name="Publicaciones"
        component={ListingPets}
        initialParams={data}
      />
      <Tab.Screen
        name="Informacion"
        component={RefugeHouseDetail}
        initialParams={data}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: "transparent",
    marginTop: 50,
  },
});

export default TabRefuge;
