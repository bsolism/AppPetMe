import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../CustomDrawer";
import Profile from "../../screen/Profile";
import TabNavigator from "../TabNavigator";
import { MainStackNavigator, DrawerStackNavigator } from "../StackNavigator";

const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#9AC4F8",
          elevation: 10,
          shadowOpacity: 0,
        },
        headerTitle: "PetMe",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={MainStackNavigator} name="Inicio" />
      <Drawer.Screen component={Profile} name="Profile" />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
