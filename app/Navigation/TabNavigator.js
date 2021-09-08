import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import Home from "../screen/Home";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import petApi from "../service/Pets";

const Tab = createMaterialTopTabNavigator();

function TabNavigator(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        style: styles.tabNavigator,
      }}
    >
      <Tab.Screen name="Little" component={Home} />
      <Tab.Screen name="Medium" component={Home} />
      <Tab.Screen name="Big" component={Home} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabNavigator: {
    height: 40,
    backgroundColor: "transparent",
  },
});

export default TabNavigator;
