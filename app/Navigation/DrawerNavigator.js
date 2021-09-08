import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDawer";
import Profile from "../screen/Profile";
import TabNavigator from "./TabNavigator";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";

import { Drawer as DrawerPaper } from "react-native-paper";
import SideMenu from "./SideMenu";
import ItemDrawer from "./ItemDrawer";
import ListingHouseRefuge from "../screen/ListingHouseRefuge";

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
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
