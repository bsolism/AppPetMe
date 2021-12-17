import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import PetDetails from "../screen/PetDetails";
import colors from "../config/colors";
import AdoptionRequest from "../screen/AdoptionRequest";
import AdoptionRequestDetail from "../screen/AdoptionRequestDetail";
import ListingHouseRefuge from "../screen/ListingHouseRefuge";
import RefugeHouseDetail from "../screen/RefugeHouseDetail";
import RegisterHouse from "../screen/RegisterHouse";
import HouseProfile from "../screen/RefugeHouse";
import FormAddPet from "../screen/RefugeHouse/FormAddPet";
import Payment from "../screen/Payment";
import Voucher from "../screen/Voucher";

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
          title: "Detalle",
          headerShown: true,
          headerStyle: { backgroundColor: colors.blue },
        })}
      />
      <Stack.Screen
        name="AdoptionRequest"
        component={AdoptionRequest}
        options={{
          headerShown: true,
          title: "Adopción",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
      <Stack.Screen
        name="ListingRefuge"
        component={ListingHouseRefuge}
        options={{
          headerShown: true,
          title: "Refugios",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
      <Stack.Screen
        name="RefugeHouseDetail"
        component={RefugeHouseDetail}
        options={{
          headerShown: true,
          title: "Refugio",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
      <Stack.Screen
        name="HouseProfile"
        component={HouseProfile}
        options={{
          headerShown: true,
          title: "Perfil Refugio",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
      <Stack.Screen
        name="RegisterHouse"
        component={RegisterHouse}
        options={{
          headerShown: true,
          title: "Registrar Refugio",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
      <Stack.Screen
        name="AdoptionRequestDetail"
        component={AdoptionRequestDetail}
        options={{
          headerShown: true,
          title: "Solicitud Adopción",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
      <Stack.Screen
        name="FormAddPet"
        component={FormAddPet}
        options={{
          headerShown: true,
          title: "Mascota",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
      <Stack.Screen
        name="payment"
        component={Payment}
        options={{
          headerShown: true,
          title: "Donar",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
      <Stack.Screen
        name="Voucher"
        component={Voucher}
        options={{
          headerShown: false,
          title: "Voucher",
          headerStyle: { backgroundColor: colors.blue },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
