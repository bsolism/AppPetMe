import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screen/Welcome";
import Login from "../screen/Login";
import Register from "../screen/Register";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false, title: "Bienvenido" }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ title: "Ingresar" }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{ title: "Registrar" }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
