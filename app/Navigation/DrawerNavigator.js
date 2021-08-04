import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDawer";
import Profile from "../screen/Profile";
import TabNavigator from "./TabNavigator";
import colors from "../config/colors";

const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.blue,
          elevation: 10,
          shadowOpacity: 0,
        },
        headerTitle: "PetMe",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={TabNavigator} name="Inicio" />
      <Drawer.Screen component={Profile} name="Profile" />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
