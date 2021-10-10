import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDawer";
import Profile from "../screen/Profile";
import TabNavigator from "./TabNavigator";
import ListingsRequest from "../screen/ListingsRequest";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";

const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {
  const { user, logOut } = useAuth();
  return (
    <Drawer.Navigator
      initialRouteName="list"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.blue,
          elevation: 10,
          shadowOpacity: 0,
        },
        headerTitle: "PetMe",
      }}
      drawerContent={(props) => (
        <CustomDrawer user={user} logOut={logOut} {...props} />
      )}
    >
      <Drawer.Screen component={TabNavigator} name="Inicio" />
      <Drawer.Screen
        component={Profile}
        name="Profile"
        options={{ title: "Perfil" }}
      />
      <Drawer.Screen
        component={ListingsRequest}
        name="ListingRequest"
        options={{ title: "Solicitudes de Adopcion" }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
