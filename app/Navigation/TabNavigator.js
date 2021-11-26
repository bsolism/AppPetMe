import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import Home from "../screen/Home";

const Tab = createMaterialTopTabNavigator();

function TabNavigator(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        style: styles.tabNavigator,
      }}
    >
      <Tab.Screen name="Little" component={Home} options={{tabBarLabel: 'Pequeño'}} />
      <Tab.Screen name="Medium" component={Home} options={{tabBarLabel: 'Mediano'}}/>
      <Tab.Screen name="Big" component={Home} options={{tabBarLabel: 'Grande'}}/>
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
