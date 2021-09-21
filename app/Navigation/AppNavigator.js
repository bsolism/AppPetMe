import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import PetDetails from "../screen/PetDetails";
import colors from "../config/colors";
import AdoptionRequest from "../screen/AdoptionRequest";
import ListingHouseRefuge from "../screen/ListingHouseRefuge";
import RefugeHouseDetail from "../screen/RefugeHouseDetail";
import RegisterHouse from "../screen/RegisterHouse";
import RefugeHouse from "../screen/RefugeHouse";
import FormAdoption from "../screen/FormAdoption";

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
      <Stack.Screen
        name="ListingRefuge"
        component={ListingHouseRefuge}
        options={{
          headerShown: true,
          title: "Refuge House",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
      <Stack.Screen
        name="RefugeHouseDetail"
        component={RefugeHouseDetail}
        options={{
          headerShown: true,
          title: "Refuge House",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
      <Stack.Screen
        name="RefugeHouse"
        component={RefugeHouse}
        options={{
          headerShown: true,
          title: "Refuge House",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
      <Stack.Screen
        name="RegisterHouse"
        component={RegisterHouse}
        options={{
          headerShown: true,
          title: "Register House",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
      <Stack.Screen
        name="FormAdoption"
        component={FormAdoption}
        options={{
          headerShown: true,
          title: "Form Adoption",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
