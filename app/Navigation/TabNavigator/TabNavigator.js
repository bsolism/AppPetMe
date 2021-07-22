import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../../screen/Home";
import pets from "../../models/PetModels";

const Tab = createMaterialTopTabNavigator();

function TabNavigator(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        style: { height: 40, backgroundColor: "transparent" },
      }}
    >
      <Tab.Screen
        name="Little"
        component={Home}
        initialParams={pets.filter((pet) => pet.category === "Little")}
      />
      <Tab.Screen
        name="Medium"
        component={Home}
        initialParams={pets.filter((pet) => pet.category === "Medium")}
      />
      <Tab.Screen
        name="Big"
        component={Home}
        initialParams={pets.filter((pet) => pet.category === "Big")}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
