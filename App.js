import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import { navigationRef } from "./app/Navigation/rootNavigator";
import AppNavigator from "./app/Navigation/AppNavigator";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import RefugeHouse from "./app/screen/RefugeHouse";
import TabRefuge from "./app/screen/RefugeHouse/TabRefuge";
import Demo from "./app/screen/Demo/Demo";
import HouseProfile from "./app/screen/RefugeHouse/HouseProfile";
import ActionButton from "./app/components/ActionButton";
import PayPal from "rn-expo-paypal-integration";
import Voucher from "./app/screen/Voucher";

import colors from "./app/config/colors";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={() => console.log("Error de restore")}
      />
    );

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer ref={navigationRef}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}
