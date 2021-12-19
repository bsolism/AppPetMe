import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDawer";
import Profile from "../screen/Profile";
import TabNavigator from "./TabNavigator";
import ListingsRequest from "../screen/ListingsRequest";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
      <Drawer.Screen
        component={TabNavigator}
        name="Inicio"
        options={{
          title: "Inicio",
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="home" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        component={Profile}
        name="Profile"
        options={{
          title: "Perfil",
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        component={ListingsRequest}
        name="ListingRequest"
        options={{
          title: "Solicitud Adopción",
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="frequently-asked-questions"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
