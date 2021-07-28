import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import PetDetails from "../screen/PetDetails";
import colors from "../config/colors";
import AdoptionRequest from "../screen/AdoptionRequest";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Inicio"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PetDetails"
        component={PetDetails}
        options={({ route }) => ({
          title: route.params.name,
          headerShown: true,
          headerStyle: { backgroundColor: colors.blue },
        })}
      />

      <Stack.Screen
        name="AdoptionRequest"
        component={AdoptionRequest}
        options={{
          headerShown: true,
          title: "Adoption Form",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
