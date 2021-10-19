import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import RefugeHouseDetail from "../RefugeHouseDetail/RefugeHouseDetail";
import ListingPets from "./ListingPets";
import RequestAdoption from "./RequestAdoption";

const Tab = createMaterialTopTabNavigator();

function TabRefuge(props) {
  const { data, text } = props;

  console.log("Desde tab")
  console.log(text)

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabNavigator,
      }}
    >
      <Tab.Screen
        name="Mascotas"
        component={ListingPets}
        initialParams={text}
      />
      <Tab.Screen
        name="Informacion"
        component={RefugeHouseDetail}
        initialParams={data}
      />
      {/* <Tab.Screen
        name="Solicitudes"
        component={RequestAdoption}
        initialParams={data}
      />*/}
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
